<template>
  <div>
    <!-- 
      with $route we can get useful
      information about the current
      $route being rendered
    -->
    Post {{ $route.params.id }}
  </div>
</template>