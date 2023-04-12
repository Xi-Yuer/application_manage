<script setup lang="ts">
import { ref } from 'vue'

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
import { useGlobalStore } from '@/stores/mian/global'
import { storeToRefs } from 'pinia'
import type { ElTree } from 'element-plus/es/components/tree'

const treeRef = ref<InstanceType<typeof ElTree>>()
const { global } = storeToRefs(useGlobalStore())
const { fetchData, loading } = useFetch(SystemModule.ROLE)
const {
  system,
  modelRef,
  Pupdate,
  Pdelete,
  loading: deleteLoading,
  handleEdit,
  handleDelete,
  handleNewData
} = useTable(SystemModule.ROLE, {
  ref: treeRef
})
</script>

<template>
  <div>
    <div class="search">
      <table-search :searchConfig="searchConfig" @query="fetchData" @reset="fetchData" />
      <table-content
        :loading="loading || deleteLoading"
        :tableConfig="tableConfig"
        :data="system[SystemModule.ROLE].list"
        :count="system[SystemModule.ROLE].totalCount"
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
      <table-model ref="modelRef" :modelConfig="modelConfig" :module="SystemModule.ROLE">
        <template #permission>
          <el-tree
            ref="treeRef"
            :data="global.entireMenus.list"
            show-checkbox
            node-key="id"
            highlight-current
            :props="{ children: 'children', label: 'name' }"
          />
        </template>
      </table-model>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
