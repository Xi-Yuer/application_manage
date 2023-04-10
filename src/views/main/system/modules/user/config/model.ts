interface IPropType {
  header: string
  formItems: Array<Record<string, any>>
}

const modelConfig: IPropType = {
  header: '用户',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名称',
      placeholder: '请输入用户名称'
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      type: 'input',
      prop: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      prop: 'departmentId',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'select',
      prop: 'roleId',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ]
}

const rules = []

export default modelConfig
