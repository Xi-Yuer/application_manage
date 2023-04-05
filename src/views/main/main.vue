<script setup lang="ts">
import { Menu, Header } from '@/components';

</script>

<template>
  <div>
    <el-container class='h-screen'>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less"></style>
