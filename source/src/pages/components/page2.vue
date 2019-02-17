<template>
    <div class="compon-page2">
        <div class="position-part">
            <div class="header"><i class="iconfont icon-jibenxinxi1"></i><span class="header-title">工作经历</span></div>
            <div class="position-content" :style="{height: swiperHeight + 'px'}">
                <swiper :options="swiperOption">
                    <!-- <swiper-slide>
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
                    </swiper-slide> -->
                    <swiper-slide>
                        <div class="detail detail1">
                            <div class="info">
                                <span>薪得付信息技术有限公司</span>
                                <span>2017.11-至今</span>
                            </div>
                            <div class="sub-info">
                                <span>前端开发</span>
                                <span class="strong">(vue,node,webpack)</span>
                            </div>
                            <div class="work toggle-style" :class="!toggleFlag ? '' : 'toggle-style-active'">
                                <div class="toggle-style-item toggle-style-font" :style="{height: swiperHeight - 60 + 'px'}">
                                    <div class="work-header">
                                        <span class="work-detail strong">工作职责</span>
                                        <i class="iconfont icon-fanzhuan1 animated infinite tada delay-1s" @click="toggleFlag = !toggleFlag"></i>
                                    </div>
                                    <span class="work-detail">1.负责公司原有项目的结构升级，性能优化</span>
                                    <span class="work-detail">2.负责新项目的构建</span>
                                    <span class="work-detail">3.参与业务需求的规划分析</span>
                                    <span class="work-detail">4.负责前端项目的code review</span>
                                    <span class="work-detail">5.负责公司Web项目、小程序、公众号、企业微信、APP的开发迭代，为第三方应用提供APP硬件支持</span>
                                </div>
                                <div class="toggle-style-item toggle-style-back"  :style="{height: swiperHeight - 60 + 'px'}">
                                    <div class="work-header">
                                        <span class="work-detail strong">主要业绩</span>
                                        <i class="iconfont icon-fanzhuan1 animated infinite tada delay-1s"  @click="toggleFlag = !toggleFlag"></i>
                                    </div>
                                    <span class="work-detail">1.通过升级webpack、首页预渲染、合理拆包等优化提升原项目的首屏加载和打包速度（原10s到3s内）</span>
                                    <span class="work-detail">2.构建开发了Portal、HRD平台、个税小程序等，移植app功能至微信公众号</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="detail detail1">
                            <div class="info">
                                <span>国资商城</span>
                                <span>2017.3–2017.11</span>
                            </div>
                            <div class="sub-info">
                                <span>前端开发</span>
                                <span class="strong">(nuxt,ssr)</span>
                            </div>
                            <div class="work">
                                <span class="work-detail"></span>
                                <span class="work-detail">1.负责公司原有项目的架构升级，性能优化</span>
                                <span class="work-detail">2.负责新项目的构建</span>
                                <span class="work-detail">3.参与业务需求的规划分析</span>
                                <span class="work-detail">4.负责前端项目的code review</span>
                                <span class="work-detail">5.业务上负责公司EcoSaas平台、小程序开发、公众号、企业微信、app的开发迭代，为第三方应用提供app硬件支持</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="detail detail1">
                            <div class="info">
                                <span>美特斯邦威</span>
                                <span>2016.3–2017.11</span>
                            </div>
                            <div class="sub-info">
                                <span>前端开发</span>
                                <span class="strong">(nuxt,ssr)</span>
                            </div>
                            <div class="work">
                                <span class="work-detail"></span>
                                <span class="work-detail">1.负责公司原有项目的架构升级，性能优化</span>
                                <span class="work-detail">2.负责新项目的构建</span>
                                <span class="work-detail">3.参与业务需求的规划分析</span>
                                <span class="work-detail">4.负责前端项目的code review</span>
                                <span class="work-detail">5.业务上负责公司EcoSaas平台、小程序开发、公众号、企业微信、app的开发迭代，为第三方应用提供app硬件支持</span>
                            </div>
                        </div>
                    </swiper-slide>
                     <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <!-- <div class="right-bottom">
                    <i class="iconfont icon-username icon1"></i>
                    <i class="iconfont icon-username icon2"></i>
                </div> -->
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
        position: relative;
        margin-top: 30px;
        .detail{
            position: relative;
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
            .toggle-style{
                position: relative;
                perspective: 500;
                &-item{
                    position: absolute;
                    top: 0;
                    background-color: #fff;
                    -webkit-perspective: 1000;
                    -webkit-transition: all 1.5s;
                    -moz-transition: all 1.5s;
                    -ms-transition: all 1.5s;
                    -o-transition: all 1.5s;
                    overflow: hidden;
                }
                &-back{
                    z-index: 1;
                    position: relative;
                    transform: rotateY(-180deg);
                }
                &-font{
                    z-index: 2;
                }
               
            }
            .toggle-style-active{
                .toggle-style-font{
                    z-index: 1;
                    transform: rotateY(-180deg);
                }
                .toggle-style-back{
                    z-index: 2;
                    transform: rotateY(-360deg);
                }
            }
            .work{
                margin-top: 20px;
                .strong{
                    font-weight: 600;
                }
                .work-detail{
                    color: #666666;
                    font-size: 14px;
                    line-height: 26px;
                    display: block;
                }
                &-header{
                    display: flex;
                    justify-content: space-between;
                    .iconfont{
                        font-size: 14px;
                        color: #333;
                    }
                }
            }
        }
        .right-bottom{
            position: absolute;
            // bottom: 70px;
            overflow: hidden;
            right: 0;
            i{
                color: #FCF3EF;
                font-size: 70px;
            }
            .icon1{
                font-size: 57px;
                margin-right: -19px;
                display: inline-block;
                vertical-align: baseline;
            }
            .icon2{
                margin-right: -25px;
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
            toggleFlag: false,
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