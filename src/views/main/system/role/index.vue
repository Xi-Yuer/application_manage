<script setup lang="ts">
import { useSystemStore } from '@/stores/mian/system'
import { SystemModule } from '@/stores/types'
import { onMounted } from 'vue'

const fetchData = () => {
  useSystemStore().changeSystemModuleListAction(SystemModule.ROLE)
}
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>Role</div>
</template>

<style scoped lang="less"></style>
