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
      label: '部门ID',
      prop: 'id'
    },
    {
      label: '部门',
      prop: 'name'
    },
    {
      label: '部门领导',
      prop: 'leader'
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
  ]
}

export default TableConfig
