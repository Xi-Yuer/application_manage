interface IPropType {
  header: string
  formItems: Array<Record<string, any>>
}

const modelConfig: IPropType = {
  header: '菜单',
  formItems: [
    {
      type: 'input',
      label: '菜单名称',
      prop: 'name'
    },
    {
      type: 'input',
      label: '级别',
      prop: 'type',
      width: '80'
    },
    {
      type: 'input',
      label: '菜单URL',
      prop: 'url',
      width: '180'
    },
    {
      type: 'input',
      label: '菜单Icon',
      prop: 'icon'
    },
    {
      type: 'input',
      label: '排序',
      prop: 'sort'
    },
    {
      type: 'input',
      label: '权限',
      prop: 'permission'
    }
  ]
}

const rules = []

export default modelConfig
