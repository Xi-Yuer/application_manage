<script setup lang="ts">
import { useSystemStore } from '@/stores/mian/system'
import type { SystemModule } from '@/stores/types'
import { MapMenuToIds } from '@/utils/format/map-menus'
import type { FormInstance } from 'element-plus/es/components/form'
import type { ElTree } from 'element-plus/es/components/tree'
import { nextTick, reactive, ref, toRefs } from 'vue'

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
const TreeRef = ref<InstanceType<typeof ElTree>>()
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

// 确定开始发起网路请求修改或新增数据
const handleConfirm = async () => {
  let checkedKeys
  if (TreeRef?.value) {
    checkedKeys = (TreeRef?.value as any).value?.getCheckedKeys()
  }
  const data: any = {}
  // 清空无用字段信息
  for (const key in Form) {
    if (Form[key]) {
      data[key] = Form[key]
    }
  }
  if (checkedKeys) {
    data.menuList = checkedKeys
  }
  loading.value = true
  if (isEditRef.value) {
    // 编辑
    await editSystemModuleDataAction({
      module: module.value,
      moduleInfo: data,
      id: currentEditId.value
    })
  } else {
    // 新建
    await newSystemModuleDataAction({ module: module.value, moduleInfo: data })
  }
  loading.value = false
  showRef.value = false
}
// 打开 model
const showModel = (
  isEdit: boolean,
  options?: {
    form?: any
    ref?: InstanceType<typeof ElTree>
  }
) => {
  showRef.value = true
  isEditRef.value = isEdit
  TreeRef.value = options?.ref
  if (options?.form && isEdit) {
    // 编辑状态赋值
    currentEditId.value = options.form.id
    nextTick(() => {
      if (TreeRef?.value) {
        ;(TreeRef?.value as any).value?.setCheckedKeys(MapMenuToIds(options?.form.menuList))
      }
    })
    for (const key in options.form) {
      // eslint-disable-next-line no-prototype-builtins
      if (initailForm.hasOwnProperty(key)) {
        if (options.form[key]) {
          Form[key] = options.form[key]
        }
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
        <el-form-item :label="inputItem.label" :prop="inputItem.prop" v-if="!isEditRef">
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
          <template v-if="inputItem.type === 'custom'">
            <slot :name="inputItem.prop"></slot>
          </template>
        </el-form-item>
        <el-form-item
          :label="inputItem.label"
          :prop="inputItem.prop"
          v-if="isEditRef && inputItem.prop !== 'password'"
        >
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
          <template v-if="inputItem.type === 'custom'">
            <slot :name="inputItem.prop"></slot>
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
