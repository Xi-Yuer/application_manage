export interface IAccountResponse {
  code: number
  data: IAccount
}

export interface IAccount {
  id: number
  name: string
  password: string
}

export interface IuserDeatilResponse {
  code: number
  data: IuserDetail
}

export interface IuserDetail {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}

export interface Department {
  id: number
  name: string
  parentId: null
  createAt: Date
  updateAt: Date
  leader: string
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface IMenuListResponse {
  code: number
  data: IMenuList[]
}

export interface IMenuList {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Child[]
}

export interface Child {
  id: number
  url: null | string
  name: string
  sort: number | null
  type: number
  children?: Child[] | null
  parentId: number
  permission?: string
}
