import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import PengZhihua from '@/components/PengZhihua'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Atlanta',
      component: PengZhihua
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: User
    }
    
  ]
})
