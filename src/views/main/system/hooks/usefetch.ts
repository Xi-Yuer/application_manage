import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import { onMounted } from 'vue'

export const useFetch = (module: SystemModule) => {
  onMounted(() => {
    fetchData()
  })
  const fetchData = (queryInfo?: Record<string, any>) => {
    useSystemStore().changeSystemModuleListAction(module, queryInfo)
  }

  return {
    fetchData
  }
}
