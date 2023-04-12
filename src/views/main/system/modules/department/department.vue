<script setup lang="ts">
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import { SystemModule } from '@/stores/types'
import { formatDate } from '@/utils/format/time'

import searchConfig from './config/search'
import tableConfig from './config/content'
import modelConfig from './config/model'

import { useTable } from '@/hooks/useTable'
import { useFetch } from '@/hooks/usefetch'
const { fetchData, loading } = useFetch(SystemModule.DEPARTMENT)
const {
  system,
  modelRef,
  Pupdate,
  Pdelete,
  loading: deleteLoading,
  handleEdit,
  handleDelete,
  handleNewData
} = useTable(SystemModule.DEPARTMENT)
</script>

<template>
  <div>
    <table-search :searchConfig="searchConfig" @query="fetchData" @reset="fetchData" />
    <table-content
      :loading="loading || deleteLoading"
      :tableConfig="tableConfig"
      :data="system[SystemModule.DEPARTMENT].list"
      :count="system[SystemModule.DEPARTMENT].totalCount"
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
    <table-model ref="modelRef" :modelConfig="modelConfig" :module="SystemModule.DEPARTMENT" />
  </div>
</template>

<style scoped lang="less"></style>
