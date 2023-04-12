export function mapPermission(menus: any[]) {
  const permissions: string[] = []

  function recurseGetPermission(menu: any[]) {
    for (const item of menu) {
      if (item.children) {
        recurseGetPermission(item.children)
      } else {
        if (item.permission) {
          permissions.push(item.permission)
        }
      }
    }
  }
  recurseGetPermission(menus)
  // console.log(permissions)
  return permissions
}
