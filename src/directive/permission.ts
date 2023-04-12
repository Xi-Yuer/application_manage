import { useGlobalStore } from '@/stores/mian/global'
import { storeToRefs } from 'pinia'
import { computed, type App } from 'vue'

export default function permission(app: App<Element>) {
  const { global } = storeToRefs(useGlobalStore())
  const permissions = computed(() => global.value.permissions)

  app.directive('permission', (el, binding) => {
    const permission = binding.value
    const hasPermission = permissions?.value?.some((item: string) => item === permission)
    if (!hasPermission) {
      el.remove(el)
    }
  })
}
