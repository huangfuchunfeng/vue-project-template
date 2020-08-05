export default [
  {
    path: '/home',
    name: 'Home',
    meta: {
      auth: 'AppliedRoute'
    },
    component: () => import('@/views/Home.vue')
  }
]
