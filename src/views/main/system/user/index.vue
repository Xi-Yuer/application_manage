<script setup lang="ts">
import { useSystemStore } from '@/stores/mian/system'
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'
import { onMounted } from 'vue'
import { SystemModule } from '@/stores/types'

const fetchData = () => {
  useSystemStore().changeSystemModuleListAction(SystemModule.USER)
}
onMounted(() => {
  fetchData()
})
</script>

<template>
  <div>
    <div class="search">
      <table-search />
      <table-content />
      <table-model />
    </div>
    <div class="content"></div>
  </div>
</template>

<style scoped lang="less"></style>
