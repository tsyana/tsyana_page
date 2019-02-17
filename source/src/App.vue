<template>
  <div id="app">
    <qcrode v-if="!hideQcrode"></qcrode>
    <hello-world v-else></hello-world>
    <!-- <div class="container">
    <div class="flip">
        <div class="front">
            <div>front</div>
        </div>
        <div class="back">
          <div>back</div>
        </div>
    </div>
</div> -->
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
    // this.hideQcrode = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  }
}
</script>

<style>
.container{perspective:1000;transform-style:preserve-3d;}
    .container,.front,.back{width:380px;height:270px;}
    .flip{position:relative;transition:0.6s;transform-style:preserve-3d;}
    .front,.back{position:absolute;top: 0px;left: 0px;backface-visibility:hidden;}
    .front{z-index:2; background: bisque}
    .back{transform:rotateY(-180deg);background: blueviolet;}
    .container:hover .flip{transform:rotateY(180deg);}
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
