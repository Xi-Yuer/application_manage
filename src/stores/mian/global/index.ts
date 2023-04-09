import { getEntireDepartment, getEntireRoles } from '@/service/apis/main/global'
import type { IDepartment, IRole } from '@/types/user'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const global = reactive<Record<string, Record<string, any>>>({
    entireRoles: {
      list: [],
      totalCount: 0
    },
    entireDepartment: {
      list: [],
      totalCount: 0
    }
  })

  const fetchEntireDataAction = async () => {
    const entireRolesResult = await getEntireRoles<IRole>()
    const entireDepartmentResult = await getEntireDepartment<IDepartment>()

    global.entireRoles = entireRolesResult.data
    global.entireDepartment = entireDepartmentResult.data
  }

  return {
    global,
    fetchEntireDataAction
  }
})
