<script setup lang="ts">
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import { SystemModule } from '@/stores/types'
import { useFetch } from '../../hooks/usefetch'
import searchConfig from './config/search'
import TableConfig from './config/content'
import { formatDate } from '@/utils/format/time'
import { useTable } from '../../hooks/useTable'

const { fetchData } = useFetch(SystemModule.DEPARTMENT)
const { system, handleEdit, handleDelete } = useTable(SystemModule.DEPARTMENT)
</script>

<template>
  <div>
    <table-search :searchConfig="searchConfig" @query="fetchData" />
    <table-content
      :tableConfig="TableConfig"
      :data="system[SystemModule.DEPARTMENT].list"
      :count="system[SystemModule.DEPARTMENT].totalCount"
      @refresh="fetchData"
    >
      <template #createAt="row">
        <el-link>
          {{ formatDate(row.createAt, 'yyyy-dd-MM hh:ss:mm') }}
        </el-link>
      </template>
      <template #updateAt="row">
        <el-link>
          {{ formatDate(row.updateAt, 'yyyy-dd-MM hh:ss:mm') }}
        </el-link>
      </template>
      <template #operation="row">
        <el-button icon="Edit" type="primary" text @click="handleEdit(row)">修改</el-button>
        <el-button icon="Delete" type="danger" text @click="handleDelete(row)">删除</el-button>
      </template>
    </table-content>
    <table-model />
  </div>
</template>

<style scoped lang="less"></style>
