import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('uiStore', () => {
  const isFold = ref(false)

  const changeFold = () => {
    isFold.value = !isFold.value
  }
  return {
    isFold,
    changeFold
  }
})
