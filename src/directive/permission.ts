import { useGlobalStore } from '@/stores/mian/global'
import { storeToRefs } from 'pinia'
import type { App } from 'vue'

export default function permission(app: App<Element>) {
  app.directive('permission', (el, binding) => {
    const { global } = storeToRefs(useGlobalStore())
    const permission = binding.value
    const hasPermission = global.value.permissions?.some((item: string) => item === permission)
    // 将判断逻辑写到微任务中，防止第一次获取数据为空
    Promise.resolve(() => {
      if (!hasPermission) {
        el.remove(el)
      }
    })
  })
}
