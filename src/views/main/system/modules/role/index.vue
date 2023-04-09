<script setup lang="ts">
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'
import { SystemModule } from '@/stores/types'
import { useFetch } from '../../hooks/usefetch'

import searchConfig from './config/search'

const { fetchData } = useFetch(SystemModule.ROLE)
</script>

<template>
  <div>
    <div class="search">
      <table-search :searchConfig="searchConfig" @query="fetchData" />
      <table-content />
      <table-model />
    </div>
    <div class="content"></div>
  </div>
</template>

<style scoped lang="less"></style>
