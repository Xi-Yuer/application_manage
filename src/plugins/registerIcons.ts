import type { App, VueElement } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function icon(app: App<VueElement>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
