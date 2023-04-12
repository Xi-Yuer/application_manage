import { SystemModule } from '@/stores/types'

const TableConfig = {
  tableRows: [
    {
      type: 'selection',
      label: ''
    },
    {
      type: 'index',
      label: '序号',
      width: '80'
    },
    {
      label: '商品ID',
      prop: 'id'
    },
    {
      type: 'custom',
      label: '描述',
      prop: 'desc',
      width: 200
    },
    {
      label: '原价',
      prop: 'oldPrice'
    },
    {
      label: '现价',
      prop: 'newPrice'
    },
    {
      type: 'custom',
      label: '预览',
      prop: 'imgUrl',
      width: 200
    },
    {
      label: '收藏',
      prop: 'favorCount'
    },
    {
      type: 'custom',
      label: '状态',
      prop: 'status'
    },
    {
      label: '生产地址',
      prop: 'address'
    },
    {
      type: 'custom',
      label: '创建时间',
      prop: 'createAt',
      width: '180'
    },
    {
      type: 'custom',
      label: '更新时间',
      prop: 'updateAt',
      width: '180'
    },
    {
      type: 'custom',
      prop: 'operation',
      width: '200',
      label: '操作'
    }
  ],
  module: SystemModule.GOODS
}

export default TableConfig
