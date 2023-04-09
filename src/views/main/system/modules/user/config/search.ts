interface IPropType {
  formItems: Array<Record<string, any>>
}

const searchConfig: IPropType = {
  formItems: [
    {
      type: 'input',
      prop: 'id',
      label: '用户ID',
      placeholder: '请输入用户ID',
      span: 8
    },
    {
      type: 'input',
      prop: 'name',
      label: '用户名称',
      placeholder: '请输入用户名称',
      span: 8
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      span: 8
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '手机号',
      placeholder: '请输入手机号',
      span: 8
    },
    {
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      prop: 'enable',
      span: 8,
      options: [
        {
          key: '启用',
          value: 1
        },
        {
          key: '禁用',
          value: 0
        }
      ]
    },
    {
      type: 'date-picker',
      label: '时间范围',
      placeholder: '请选择时间范围',
      prop: 'createAt',
      span: 8
    }
  ]
}

export default searchConfig
