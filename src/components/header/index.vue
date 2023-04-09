<script setup lang="ts">
import { useUIStore } from '@/stores/ui/index'
import { useLoginStore } from '@/stores/login/index'
import { storeToRefs } from 'pinia'
import local from '@/utils/cache/index'
import { useRouter } from 'vue-router'
import { USER_ACCOUNT, USER_MENU_LIST, USER_DETAIL } from '@/constant'
import BreadCrumb from '@/components/breadcrumb/index.vue'

const router = useRouter()
const { isFold } = storeToRefs(useUIStore())
const { changeFold } = useUIStore()
const { userDetail } = storeToRefs(useLoginStore())

const handleCommand = (command: string) => {
  if (command === 'outlogin') {
    local.deleteCache(USER_ACCOUNT)
    local.deleteCache(USER_MENU_LIST)
    local.deleteCache(USER_DETAIL)
    router.push('/login')
  }
}
</script>

<template>
  <div class="content">
    <div class="menu_icon" @click="changeFold">
      <el-icon :size="20">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="flex justify-between flex-1">
      <div class="breadcrumb"><BreadCrumb /></div>
      <div class="opra w-[200px] flex">
        <el-icon><Moon /></el-icon>
        <el-icon><Search /></el-icon>
        <el-icon><FullScreen /></el-icon>
        <div class="w-[100px] flex">
          <el-dropdown @command="handleCommand">
            <div class="flex">
              <el-avatar :size="30" class="mr-2" />
              <span>{{ userDetail?.name }}</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="outlogin">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  @apply flex flex-row w-full h-full items-center;
}
.menu_icon {
  @apply flex items-center pr-4 cursor-pointer;
}
.opra {
  @apply justify-between cursor-pointer;
}
</style>
