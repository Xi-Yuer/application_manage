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
      label: '部门名称',
      placeholder: '请输入部门名称',
      span: 8
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导',
      span: 8
    },
    {
      type: 'input',
      prop: 'parentId',
      label: '上级领导ID',
      placeholder: '请输入上级领导ID',
      span: 8
    },
    {
      type: 'date-picker',
      label: '时间范围',
      prop: 'createAt',
      span: 8
    }
  ],
  module: SystemModule.DEPARTMENT
}

export default searchConfig
