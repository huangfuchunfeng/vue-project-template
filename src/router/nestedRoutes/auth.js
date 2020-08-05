export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      auth: 'UnauthenticatedRoute'
    },
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      auth: 'AppliedRoute'
    },
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/authenticated',
    name: 'Authenticated',
    meta: {
      auth: 'AuthenticatedRoute'
    },
    component: () => import('@/views/Authenticated.vue')
  }
]
