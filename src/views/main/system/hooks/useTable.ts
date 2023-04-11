import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import type TableModel from '@/base-ui/tabel-model/index.vue'

export const useTable = (module: SystemModule, options?: any) => {
  const modelRef = ref<InstanceType<typeof TableModel>>()

  const { system } = storeToRefs(useSystemStore())
  const loading = ref(false)
  const { changeSystemModuleListAction, deleteSystemModuleByIdAction } = useSystemStore()
  const handleEdit = (row: any) => {
    if (modelRef.value) {
      modelRef.value.showModel(true, { form: row, ref: options?.ref })
    }
  }
  const handleDelete = async (row: any) => {
    // 删除数据
    loading.value = true
    await deleteSystemModuleByIdAction({ id: row.id, module: module })
    await changeSystemModuleListAction(module)
    loading.value = false
  }
  const handleNewData = () => {
    if (modelRef.value) {
      modelRef.value.showModel(false, { ref: options?.ref })
    }
  }
  return {
    system,
    loading,
    modelRef,
    handleEdit,
    handleDelete,
    handleNewData
  }
}
