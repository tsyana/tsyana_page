<template>
  <div class="home-page">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <div class="part-1">
            <!-- <div class="avator"></div> -->
            <div class="overflow-name">fasdlfkjasldkfjalskdfjalkdfjaaaaaaaaaaaaaaaaaaaaaaaaaaalksdf</div>

            <div class="overflow-name" style="max-width: 15%;">fasdlfkjasldkfjalskdfjalkdfjaaaaaaaaaaaaaaaaaaaaaaaaaaalksdf</div>
            <!-- <h2 class="name">苹果</h2>
            <div class="divide-line"></div>
            <h3 class="position">Test</h3>-->
          </div>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">2</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">biubiu</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">xixi</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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

      
      this.hover(document.querySelectorAll(".overflow-name"),function(elem){
            console.log('over',elem);
        },function(elem){
            console.log('out',elem);
      });
    
    // document.querySelectorAll(".overflow-name").onmouseenter = function(el) {
    //   console.log(document.querySelector(".overflow-name").offsetWidth);
    // };
  },
  directives: {
    hide: {
      // 指令的定义
      bind: function(el, binding) {
        let { value: data } = binding;

        let text = el.innerHTML;

        console.log(el.innerHTML);

        // console.log(data)
        if (text == null) {
          el.innerHTML = "";
        }
        if (text.length > data.size) {
          el.innerHTML = text.substring(0, data.size - 1) + "...";
        } else {
          el.innerHTML = text;
        }
        // console.log(el.innerHTML)
      }
    }
  },
  methods: {
    bind(elem, ev, callback) {
      if (document.all) {
        elem.attachEvent("on" + ev, callback);
      } else {
        elem.addEventListener(ev, callback, false);
      }
    },
    unbind(elem, ev, callback) {
      if (typeof callback == "function") {
        if (document.all) {
          elem.detachEvent("on" + ev, callback);
        } else {
          elem.removeEventListener(ev, callback, false);
        }
      } else {
        if (document.all) {
          elem.detachEvent("on" + ev);
        } else {
          elem.removeEventListener(ev, false);
        }
      }
    },
    hover(elem, overCallback, outCallback) {
      //实现hover事件
      var isHover = false; //判断是否悬浮在上方
      var preOvTime = new Date().getTime(); //上次悬浮时间
      function over(obj) {
        var curOvTime = new Date().getTime();
        isHover = true; //处于over状态
        if (curOvTime - preOvTime > 10) {
          //时间间隔超过10毫秒，认为鼠标完成了mouseout事件
          overCallback(obj);
        }
        preOvTime = curOvTime;
      }
      function out(obj) {
        var curOvTime = new Date().getTime();
        preOvTime = curOvTime;
        isHover = false;
        setTimeout(function() {
          if (!isHover) {
            outCallback(obj);
          }
        }, 10);
      }
      if (elem.length) {
        elem.forEach((obj) => {
          this.bind(obj, "mouseover", over(obj));
          this.bind(obj, "mouseout", out(obj));
        })
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
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
  .page-1 {
    background: #f5f6fa;
    text-align: center;
  }
  .avator {
    width: 180px;
    height: 180px;
    margin: 50px auto 20px auto;
    border-radius: 50%;
    border: 4px solid white;
  }
  .name,
  .position {
    color: #333333;
    font-weight: 300;
  }
  .divide-line {
    width: 50px;
    height: 3px;
    background: #e8e9ef;
    margin: 0px auto 0 auto;
  }
  .overflow-name {
    max-width: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>


