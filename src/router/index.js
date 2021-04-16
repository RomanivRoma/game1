import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/reactgame',
    name: 'ReactGame',
    component: () => import('../views/ReactGame.vue')
  },
  {
    path: '/reactgame/game',
    name: 'Game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/reactgame/lost',
    name: 'Lost',
    component: () => import('../views/Lost.vue')
  },
  // {
  //    path: '*', 
  //    redirect: '/' 
  // }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

export default router
