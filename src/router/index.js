import Vue from 'vue'
import VueRouter from 'vue-router'
import msgres from '../views/MsgRes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向:默认展示
    redirect: '/login',
    // 不展示
    hidden: true
   // name: 'msgres',
   // component: msgres
  },
  {
    path: '/user/forgetemail',
    name: 'msgres',
    hidden: true,
    component: () => import('@/views/MsgRes')
  },
  {
    path: '/shop/class',
    name: 'FShop',
    hidden: true,
    component: () => import('@/views/FShop')
  },
  {
    path: '/shop/search',
    name: 'search',
    hidden: true,
    component: () => import('@/views/SeResult')
  },
  {
    path: '/shop/goodsdetail',
    name: 'goodsdetail',
    hidden: true,
    component: () => import('@/views/GoodsDetail')
  },
  {
    path: '/shop/allorders',
    name: 'allorders',
    hidden: true,
    component: () => import('@/views/AllOrders')
  },
  {
    path: '/my',
    name: 'my',
    hidden: true,
    component: () => import('@/views/my/My')
  },
  {
    path: '/path',
    name: 'path',
    hidden: true,
    component: () => import('@/views/my/Path')
  },
  {
    path: '/path/edit/:id',
    name: 'pathedit',
    hidden: true,
    component: () => import('@/views/my/Path')
  },
  {
    path: '/pathlist',
    name: 'pathlist',
    hidden: true,
    component: () => import('@/views/my/PathList')
  },

  {
    path: '/modifypassword',
    name: 'modifypassword',
    hidden: true,
    component: () => import('@/views/my/ModifyPassword')
  },
  {
    path: '/modifyfile',
    name: 'modifyfile',
    hidden: true,
    component: () => import('@/views/my/ModifyFile')
  },
  {
    path: '/modifyGender',
    name: 'modifyGender',
    hidden: true,
    component: () => import('@/views/my/modifyGender')
  },
  {
    path: '/modifyId',
    name: 'modifyId',
    hidden: true,
    component: () => import('@/views/my/modifyId')
  },
  {
    path: '/modifyPhone',
    name: 'modifyPhone',
    hidden: true,
    component: () => import('@/views/my/modifyPhone')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    hidden: true,
    component: () => import('@/views/mall/ShopCart')
  },
  {
    path: '/footer',
    name: 'footer',
    hidden: true,
    component: () => import('@/views/mall/Footer')
  },
  {
    path: '/goods',
    name: 'goods',
    hidden: true,
    component: () => import('@/views/mall/Goods')
  },
  {
    path: '/counter',
    name: 'counter',
    hidden: true,
    component: () => import('@/views/mall/Counter')
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/Login')
  },
  {
    path: '/forget',
    name: 'forget',
    hidden: true,
    component: () => import('@/views/login/Forget')
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,
    component: () => import('@/views/login/Register')
  },
]

const router = new VueRouter({
  // mode: 'hash',
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router
