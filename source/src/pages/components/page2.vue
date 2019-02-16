<template>
    <div class="compon-page2">
        <div class="position-part">
            <div class="header"><i class="iconfont icon-jibenxinxi1"></i><span class="header-title">工作经历</span></div>
            <div class="position-content" :style="{height: swiperHeight + 'px'}">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="item in 3">
                        <div class="detail detail1">
                            <div class="info">
                                <span>CCCCCDDPPPPPPP</span>
                                <span>2017.11-至今</span>
                            </div>
                            <div class="sub-info">
                                <span>前端开发</span>
                                <span class="strong">(vue,node,webpack)</span>
                            </div>
                            <div class="work">
                                <span class="work-detail">负责吹逼</span>
                                <span class="work-detail">负责甩锅</span>
                                <span class="work-detail">负责撕逼</span>
                                <span class="work-detail">组织开黑</span>
                                <span class="work-detail">专业互怼</span>
                                <span class="work-detail">专业带徒</span>
                                <span class="work-detail">值得信赖</span>
                            </div>
                        </div>
                    </swiper-slide>
                    
                     <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
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
.compon-page2{
    padding: 40px 30px;
    .position-part{
        position: relative;
        border-top: 1px solid #DAECFC;
    }
    .header{
        position: absolute;
        top: -15px;
        display: flex;
        i{
            font-size: 20px;
            color: #5699FF;
        }
        &-title{
            background: white;
            padding: 0 10px;
            color: #333333;
            font-weight: 300;  
            font-size: 18px; 
        }
    }
    
    .icon-position{
        display: inline-block;
        margin: 0px 5px;
    }
}
</style>
<style lang="scss">
.compon-page2{
    .swiper-container{
        height: 100%;
    }
    .position-content{
        margin-top: 30px;
        .detail{
            padding: 10px;
            .info{
                display: flex;
                justify-content: space-between;
            }
            .sub-info{
                color: #999999;
                font-size: 13px;
                .strong{
                    padding-left: 10px;
                    font-weight: 600;
                    color: #666666;
                }
            }
            .work{
                margin-top: 20px;
                .work-detail{
                    color: #666666;
                    display: block;
                    // padding: 0 10px;
                }
            }
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                }
            },
            swiperHeight: 0
        }
    },
    mounted() {
        this.swiperHeight = window.innerHeight - 150
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>