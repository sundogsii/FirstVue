import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormInput from '@/components/FormInput'
import TreeCheck from '@/components/TreeCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/tree',
      name: 'TreeCheck',
      component: TreeCheck
    }
  ]
})
