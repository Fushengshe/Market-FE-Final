import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/login'
import Register from '@/components/register'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component(resolve) {
          require.ensure(['@/components/login.vue'], () => {
              resolve(require('@/components/login.vue'));
          });
      }
    },
    {
      path: '/register',
      name: 'register',
      component(resolve) {
          require.ensure(['@/components/register.vue'], () => {
              resolve(require('@/components/register.vue'));
          });
      }
    },
    {
      path: '/home',
      name: 'Home',
      component(resolve) {
          require.ensure(['@/components/home.vue'], () => {
              resolve(require('@/components/home.vue'));
          });
      }
    }
  ]
})
