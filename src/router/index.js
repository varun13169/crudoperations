import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import CURD from '../components/CURD'
import Home from '../components/Home'
import CreateEmp from '../components/CreateEmp'
import GetEmp from '../components/GetEmp'
import DeleteEmp from '../components/DeleteEmp'
import UpdateEmp from '../components/UpdateEmp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/curd',
      name: 'CURD',
      component: CURD
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/create',
      name: 'CreateEmp',
      component: CreateEmp
    },
    {
      path: '/read',
      name: 'GetEmp',
      component: GetEmp
    },
    {
      path: '/update',
      name: 'UpdateEmp',
      component: UpdateEmp
    },
    {
      path: '/delete',
      name: 'DeleteEmp',
      component: DeleteEmp
    }
  ]
})
