import Vue from 'vue'
import Router from 'vue-router'
import login from '../view/login'
import find_password from '../view/find_password'
import register_chose from '../view/register_chose'
import register_person from '../view/register_person'
import register_company from '../view/register_company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
      name:'login',
    },
    {
      path: '/find_password',
      component: find_password,
      name:'find_password'
    },
    {
      path: '/register_chose',
      component: register_chose,
      name:'register_chose'
    },
    {
      path: '/register_person',
      component: register_person,
      name:'register_person'
    },
    {
      path: '/register_company',
      component: register_company,
      name:'register_company'
    },
  ]
})
