import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../pages/Index.vue'
import recommend from '../pages/recommend.vue'
import spuare  from '../pages/spuare.vue'
import video from '../pages/video.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index.vue',
      component:Index,
    },

    {
      path: '/recommend',
      name: 'recommend',
      component:recommend
    },
    {
      path: '/spuare',
      name: 'spuare',
      component:spuare,

    },
    {
      path: '/index',
      name: 'Index.vue',
      component:Index
    },
    {
      path: '/video',
      name: 'video',
      component:video
    },

  ]
})
