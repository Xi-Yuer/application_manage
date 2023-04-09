<script setup lang="ts">
import { toRefs, defineProps, ref, watchEffect } from 'vue'

interface IProps {
  tableConfig: {
    tableRows: Record<string, any>[]
  }
  data: any[]
  count: number
}
const emit = defineEmits(['refresh'])
const props = defineProps<IProps>()
const { tableConfig, data, count } = toRefs(props)
const offset = ref(1)
const size = ref(10)

// 偏移量
const handleSizeChange = (val: number) => {
  size.value = val
}
// 数量
const handleCurrentChange = (val: number) => {
  offset.value = val
}
// 分页变化
watchEffect(() => {
  emit('refresh', { offset: (offset.value - 1) * size.value, size: size.value })
})
</script>

<template>
  <div class="mt-6 bg-white py-10">
    <el-table :data="data" style="width: 100%" border>
      <template v-for="item in tableConfig?.tableRows" :key="item.prop">
        <template v-if="item.type === `custom`">
          <el-table-column :label="item.label" :type="item.type" :width="item.width" align="center">
            <template #default="{ row }">
              <slot :name="item.prop" v-bind="row"></slot>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            align="center"
            :label="item.label"
            :prop="item.prop"
            :type="item.type"
            :width="item.width"
          ></el-table-column>
        </template>
      </template>
    </el-table>
    <div class="flex pt-4">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
