<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { mapPathToBreadcrumbs } from '@/utils/routes'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { userMenuList } = storeToRefs(useLoginStore())
const breadcrumbs = computed(() => mapPathToBreadcrumbs(route.path, userMenuList.value))
</script>

<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
      <el-breadcrumb-item :to="{ path: breadcrumb.path }">
        <span class="font-bold">{{ breadcrumb.name }}</span>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped lang="less"></style>
