import { defineStore } from 'pinia'
import { reactive } from 'vue'

import {
  postModuleListData,
  deleteModuleById,
  newModuleData,
  editModuleData
} from '@/service/apis/main/system'
import { SystemModule } from '@/stores/types'
import type { IUserList } from '@/types/user'

export const useSystemStore = defineStore('system', () => {
  const system = reactive<Record<string, any>>({
    [SystemModule.USER]: {
      list: [],
      totalCount: 0
    },
    [SystemModule.ROLE]: {
      list: [],
      totalCount: 0
    },
    [SystemModule.DEPARTMENT]: {
      list: [],
      totalCount: 0
    },
    [SystemModule.MENU]: {
      list: []
    },
    [SystemModule.CATEGORY]: {
      list: [],
      totalCount: 0
    },
    [SystemModule.GOODS]: {
      list: [],
      totalCount: 0
    }
  })
  // 获取列表
  const changeSystemModuleListAction = async (
    module: SystemModule,
    queryInfo?: Record<string, any>
  ) => {
    const result = await postModuleListData<IUserList>({ module: module, queryInfo })
    result?.data?.list && (system[module].list = result.data.list)
    result?.data?.totalCount && (system[module].totalCount = result.data.totalCount)
  }
  // 删除
  const deleteSystemModuleByIdAction = async (config: { id: number; module: SystemModule }) => {
    await deleteModuleById({ module: config.module, id: config.id })
    changeSystemModuleListAction(config.module)
  }
  // 新建
  const newSystemModuleDataAction = async (config: {
    moduleInfo: Record<string, any>
    module: SystemModule
  }) => {
    await newModuleData({ moduleInfo: config.moduleInfo, module: config.module })
    changeSystemModuleListAction(config.module)
  }
  // 编辑
  const editSystemModuleDataAction = async (config: {
    id: number
    moduleInfo: Record<string, any>
    module: SystemModule
  }) => {
    await editModuleData({ module: config.module, id: config.id, moduleInfo: config.moduleInfo })
    changeSystemModuleListAction(config.module)
  }
  return {
    system,
    changeSystemModuleListAction,
    deleteSystemModuleByIdAction,
    newSystemModuleDataAction,
    editSystemModuleDataAction
  }
})
