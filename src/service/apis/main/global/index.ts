import request from '@/service/index'

export const getEntireRoles = <T>() => {
  return request.post<T>({
    url: '/role/list'
  })
}

export const getEntireDepartment = <T>() => {
  return request.post<T>({
    url: '/department/list'
  })
}

export const getEntireMenus = <T>() => {
  return request.post<T>({
    url: '/menu/list'
  })
}
