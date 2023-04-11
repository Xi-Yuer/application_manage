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
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      type: 'custom',
      label: '权限',
      prop: 'permission'
    }
  ]
}

const rules = []

export default modelConfig
