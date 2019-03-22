<template>
  <div>
    <div v-if="posts.loading">
      Loading...
    </div>
    <div v-else-if="posts.error">
      Something went wrong
    </div>
    <post
      v-else
      v-for="post in posts.data"
      :key="post.id"
      :title="post.title"
      @pixel="openPost(post.id)"/>
  </div>
</template>

<script>
  import post from '@/components/Post'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      post
    },

    // https://vuejs.org/v2/guide/computed.html
    computed: {
      // https://vuex.vuejs.org/guide/state.html
      ...mapState({
        posts: state => state.posts
      })
    },

    methods: {
      // https://vuex.vuejs.org/guide/actions.html
      // 
      // The string value on the right must be the action
      // name defined in store.js 
      ...mapActions({
        getPosts: 'getPosts'
      }),

      openPost (postId) {

        // https://router.vuejs.org/guide/essentials/navigation.html
        this.$router.push({
          name: 'post-details',
          params: {
            id: postId
          }
        })
      }
    },

    // "created" method is part of Vue Components Lifecycle
    // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    created () {
      this.getPosts()
    }
  }
</script>