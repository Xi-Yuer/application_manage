import request from '../../index'

// 登录
export const LoginActionRequest = <T = any>(account: any) => {
  return request.post<T>({
    url: '/login',
    data: account
  })
}

// 获取用户详情
export const getUserInfoById = <T = any>(id: number) => {
  return request.get<T>({
    url: `/users/${id}`
  })
}

// 获取角色的菜单
export const getUserMenuList = <T = any>(id: number) => {
  return request.get<T>({
    url: `/role/${id}/menu`
  })
}
