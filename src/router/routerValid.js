// 路由验证
import { getToken } from '@/utils/token.js'
export function beforeEach (to, from, next) {
  if (to.meta.auth === 'AuthenticatedRoute' && !getToken()) {
    next({
      name: 'Login'
    })
    return
  }
  next()
}
export function afterEach (to, from) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
}
