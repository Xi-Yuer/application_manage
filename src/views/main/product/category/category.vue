<script setup lang="ts">
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import searchConfig from './config/search'
import tableConfig from './config/content'
import modelConfig from './config/model'

import { formatDate } from '@/utils/format/time'
import { SystemModule } from '@/stores/types'
import { useFetch } from '@/hooks/usefetch'
import { useTable } from '@/hooks/useTable'

const { fetchData, loading } = useFetch(SystemModule.CATEGORY)
const {
  system,
  modelRef,
  Pupdate,
  Pdelete,
  loading: deleteLoading,
  handleEdit,
  handleDelete,
  handleNewData
} = useTable(SystemModule.CATEGORY)
</script>

<template>
  <div>
    <table-search :searchConfig="searchConfig" @query="fetchData" @reset="fetchData" />
    <table-content
      :loading="loading || deleteLoading"
      :tableConfig="tableConfig"
      :data="system[SystemModule.CATEGORY].list"
      :count="system[SystemModule.CATEGORY].totalCount"
      @refresh="fetchData"
      @newBtnClick="handleNewData"
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
        <el-button icon="Edit" type="primary" text @click="handleEdit(row)" v-permission="Pupdate"
          >修改</el-button
        >
        <el-button
          icon="Delete"
          type="danger"
          text
          @click="handleDelete(row)"
          v-permission="Pdelete"
          >删除</el-button
        >
      </template>
    </table-content>
    <table-model ref="modelRef" :modelConfig="modelConfig" :module="SystemModule.CATEGORY" />
  </div>
</template>

<style scoped lang="less"></style>
