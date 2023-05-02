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
import { MapMenuToRoutes } from '@/utils/routes'
import { useGlobalStore } from '../mian/global'

export const useLoginStore = defineStore('login', () => {
  // 数据层
  const accountData = ref<IAccount>()
  const userDetail = ref<IuserDetail>()
  const userMenuList = ref<IMenuList[]>([])

  // 方法层
  async function LoginAction(account: IAccount, isRemember: boolean, cb?: () => void) {
    // 用户登录
    const userLoginResult = await LoginActionRequest<IAccountResponse>(account)
    if (userLoginResult.data) {
      local.setCache(USER_ACCOUNT, userLoginResult.data)
      accountData.value = userLoginResult.data
    }

    // 获取用户详情
    if (userLoginResult.data) {
      const userDetailResult = await getUserInfoById<IuserDeatilResponse>(userLoginResult.data.id)
      if (userDetailResult.data) {
        local.setCache(USER_DETAIL, userDetailResult.data)
        userDetail.value = userDetailResult.data
      }
    }

    // 用户菜单列表
    let userMenuListResult
    if (userDetail.value) {
      userMenuListResult = await getUserMenuList<IMenuListResponse>(userDetail.value.id)
      if (userMenuListResult.data) {
        local.setCache(USER_MENU_LIST, userMenuListResult.data)
        userMenuList.value = userMenuListResult.data
      }
    }

    // 动态添加路由
    if (userMenuList.value) {
      const routes = MapMenuToRoutes(userMenuList.value)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }

    useGlobalStore().fetchEntireDataAction()

    cb && cb()

    if (isRemember) {
      local.setCache(USER_LOGIN_ACCOUNT, account)
    } else {
      local.deleteCache(USER_LOGIN_ACCOUNT)
    }

    router.push('/main')
  }

  function loadCacheAction() {
    const account = local.getCache(USER_ACCOUNT)
    const detail = local.getCache(USER_DETAIL)
    const menulist = local.getCache(USER_MENU_LIST)
    if (account && detail && menulist) {
      accountData.value = account
      userDetail.value = detail
      userMenuList.value = menulist
      useGlobalStore().fetchEntireDataAction()

      // 动态添加路由
      const routes = MapMenuToRoutes(menulist)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  }

  // 导出层
  return {
    accountData,
    userDetail,
    userMenuList,
    LoginAction,
    loadCacheAction
  }
})
