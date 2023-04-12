import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import { onMounted, ref } from 'vue'

export const useFetch = (module: SystemModule) => {
  const loading = ref(false)
  onMounted(() => {
    fetchData()
  })
  const fetchData = (queryInfo?: Record<string, any>) => {
    loading.value = true
    useSystemStore()
      .changeSystemModuleListAction(module, queryInfo)
      .finally(() => {
        loading.value = false
      })
  }

  return {
    loading,
    fetchData
  }
}
