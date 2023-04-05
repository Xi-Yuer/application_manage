<script setup lang="ts">
import { ref, watch } from 'vue'
import local from '@/utils/cache/index'

import Account from './account.vue'
import Phone from './phone.vue'
import { REMEMBER_PASSWORD } from '@/constant'

const isRemember = ref<boolean>(local.getCache(REMEMBER_PASSWORD) ?? false)
const activeName = ref('account')
const accountRef = ref<InstanceType<typeof Account>>()
const phoneRef = ref<InstanceType<typeof Phone>>()
const isLoding = ref(false)

// 登录
const handleLogin = () => {
  if (activeName.value == 'account') {
    isLoding.value = true
    // 帐号登录
    accountRef.value?.loginAction(isRemember.value, () => {
      isLoding.value = false
    })
  } else {
    // 手机登录
    phoneRef.value?.loginAction()
  }
}

// 记住密码
watch(
  () => isRemember.value,
  (newValue: boolean) => {
    local.setCache(REMEMBER_PASSWORD, newValue)
  }
)
</script>

<template>
  <div class="w-[330px] flex flex-col p-4">
    <h1 class="font-bold text-xl py-4">管理系统</h1>
    <div class="w-full">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <el-icon>
              <User />
            </el-icon>
            <span class="px-1 inline-block">帐号登录</span>
          </template>
          <Account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <el-icon>
              <Iphone />
            </el-icon>
            <span class="px-1 inline-block">手机登录</span>
          </template>
          <Phone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="flex justify-between w-full py-3">
      <el-checkbox label="记住密码" name="remember" v-model="isRemember" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button class="w-full" type="primary" @click="handleLogin" :loading="isLoding"
      >立即登录</el-button
    >
  </div>
</template>

<style scoped lang="less"></style>
