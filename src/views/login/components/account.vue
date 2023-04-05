<script setup lang="ts">
import { reactive, ref } from 'vue'

import { useLoginStore } from '@/stores/login/index'
import { Accountrules } from './config/index'
import { USER_LOGIN_ACCOUNT } from '@/constant'
import local from '@/utils/cache/index'

import type { FormInstance } from 'element-plus/es/components/form'
import type { IAccount } from '@/types/user'

// 数据层
const loginStore = useLoginStore()
const FormRef = ref<FormInstance>()

const form = reactive<IAccount>(
  local.getCache(USER_LOGIN_ACCOUNT) ?? {
    name: '',
    password: ''
  }
)

// 方法层
const loginAction = (isRemember: boolean, cb?: () => void) => {
  FormRef.value?.validate((validate: boolean) => {
    if (!validate) return
    loginStore.LoginAction(form, isRemember, cb)
  })
}

// 导出层
defineExpose({
  loginAction
})
</script>

<template>
  <div class="w-full">
    <el-form label-position="right" :model="form" :rules="Accountrules" ref="FormRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
