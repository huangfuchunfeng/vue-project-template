import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach, afterEach } from './routerValid'
import { loadModules } from '@/utils/common'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  // 重复导航警告去除
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
// 加载所有嵌套路由。
const routes = loadModules(require.context('./nestedRoutes', false, /([a-z_]+)\.js$/i), 'flattenArray')
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: () => import('@/components/VLayout.vue'),
    meta: {
      auth: 'AppliedRoute'
    },
    redirect: 'home',
    children: routes
  }]
})
router.beforeEach(beforeEach)
router.afterEach(afterEach)
export default router
