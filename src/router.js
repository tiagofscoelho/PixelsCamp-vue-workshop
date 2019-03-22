import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import PostDetails from './views/PostDetails.vue'

Vue.use(Router)

// https://router.vuejs.org/guide/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'post-details',
      component: PostDetails
    }
  ]
})
