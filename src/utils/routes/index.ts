import type { RouteRecordRaw } from 'vue-router'

// 动态路由映射
export let firstPath: any = null
export function MapMenuToRoutes(userMenuList: any) {
  const routesObj = getRoutesFileObj()
  const routes: RouteRecordRaw[] = []
  for (const menu of userMenuList) {
    for (const subMenu of menu.children) {
      const route = routesObj.find((item) => item.path === subMenu.url)
      if (!firstPath && route?.path) {
        firstPath = route?.path
      }
      if (route) {
        routes.push(route)
      }
    }
  }
  return routes
}

function getRoutesFileObj() {
  // 动态添加路由
  const routes: RouteRecordRaw[] = []
  // 加载 router/mian 文件下所有 .ts 结尾的文件, { eager: true } 关闭懒加载
  const files: Record<string, any> = import.meta.glob('../../router/main/**/*.ts', {
    eager: true
  })

  // 所有路由对象
  for (const key in files) {
    routes.push(files[key].default)
  }

  return routes
}
