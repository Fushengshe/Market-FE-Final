<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body{
  margin:0;
}
#app {
  height: 100vh;
  text-align: center;
}
</style>
