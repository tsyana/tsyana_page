<template>
    <div class="compon-page1">
        <div class="download-resume"></div>
            <div class="avator"></div>
             <h2 class="name">苹果</h2>
            <div class="divide-line"></div>
            <h3 class="position">
              <a class="phone" href="tel:17321413875">iii</a>
              /
              <a class="email" href="mailto:510043785@qq.com">iii</a>
            </h3>
            <div class="skill-part">
              <span class="skill" :style="{background: skill.color}"  v-for="skill in skillList" :key="skill.id">{{skill.label}}</span>
            </div>
    </div>
</template>

<style lang="scss" scoped>
$darkbrown: rgb(88,83,64);
$lightbrown: rgb(183,174,157);
$lightback: rgb(250,255,252);
$lightblue: rgb(172,206,205);
$wine: rgb(138,21,27);
$pink: rgb(188,99,103);
$lightgreen: rgb(188, 201, 142);
.compon-page1{
    text-align: center;
    .avator {
    width: 160px;
    height: 160px;
    margin: 50px auto 20px auto;
    border-radius: 50%;
    border: 4px solid white;
  }
  .name,
  .position, .phone, .email{
    margin: 3px;
    color: #333333;
    font-weight: 300;
  }
  .position{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .phone, .email{
    display: inline-block;
    width: 20px;
    margin: 0px 5px;
    border-radius: 5px;
    height: 20px;
    background: $lightblue;
  }
  .download-resume{
    position: fixed;
    top: 30px;
    right: 30px;
    background: $lightblue;
    border-radius: 5px;
    width: 30px;
    height: 30px;
  }
  .divide-line {
    width: 50px ;
    height: 3px;
    background: #e8e9ef;
    margin: 0px auto 0 auto;
  }
  .skill-part{
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    .skill{
      background: $lightblue;
      padding: 3px 8px;
      color: white;
      margin: 7px;
      border-radius: 5px;
    }
  }
}
</style>

<script>
export default {
    data() {
        return {
            skillList: [{
                id: 10, label: 'SSR', point: '8', color:'rgb(188, 201, 142)'
            }, {
                id: 1, label: 'Vue', point: '8', color:'rgb(188, 201, 142)'
            }, {
                id: 2, label: 'Node', point: '8', color:'rgb(183,174,157)'
            }, {
                id: 3, label: 'Webpack', point: '8', color:'rgb(183,174,157)'
            }, {
                id: 4, label: 'Cordova', point: '8', color:'rgb(188, 201, 142)'
            }, {
                id: 5, label: 'mpVue', point: '8', color:'rgb(183,174,157)'
            }, {
                id: 6, label: 'php', point: '8', color:'rgb(188, 201, 142)'
            }, {
                id: 7, label: 'React', point: '8', color:'rgb(183,174,157)'
            }],
        }
    }
}
</script>

<style lang="scss">

</style>