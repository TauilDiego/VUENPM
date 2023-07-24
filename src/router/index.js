import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import("@/views/HomeView.vue")
const LoginView = () => import("@/views/LoginView.vue")

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

  ]
})

export default router
