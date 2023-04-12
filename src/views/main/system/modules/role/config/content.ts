import { SystemModule } from '@/stores/types'

const TableConfig = {
  tableRows: [
    {
      type: 'selection',
      label: ''
    },
    {
      type: 'index',
      label: '序号',
      width: '80'
    },
    {
      label: '角色ID',
      prop: 'id'
    },
    {
      label: '角色名',
      prop: 'name'
    },
    {
      label: '权限介绍',
      prop: 'intro'
    },
    {
      type: 'custom',
      label: '创建时间',
      prop: 'createAt',
      width: '180'
    },
    {
      type: 'custom',
      label: '更新时间',
      prop: 'updateAt',
      width: '180'
    },
    {
      type: 'custom',
      prop: 'operation',
      width: '200',
      label: '操作'
    }
  ],
  module: SystemModule.ROLE
}

export default TableConfig
