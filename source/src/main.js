import Vue from 'vue'
import App from './App.vue'
import 'animate.css'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
}).$mount('#app')
