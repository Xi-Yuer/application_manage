import request from '@/service/index'
import type { SystemModule } from '@/stores/types'

/**
 *
 *  用户相关请求
 *
 */
export function postModuleListData<T>(config: { module: SystemModule }) {
  return request.post<T>({
    url: `/${config.module}/list`,
    data: {
      offset: 0,
      size: 10
    }
  })
}

export function deleteModuleById(config: { id: number; module: SystemModule }) {
  return request.delete({
    url: `/${config.module}/${config.id}`
  })
}

export function newModuleData(config: { moduleInfo: any; module: SystemModule }) {
  return request.post({
    url: `/${config.module}`,
    data: config.moduleInfo
  })
}

export function editModuleData(config: { id: number; moduleInfo: any; module: SystemModule }) {
  return request.patch({
    url: `/${config.module}/${config.id}`,
    data: config.moduleInfo
  })
}
