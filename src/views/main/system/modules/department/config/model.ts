interface IPropType {
  header: string
  formItems: Array<Record<string, any>>
}

const modelConfig: IPropType = {
  header: '部门',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ]
}

const rules = []

export default modelConfig
