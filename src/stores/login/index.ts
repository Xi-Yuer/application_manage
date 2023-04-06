import { defineStore } from 'pinia'
import { getUserInfoById, getUserMenuList, LoginActionRequest } from '@/service/apis/login'
import { ref } from 'vue'
import local from '@/utils/cache/index'

import { USER_ACCOUNT, USER_DETAIL, USER_LOGIN_ACCOUNT, USER_MENU_LIST } from '@/constant'
import type {
  IAccount,
  IAccountResponse,
  IMenuList,
  IMenuListResponse,
  IuserDeatilResponse,
  IuserDetail
} from '@/types/user'
import router from '@/router'

export const useLoginStore = defineStore('login', () => {
  // 数据层
  const accountData = ref<IAccount>(local.getCache(USER_ACCOUNT) ?? {})
  const userDetail = ref<IuserDetail>(local.getCache(USER_DETAIL) ?? {})
  const userMenuList = ref<IMenuList[]>(local.getCache(USER_MENU_LIST) ?? [])

  // 方法层
  async function LoginAction(account: IAccount, isRemember: boolean, cb?: () => void) {
    // 用户登录
    const userLoginResult = await LoginActionRequest<IAccountResponse>(account)
    if (!userLoginResult.data) return
    local.setCache(USER_ACCOUNT, userLoginResult.data)
    accountData.value = userLoginResult.data

    // 获取用户详情
    const userDetailResult = await getUserInfoById<IuserDeatilResponse>(userLoginResult.data.id)
    if (!userDetailResult.data) return
    local.setCache(USER_DETAIL, userDetailResult.data)
    userDetail.value = userDetailResult.data

    // 用户菜单列表
    const userMenuListResult = await getUserMenuList<IMenuListResponse>(userDetail.value!.id)
    if (!userMenuListResult.data) return
    local.setCache(USER_MENU_LIST, userMenuListResult.data)
    userMenuList.value = userMenuListResult.data

    cb && cb()

    if (isRemember) {
      local.setCache(USER_LOGIN_ACCOUNT, account)
    } else {
      local.deleteCache(USER_LOGIN_ACCOUNT)
    }

    router.push('/main')
  }

  // 导出层
  return {
    accountData,
    userDetail,
    userMenuList,
    LoginAction
  }
})
