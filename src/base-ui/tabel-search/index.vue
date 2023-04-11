<script setup lang="ts">
import type { FormInstance } from 'element-plus/es/components/form'
import { reactive, toRefs, ref } from 'vue'

interface IPropType {
  searchConfig: {
    formItems: any[]
  }
}
const emit = defineEmits(['query', 'reset'])
const props = defineProps<IPropType>()
const { searchConfig } = toRefs(props)

const initailForm: any = {}
for (const item of searchConfig.value.formItems) {
  initailForm[item.prop] = ''
}
const searchForm = reactive<Record<string, any>>(initailForm)

const FormRef = ref<FormInstance>()

// 重置
const handleRefresh = () => {
  FormRef.value?.resetFields()
  emit('reset')
}
// 查询
const handleQuery = () => {
  const queryData: any = {}
  // 清空无用字段信息
  for (const key in searchForm) {
    if (searchForm[key]) {
      queryData[key] = searchForm[key]
    }
  }
  emit('query', queryData)
}
</script>

<template>
  <div class="bg-white p-5">
    <el-form :model="searchForm" label-width="100px" ref="FormRef">
      <el-row :gutter="20">
        <template v-for="inputItem in searchConfig.formItems" :key="inputItem.prop">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="inputItem.span" class="py-4">
            <el-form-item :label="inputItem.label" :prop="inputItem.prop">
              <template v-if="inputItem.type === 'input'">
                <el-input
                  :placeholder="inputItem.placeholder"
                  v-model="searchForm[inputItem.prop]"
                ></el-input>
              </template>
              <template v-if="inputItem.type === 'date-picker'">
                <el-date-picker
                  type="daterange"
                  v-model="searchForm[inputItem.prop]"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                ></el-date-picker>
              </template>
              <template v-if="inputItem.type === 'select'">
                <el-select
                  v-model="searchForm[inputItem.prop]"
                  :placeholder="inputItem.placeholder"
                  class="w-full"
                >
                  <el-option
                    v-for="item in inputItem.options"
                    :key="item.value"
                    :label="item.key"
                    :value="item.value"
                  />
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <el-col :span="24">
          <div class="float-right">
            <el-button type="primary" plain icon="Refresh" @click="handleRefresh">重置</el-button>
            <el-button type="primary" plain icon="Search" @click="handleQuery">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
