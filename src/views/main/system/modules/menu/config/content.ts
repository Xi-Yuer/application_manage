import { SystemModule } from '@/stores/types'

const tabelConfig = {
  tableRows: [
    {
      label: '菜单名称',
      prop: 'name'
    },
    {
      label: '级别',
      prop: 'type',
      width: '80'
    },
    {
      label: '菜单URL',
      prop: 'url',
      width: '180'
    },
    {
      type: 'custom',
      label: '菜单Icon',
      prop: 'icon'
    },
    {
      label: '排序',
      prop: 'sort'
    },
    {
      label: '权限',
      prop: 'permission'
    },
    {
      type: 'custom',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'custom',
      label: '更新时间',
      prop: 'updateAt'
    },
    {
      type: 'custom',
      label: '操作',
      prop: 'operation',
      width: '200'
    }
  ],
  module: SystemModule.MENU
}

export default tabelConfig
