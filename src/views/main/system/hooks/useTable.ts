import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import { ref } from 'vue'

export const useTable = (module: SystemModule, modelRef: any) => {
  const { system } = storeToRefs(useSystemStore())
  const loading = ref(false)
  const { changeSystemModuleListAction, deleteSystemModuleByIdAction } = useSystemStore()
  const handleEdit = (row: any) => {
    modelRef.value.showModel(true, row)
  }
  const handleDelete = async (row: any) => {
    // 删除数据
    loading.value = true
    await deleteSystemModuleByIdAction({ id: row.id, module: module })
    await changeSystemModuleListAction(module)
    loading.value = false
  }
  return {
    system,
    loading,
    handleEdit,
    handleDelete
  }
}
