<script setup lang="ts">
import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import type { FormInstance } from 'element-plus/es/components/form'
import { reactive, ref, toRefs } from 'vue'

interface IProps {
  modelConfig: {
    header: string
    formItems: Record<string, any>[]
  }
  module: SystemModule
  width?: number | string
  rules?: any[]
}

const props = withDefaults(defineProps<IProps>(), {
  width: '40%',
  rules: () => []
})

const FormRef = ref<FormInstance>()
const showRef = ref(false)
const isEditRef = ref(false)
const loading = ref(false)
const currentEditId = ref()
const { modelConfig, width, rules, module } = toRefs(props)
const initailForm: any = {}
for (const item of modelConfig.value.formItems) {
  initailForm[item.prop] = ''
}
const Form = reactive<Record<string, any>>(initailForm)

const { newSystemModuleDataAction, editSystemModuleDataAction } = useSystemStore()

const handleConfirm = async () => {
  loading.value = true
  if (isEditRef.value) {
    // 编辑用户
    await editSystemModuleDataAction({
      module: module.value,
      moduleInfo: Form,
      id: currentEditId.value
    })
  } else {
    // 新建用户
    await newSystemModuleDataAction({ module: module.value, moduleInfo: Form })
  }
  loading.value = false
  showRef.value = false
}

// 打开 model
const showModel = (isEdit: boolean, form?: any) => {
  showRef.value = true
  isEditRef.value = isEdit
  if (form && isEdit) {
    // 编辑状态赋值
    currentEditId.value = form.id
    for (const key in form) {
      // eslint-disable-next-line no-prototype-builtins
      if (initailForm.hasOwnProperty(key)) {
        Form[key] = form[key]
      }
    }
  } else if (!isEdit) {
    // 新建状态重置
    for (const key in Form) {
      Form[key] = ''
    }
  }
}

defineExpose({
  showModel
})
</script>

<template>
  <el-dialog
    v-model="showRef"
    :title="(isEditRef ? '编辑' : '新建') + modelConfig.header"
    :width="width"
  >
    <el-form :model="Form" label-width="100px" ref="FormRef" :rules="rules" v-loading="loading">
      <template v-for="inputItem in modelConfig.formItems" :key="inputItem.prop">
        <el-form-item :label="inputItem.label" :prop="inputItem.prop">
          <template v-if="inputItem.type === 'input'">
            <el-input
              :placeholder="inputItem.placeholder"
              v-model="Form[inputItem.prop]"
            ></el-input>
          </template>
          <template v-if="inputItem.type === 'date-picker'">
            <el-date-picker
              type="daterange"
              v-model="Form[inputItem.prop]"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            ></el-date-picker>
          </template>
          <template v-if="inputItem.type === 'select'">
            <el-select
              v-model="Form[inputItem.prop]"
              :placeholder="inputItem.placeholder"
              class="w-full"
            >
              <el-option
                v-for="item in inputItem.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </el-form-item>
      </template>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showRef = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm" :loading="loading"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="less"></style>
