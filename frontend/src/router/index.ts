import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/registerForm',
      name: 'RegisterForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterForm.vue')
    },
    {
      path: '/movie',
      name: 'MovieMain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MovieMain.vue')
    },
    {
      path: '/loginError',
      name: 'LoginError',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginError.vue')
    },
    {
      path: '/movieDetail/:movie_num',
      name: 'MovieDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MovieDetail.vue'),
      props: true
    },
    {
      path: '/tv',
      name: 'TvMain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TvMain.vue'),
    },
    {
      path: '/tvDetail/:tv_num',
      name: 'TvDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TvDetail.vue'),
      props: true
    },
    {
      path: '/personDetail/:person_num',
      name: 'PersonDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PersonDetail.vue'),
      props: true
    },
  ]
})

export default router
