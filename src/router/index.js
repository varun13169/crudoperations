import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CURD from '@/components/CURD'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/xyz',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'CURD',
      component: CURD
    }
  ]
})
