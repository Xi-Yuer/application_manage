export interface ISystemStateType {
  user: Record<string, any>
  department: Record<string, any>
  menu: Record<string, any>
  role: Record<string, any>
}

export enum SystemModule {
  USER = 'users',
  ROLE = 'role'
}
