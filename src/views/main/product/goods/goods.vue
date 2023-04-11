<script setup lang="ts">
import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import searchConfig from './config/search'
import tableConfig from './config/content'
import modelConfig from './config/model'

import { formatDate } from '@/utils/format/time'
import { SystemModule } from '@/stores/types'
import { useFetch } from '../../system/hooks/usefetch'
import { useTable } from '../../system/hooks/useTable'

const { fetchData, loading } = useFetch(SystemModule.GOODS)
const {
  system,
  modelRef,
  loading: deleteLoading,
  handleEdit,
  handleDelete,
  handleNewData
} = useTable(SystemModule.GOODS)
</script>

<template>
  <div>
    <table-search :searchConfig="searchConfig" @query="fetchData" @reset="fetchData" />
    <table-content
      :loading="loading || deleteLoading"
      :tableConfig="tableConfig"
      :data="system[SystemModule.GOODS].list"
      :count="system[SystemModule.GOODS].totalCount"
      @refresh="fetchData"
      @newBtnClick="handleNewData"
    >
      <template #desc="row">
        <el-tooltip effect="dark" :content="row.desc" placement="top">
          <span class="inline-block w-[180px] truncate">{{ row.desc }}</span>
        </el-tooltip>
      </template>
      <template #imgUrl="row">
        <el-image
          style="width: 100px; height: 100px"
          :src="row.imgUrl"
          :zoom-rate="1.2"
          :preview-src-list="[row.imgUrl]"
          :initial-index="4"
          :preview-teleported="true"
          fit="cover"
        />
      </template>
      <template #status="row">
        <el-button :type="row.status ? 'primary' : 'danger'" plain size="small">{{
          row.status ? '启用' : '禁用'
        }}</el-button>
      </template>
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
    <table-model ref="modelRef" :modelConfig="modelConfig" :module="SystemModule.GOODS" />
  </div>
</template>

<style scoped lang="less"></style>
