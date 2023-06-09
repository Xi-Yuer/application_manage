<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import TableSearch from '@/base-ui/tabel-search/index.vue'
import TableContent from '@/base-ui/tabel-content/index.vue'
import TableModel from '@/base-ui/tabel-model/index.vue'

import searchConfig from './config/search'
import modelConfig from './config/model'
import tableConfig from './config/content'

import { SystemModule } from '@/stores/types'
import { formatDate } from '@/utils/format/time'
import { useGlobalStore } from '@/stores/mian/global'

import { useTable } from '@/hooks/useTable'
import { useFetch } from '@/hooks/usefetch'

const { fetchData, loading } = useFetch(SystemModule.USER)
const { global } = storeToRefs(useGlobalStore())
const {
  system,
  modelRef,
  Pupdate,
  Pdelete,
  loading: deleteLoading,
  handleEdit,
  handleDelete,
  handleNewData
} = useTable(SystemModule.USER)

// 原有配置基础上增加新的属性
const modelConfigRef = computed(() => {
  const departments = global.value.entireDepartment?.list.map((item: any) => ({
    label: item.name,
    value: item.id
  }))
  const roles = global.value.entireRoles?.list.map((item: any) => ({
    label: item.name,
    value: item.id
  }))

  modelConfig.formItems.forEach((item) => {
    if (item.prop === 'departmentId' && departments) {
      item.options.push(...departments)
    }
    if (item.prop === 'roleId' && roles) {
      item.options.push(...roles)
    }
  })
  return modelConfig
})
</script>

<template>
  <div>
    <table-search :searchConfig="searchConfig" @query="fetchData" @reset="fetchData" />
    <table-content
      :loading="loading || deleteLoading"
      :tableConfig="tableConfig"
      :data="system[SystemModule.USER].list"
      :count="system[SystemModule.USER].totalCount"
      @refresh="fetchData"
      @newBtnClick="handleNewData"
    >
      <template #enable="row">
        <el-button :type="row.enable ? 'primary' : 'danger'" plain size="small">
          {{ row.enable ? '启用' : '禁用' }}
        </el-button>
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
    <table-model ref="modelRef" :modelConfig="modelConfigRef" :module="SystemModule.USER" />
  </div>
</template>

<style scoped lang="less"></style>
