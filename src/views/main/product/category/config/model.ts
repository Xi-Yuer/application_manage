interface IPropType {
  header: string
  formItems: Array<Record<string, any>>
}

const modelConfig: IPropType = {
  header: '角色',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '类别',
      placeholder: '请输入角色类别'
    }
  ]
}

const rules = []

export default modelConfig
