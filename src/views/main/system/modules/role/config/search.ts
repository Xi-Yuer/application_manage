import { SystemModule } from '@/stores/types'

interface IPropType {
  formItems: Array<Record<string, any>>
  module: SystemModule
}

const searchConfig: IPropType = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
      span: 8
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限介绍',
      placeholder: '权限介绍',
      span: 8
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      span: 8
    }
  ],
  module: SystemModule.ROLE
}

export default searchConfig
