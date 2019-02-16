<template>
    <div class="compon-page1">
        <div class="bak-color"></div>
        <div class="download-resume animated infinite jello delay-1s"><i  class="iconfont icon-fujian "></i></div>
        <div class="content">
            <div class="avator">photo</div>
                <h2 class="name">钱丹</h2>
            <div class="divide-line"></div>
            <h3 class="position">
                <a class="phone" href="tel:17321413875"><i class="iconfont icon-phonenumber"></i></a>
                /
                <a class="email" href="mailto:510043785@qq.com"><i class="iconfont icon-icon-test13"></i></a>
            </h3>
            <div class="skill-part">
                <span class="skill" :style="{background: skill.color}"  v-for="skill in skillList" :key="skill.id">{{skill.label}}</span>
            </div>
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
    .bak-color{
        background:linear-gradient(180deg,#348dca 0%,rgba(245,239,254,1) 100%);
        opacity:0.06;
        height: 250px;
        width: 100%;
    }
    .content{
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        text-align: center;
    }
    .avator {
    width: 160px;
    text-align: center;
    line-height: 160px;
    height: 160px;
    
    margin: 50px auto 20px auto;
    border-radius: 50%;
    // box-shadow:0px 0px 4px 0px rgba(188,99,103, 0.1);
    border: 4px solid white;
  }
  .name, .position{
    color: #333333;
  }
  .name,
  .position, .phone, .email{
    margin: 3px;
    font-weight: 300;
  }
  .position{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .phone, .email{
      color: $darkbrown;
    display: inline-block;
    margin: 0px 5px;
  }
  .download-resume{
    position: fixed;
    top: 30px;
    right: 30px;
    color: #333333;
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
                id: 10, label: 'SSR', point: '8', color:'#9CDD59'
            }, {
                id: 1, label: 'Vue', point: '8', color:'#9CDD59'
            }, {
                id: 2, label: 'Node', point: '8', color:'#5699FF'
            }, {
                id: 3, label: 'Webpack', point: '8', color:'#FF9541'
            }, {
                id: 4, label: 'Cordova', point: '8', color:'#6E71EC'
            }, {
                id: 5, label: 'mpVue', point: '8', color:'#FF9541'
            }, {
                id: 6, label: 'php', point: '8', color:'#6E71EC'
            }, {
                id: 7, label: 'React', point: '8', color:'#9CDD59'
            }],
        }
    }
}
</script>

<style lang="scss">

</style>