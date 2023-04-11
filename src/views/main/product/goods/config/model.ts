interface IPropType {
  header: string
  formItems: Array<Record<string, any>>
}

const modelConfig: IPropType = {
  header: '角色',
  formItems: [
    {
      type: 'input',
      prop: 'desc',
      label: '描述',
      placeholder: '请输入商品描述'
    },
    {
      type: 'input',
      prop: 'oldPrice',
      label: '原价',
      placeholder: '请输入原价'
    },
    {
      type: 'input',
      prop: 'newPrice',
      label: '现价',
      placeholder: '请输入现价'
    },
    {
      type: 'input',
      prop: 'imgUrl',
      label: '图片预览',
      placeholder: '请输入预览地址'
    },
    {
      type: 'select',
      prop: 'status',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    {
      type: 'input',
      prop: 'address',
      label: '生产地址',
      placeholder: '请输入生产地址'
    }
  ]
}

const rules = []

export default modelConfig
