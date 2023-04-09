import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'

export const useTable = (module: SystemModule) => {
  const { system } = storeToRefs(useSystemStore())
  const handleEdit = (row: any) => {
    console.log(row)
  }
  const handleDelete = (row: any) => {
    console.log(row)
  }
  return {
    system,
    handleEdit,
    handleDelete
  }
}
