import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Store documentation: https://vuex.vuejs.org/guide/

// How to scale the Store?
// Modules: https://vuex.vuejs.org/guide/modules.html
export default new Vuex.Store({

  // https://vuex.vuejs.org/guide/state.html
  state: {
    // This is the initial data to "posts"
    posts: {
      loading: false,
      data: [],
      error: null
    }
  },

  // https://vuex.vuejs.org/guide/mutations.html
  mutations: {
    setPosts (state, data) {
      state.posts = data
    }
  },

  // https://vuex.vuejs.org/guide/actions.html
  actions: {
    async getPosts (context) {
      // the 1st argument of commit function
      // must be the mutation's name
      context.commit('setPosts', {
        loading: true,
        data: [],
        error: null
      })

      try {
        // JSON placeholder page: https://jsonplaceholder.typicode.com/
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        context.commit('setPosts', {
          loading: false,
          data: response.data,
          error: null
        })
      } catch (error) {
        context.commit('setPosts', {
          loading: false,
          data: [],
          error
        })
      }
    }
  }
})
