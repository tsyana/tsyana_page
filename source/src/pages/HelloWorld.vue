<template>
  <div class="home-page">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <div class="part-1">
            <!-- <page3></page3> -->
<!-- <page2></page2> -->
            <page1></page1>
          </div>
        </div>
        <div class="page-2 page">
          <p class="part-2">

            <page2></page2>
          </p>
        </div>
        <div class="page-3 page">
          <!-- v-animate="{value: 'bounceInLeft', delay: 0}" -->
          <p class="part-3">
            <page3></page3>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import page1 from './components/page1'
import page2 from './components/page2'
import page3 from './components/page3'

export default {
  components: { page1, page2, page3 },
  data() {
    return {
      opts: {
        start: 0,
        dir: "v",
        duration: 500
      },
      
      topBack: require("@/assets/perback.png")
    };
  },
  mounted() {

  },

  methods: {
    
  }
};
</script>



<style lang="scss" scoped>
$darkbrown: rgb(88,83,64);
$lightbrown: rgb(183,174,157);
$lightback: rgb(250,255,252);
$lightblue: rgb(172,206,205);
$wine: rgb(138,21,27);
$pink: rgb(188,99,103);
$lightgreen: rgb(188, 201, 142);

.home-page {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .page-1, .page-2, .page-3 {
    // background: rgb(250,255,252);
    background: white;
    // text-align: center;
    
  }
  
}
</style>




