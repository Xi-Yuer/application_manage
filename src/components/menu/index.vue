<script setup lang="ts">
import { useLoginStore } from '@/stores/login/index'
import { useUIStore } from '@/stores/ui/index'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { userMenuList } = useLoginStore()
const { isFold } = storeToRefs(useUIStore())

const route = useRoute()
const currentRoutePath = computed(() => route.path)
</script>

<template>
  <div class="content el-aside">
    <div class="title flex justify-center">
      <el-icon :size="20" class="mr-2"><ElemeFilled /></el-icon>
      <template v-if="!isFold">
        <h2>后台管理系统</h2>
      </template>
    </div>
    <div>
      <el-menu
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001121"
        :default-active="currentRoutePath"
        :collapse="isFold"
        :router="true"
      >
        <template v-for="item in userMenuList" :key="item.id">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('el-icon-')[1]" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="iten in item.children" :key="iten.id">
              <el-menu-item :index="iten.url">
                <span>{{ iten.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.el-menu {
  border: none;
}

.el-menu-item {
  background-color: #001529;
}

.el-menu--vertical .el-menu-item.is-active {
  background-color: #4097fa;
}

.el-aside {
  &::-webkit-scrollbar {
    display: none;
  }
}
.content {
  @apply bg-[#001121] text-white h-screen transition-all;
}
.title {
  @apply py-4 ml-4 transition-all duration-200;
  h2 {
    @apply font-bold whitespace-nowrap;
  }
}
</style>
