<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { Phonerules } from './config/index'

const inLoding = ref(false)
const loadingTip = ref('发送验证码')
const formRef = ref<FormInstance>()

const form = reactive({
  phone: '',
  code: ''
})

// 获取验证码
const handleGetCode = () => {
  formRef.value?.validateField('phone').then(() => {
    inLoding.value = true
    let index = 60
    let timer: number
    timer = setInterval(() => {
      loadingTip.value = `(${index--})重新获取`
      if (index <= 0) {
        inLoding.value = false
        loadingTip.value = `重新获取`
        clearInterval(timer)
      }
    }, 1000)
  })
}

const loginAction = () => {
  formRef.value?.validate((valid: boolean) => {
    if (!valid) return
    console.log('手机登录')
  })
}

defineExpose({
  loginAction
})
</script>

<template>
  <div>
    <el-form ref="formRef" :rules="Phonerules" :model="form">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="flex">
          <el-input v-model="form.code"></el-input>
          <el-button
            @click="handleGetCode"
            type="primary"
            class="ml-2 w-[100px]"
            :disabled="inLoding"
          >
            {{ loadingTip }}
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
