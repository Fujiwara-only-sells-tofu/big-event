// 1.先导入defineStore
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 计数器
export const useCountStore = defineStore(
  'big-count',
  () => {
    // count
    const count = ref(0)
    // setToken
    const add = (newCount) => {
      count.value += newCount
    }

    return {
      count,
      add
    }
  },
  {
    persist: true
  }
)
