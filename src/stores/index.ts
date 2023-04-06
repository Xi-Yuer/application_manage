import type { App } from 'vue'
import { createPinia } from 'pinia'
import { useLoginStore } from './login'

export default function store(app: App<Element>) {
  app.use(createPinia())
  // 确保刷新注册路由在 pinia 注册时候
  const { loadCacheAction } = useLoginStore()
  loadCacheAction()
  // 注册所有路由完成时候再注册路由
}
