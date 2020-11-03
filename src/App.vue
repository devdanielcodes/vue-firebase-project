<template>
  <div>
    <Nav />
    <router-view class="container" />
  </div>
</template>

<script>
import Nav from '@/components/navbar.vue'

export default {
  components: {
    Nav
  },
  name: 'App',
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
