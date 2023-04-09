<script setup lang="ts">
import { SystemModule } from '@/stores/types'
import { useFetch } from '../../hooks/usefetch'

useFetch(SystemModule.MENU)
</script>

<template>
  <div>menu</div>
</template>

<style scoped lang="less"></style>
