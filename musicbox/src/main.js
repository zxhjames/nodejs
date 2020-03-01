import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

/* 网易云api的接入地址 */
Vue.prototype.$http = axios.create({
  //定义后端接口的根地址
  baseURL: "http://192.168.0.105:3000"
})

//服务器地址
Vue.prototype.$http1 = axios.create({
  //定义后端接口的根地址
  baseURL: "http://192.168.0.105:8081"
})
//引入 npm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './assets/scss/style.scss'
Vue.config.productionTip = false


//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//下拉搜索框
import vSelectSearch from 'v-select-search'
Vue.use(vSelectSearch)
//定义组件
import Bar from './components/Bar.vue'
Vue.component('m-bar', Bar)
import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)
import SingerPane from './components/SingerPane.vue'
Vue.component('m-singer-pane', SingerPane)
import PlayBoard from './components/player.vue'
Vue.component('m-player', PlayBoard)
import Banner from './components/Banner.vue'
Vue.component('m-banner', Banner)
import Video from './components/Video.vue'
Vue.component('m-video', Video)
import Album from './components/Album.vue'
Vue.component('m-album', Album)
import Search from './components/Search.vue'
Vue.component('m-search', Search)
import UserBar from './components/user/userBar.vue'
Vue.component('m-userBar', UserBar)
// //用户主页曲库组件
import U1 from './components/userMain/u1'
Vue.component('m-u1', U1)
import U2 from './components/userMain/u2'
Vue.component('m-u2', U2)
import U4 from './components/userMain/u4'
Vue.component('m-u4', U4)
import Action from './components/Action.vue'
Vue.component('m-action', Action)
//强制刷新组件
// Vue.forseUpdate()
import 'bootstrap'
import 'jquery'
//音乐播放
import vueAplayer from 'vue-aplayer'
//mv播放
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('./assets/iconfont/iconfont')
Vue.use(VideoPlayer)
// The actual tech function is registered to video.js automatically; so, there
// is no need to assign it to a variable.


//富文本编辑器
import Vue2Editor from "vue2-editor"
Vue.use(Vue2Editor)

//y引入全局模块
import global_ from './utils/grobal.vue'
Vue.prototype.COMMON = global_

import store from './store/index'
Vue.prototype.$store = store

Vue.use(vueAplayer)
Vue.config.productionTip = false
new Vue({
  store,
  global_,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')