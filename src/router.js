import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        navShow:true
      }
    },
    {
      path: '/DrumKit',
      name: 'DrumKit',
      component: () => import( './views/DrumKit.vue'),
      meta:{
        navShow:false
      }
    },
    {
      path: '/Clock',
      name: 'Clock',
      component: () => import( './views/Clock.vue'),
      meta:{
        navShow:false
      }
    },
    {
      path: '/ChangeImg',
      name: 'ChangeImg',
      component: () => import( './views/ChangeImg.vue'),
      meta:{
        navShow:false
      }
    },
  ]
})
