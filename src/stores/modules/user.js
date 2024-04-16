// 1.先导入defineStore
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'
// 用户数据 token setToken reoveToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    // token
    const token = ref('')
    // setToken
    const setToken = (newToken) => {
      token.value = newToken
    }
    // 保存用户信息
    const user = ref({})
    const getUser = async () => {
      const res = await userGetInfoService()
      user.value = res.data.data
    }
    const setUser = (obj) => {
      user.value = obj
    }
    // removeToken
    const removeToken = () => {
      token.value = ''
    }
    return {
      getUser,
      user,
      token,
      setToken,
      removeToken,
      setUser
    }
  },
  {
    persist: true
  }
)
