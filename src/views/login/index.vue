<script setup lang="ts">
import Panel from './components/panel.vue'
</script>

<template>
  <div class="h-full w-full flex bg">
    <Panel />
  </div>
</template>

<style scoped lang="less">
.bg {
  background-image: url('@/assets/image/login-bg.svg');
}
</style>
