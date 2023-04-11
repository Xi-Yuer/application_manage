<script setup lang="ts">
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import tableConfig from './config/content'
import modelConfig from './config/model'

import { SystemModule } from '@/stores/types'
import { formatDate } from '@/utils/format/time'

import { useTable } from '../../hooks/useTable'
import { useFetch } from '../../hooks/usefetch'

const { fetchData, loading } = useFetch(SystemModule.MENU)
const {
  system,
  loading: deleteLoading,
  modelRef,
  handleNewData,
  handleEdit,
  handleDelete
} = useTable(SystemModule.MENU)
</script>

<template>
  <div>
    <table-content
      :loading="loading || deleteLoading"
      :tableConfig="tableConfig"
      :data="system[SystemModule.MENU].list"
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
        <el-button icon="Edit" type="primary" text @click="handleEdit(row)">修改</el-button>
        <el-button icon="Delete" type="danger" text @click="handleDelete(row)">删除</el-button>
      </template>
    </table-content>
    <table-model ref="modelRef" :modelConfig="modelConfig" :module="SystemModule.MENU" />
  </div>
</template>

<style scoped lang="less"></style>
