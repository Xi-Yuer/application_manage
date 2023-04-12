import { SystemModule } from '@/stores/types'

interface IPropType {
  formItems: Array<Record<string, any>>
  module: SystemModule
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
      label: '商品类别',
      placeholder: '请输入商品类别',
      span: 8
    },

    {
      type: 'date-picker',
      prop: 'createAt',
      label: '时间',
      placeholder: '请选择时间范围',
      span: 8
    }
  ],
  module: SystemModule.CATEGORY
}

export default searchConfig
