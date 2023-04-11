interface IPropType {
  formItems: Array<Record<string, any>>
}

const searchConfig: IPropType = {
  formItems: [
    {
      type: 'input',
      prop: 'id',
      label: '商品ID',
      placeholder: '请输入商品ID',
      span: 8
    },
    {
      type: 'input',
      prop: 'name',
      label: '商品名字',
      placeholder: '请输入商品名字',
      span: 8
    },
    {
      type: 'input',
      prop: 'oldPrice',
      label: '商品原价',
      placeholder: '请输入商品原价',
      span: 8
    },
    {
      type: 'input',
      prop: 'newPrice',
      label: '商品现价',
      placeholder: '请输入商品现价',
      span: 8
    },
    {
      type: 'input',
      prop: 'address',
      label: '产地',
      placeholder: '请输入产地',
      span: 8
    },
    {
      type: 'select',
      prop: 'status',
      label: '商品状态',
      placeholder: '商品状态',
      span: 8,
      options: [
        {
          key: '启用',
          value: '1'
        },
        {
          key: '禁用',
          value: '0'
        }
      ]
    },

    {
      type: 'date-picker',
      prop: 'createAt',
      label: '时间',
      placeholder: '请选择时间范围',
      span: 8
    }
  ]
}

export default searchConfig
