<script setup lang="ts">
import { useUIStore } from '@/stores/ui/index'
import { storeToRefs } from 'pinia'
import { Menu, Header } from '@/components'

const { isFold } = storeToRefs(useUIStore())
</script>

<template>
  <div>
    <el-container class="h-screen">
      <el-aside :width="!isFold ? '200px' : '60px'" class="transition-all duration-400">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main class="bg-slate-100">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less"></style>
