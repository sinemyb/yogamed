import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Member from '../views/member.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'


Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/users/:id',
        name: 'UserDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/user-detail.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/member')
          return next()
        },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          if (store.state.user) return next('/member')
          return next()
        },
      },
      {
        path: '/member',
        name: 'member',
        component: Member,
        beforeEnter(to, from, next) {
          if (!store.state.user) return next('/login')
          return next()
        },
      },
      {
        path: '/events/:id',
        name: 'EventDetail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/event-detail.vue'),
      },
    ],
  })
}
