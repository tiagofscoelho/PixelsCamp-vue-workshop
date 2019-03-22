<template>
  <!-- 
    Custom event "pixel" being emitted to parent
    https://vuejs.org/v2/guide/components-custom-events.html
  -->
  <div 
    class="post"
    @click="$emit('pixel')" >
    <h1> {{ title }} </h1>
    
    <!-- 
      since body is optional we are adding a
      v-if directive to make sure that an empty 
      <p></p> tag is not rendered in the DOM if 
      "body" value is not provided
    -->
    <p v-if="body.length > 0"> {{ body }} </p>
  </div>
</template>

<script>
export default {
  // https://vuejs.org/v2/guide/components-props.html
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>
