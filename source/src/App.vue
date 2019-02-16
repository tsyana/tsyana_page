<template>
  <div id="app">
    <qcrode v-if="!hideQcrode"></qcrode>
    <hello-world v-else></hello-world>
  </div>
</template>

<script>
import qcrode from './pages/qcrode'
import HelloWorld from './pages/HelloWorld'
export default {
  name: 'app',
  components: {
    qcrode,
    HelloWorld
  },
  data() {
    return {
      hideQcrode: true
    }
  },
  created() {
    this.hideQcrode = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
