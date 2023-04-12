import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export function mapIcons() {
  const icons = []
  for (const [key] of Object.entries(ElementPlusIconsVue)) {
    icons.push({
      label: key,
      value: `el-icon-${key}`
    })
  }
  return icons
}
mapIcons()
