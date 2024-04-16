import { useUserStore } from '@/stores/index'
import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
const baseURL = 'http://big-event-vue-api-t.itheima.net'
const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 100000
})
instance.interceptors.request.use(
  // 添加请求拦截器
  (config) => {
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)
instance.interceptors.response.use(
  // 添加响应拦截器
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    // TODO 3. 处理业务失败
    ElMessage({ message: res.data.message || '服务异常', type: 'error' })
    // 处理业务失败，给错误提示，抛出错误
    return Promise.reject(res.data)
  },
  (err) => {
    // TODO 5.处理401错误
    //错误的特殊情况 => 401 权限不足 或 token 过期 => 拦截到登录
    if (err.response?.status === 401) {
      router.push('/login')
    }
    // 默认情况 => 只要给出错误提示就行了
    ElMessage({
      message: err.response.data.message || '服务异常',
      type: 'error'
    })
    return Promise.reject(err)
  }
)
export default instance
export { baseURL }
