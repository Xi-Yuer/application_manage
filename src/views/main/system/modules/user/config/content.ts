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
      label: '用户ID',
      prop: 'id'
    },
    {
      label: '用户名',
      prop: 'name'
    },
    {
      label: '真实姓名',
      prop: 'realname'
    },
    {
      label: '部门ID',
      prop: 'departmentId'
    },
    {
      label: '角色ID',
      prop: 'roleId'
    },
    {
      label: '手机号码',
      prop: 'cellphone'
    },
    {
      type: 'custom',
      label: '状态',
      prop: 'enable'
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
  module: SystemModule.USER
}

export default TableConfig
