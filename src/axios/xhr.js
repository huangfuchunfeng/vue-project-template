import axios from 'axios'
import { Message as ElMessage } from 'element-ui'
import { getToken, removeToken } from '@/utils/token'
const Message = {
  error: (msg) => {
    ElMessage({
      message: msg,
      type: 'error'
    })
  },
  warn: (msg) => {
    ElMessage({
      message: msg,
      type: 'warning'
    })
  },
  info: (msg) => {
    ElMessage({
      message: msg,
      type: 'info'
    })
  },
  success: (msg) => {
    ElMessage({
      message: msg,
      type: 'success'
    })
  }
}

// 创建axios实例
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '/api/' : process.env.VUE_APP_API_GETAWAY,
  // 请求超时时间
  timeout: 60000,
  // 头信息
  headers: {

  }
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = authorization()
    config.unifiedPromptError = config.headers.unifiedPromptError
    delete config.headers.unifiedPromptError
    return config
  },
  error => {
    // 对请求错误做些什么
    Message.error('request请求出错')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    if (response.config.responseType === 'blob') {
      return response
    }
    if (response.data.code === 1404) {
      // 令牌过期
      removeToken()
      location.reload()
      return
    }
    // 其它错误做点什么
    if (response.config.unifiedPromptError && response.data.code !== 0) {
      // message
      Message.warn(response.data.message)
    }
    return response.data
  },
  error => {
    const message = error.response.data.message || error.message
    // 对响应错误做点什么
    if (error.config.unifiedPromptError) {
      // 统一错误提示
      Message.error(message)
    }
    return Promise.reject(error.response.data || error)
  }
)
function authorization () {
  return getToken()
}

/**
 * unifiedPromptError 统一错误提示,默认true
 */
class HTTP {
  constructor (baseURL, unifiedPromptError) {
    this.baseURL = baseURL || (process.env.NODE_ENV === 'development' ? '/api/' : process.env.VUE_APP_API_GETAWAY)
    this.unifiedPromptError = unifiedPromptError || true
  }
  get (url, params, config = {}, unifiedPromptError) {
    return service.get(url, {
      params: {
        ...params
      },
      headers: {
        unifiedPromptError: unifiedPromptError === undefined ? this.unifiedPromptError : unifiedPromptError
      },
      baseURL: this.baseURL,
      ...config
    })
  }
  post (url, params, config = {}, unifiedPromptError) {
    return service.post(
      url,
      {
        ...params
      },
      {
        baseURL: this.baseURL,
        headers: {
          unifiedPromptError: unifiedPromptError === undefined ? this.unifiedPromptError : unifiedPromptError
        },
        ...config
      }
    )
  }
}
export default HTTP
