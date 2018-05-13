import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'
import Github from '@/components/Github'
import JetbrainsRegister from '@/components/JetbrainsRegister'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/github',
      name: 'Github',
      component: Github
    },
    {
      path: '/jetbrains-register',
      name: 'JetbrainsRegister',
      component: JetbrainsRegister
    }
  ]
})
