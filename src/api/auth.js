
/** 账号授权登录接口 */
import XHR from '@/axios/xhr.js'
const axios = new XHR()
// 登录
export const Login = (params = {}) => axios.post('/admin/auth/login', params)

export const Sess = (params = {}) => axios.get('/admin/auth/sess', params)

