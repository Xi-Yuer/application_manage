import axios from 'axios'
import type { AxiosInstance } from 'axios'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'

import type { RequestInterceptors, RequestConfig } from './type' //实例的类型/配置的类型
import local from '@/utils/cache/index'
import { USER_ACCOUNT } from '@/constant'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading?: boolean

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? false
    // 所有实例都会有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        NProgress.start()
        const accountData = local.getCache(USER_ACCOUNT)
        if (accountData.token) {
          config.headers.Authorization = `Bearer ${accountData.token}`
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res: any) => {
        NProgress.done()
        if (!res.data) {
          if (res.response) {
            ElMessage.error(res.response.data)
          }
          return
        }
        return res.data
      },
      (err) => {
        NProgress.done()
        return err
      }
    )
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      config.showLoading && (this.showLoading = config.showLoading)
      // 单独请求的拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = false
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = false
          reject(err)
        })
    })
  }
  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default Request
