/*入口文件*/
import Vue from 'vue';
import App from './App';
import './base.css'
import store from './store'

new Vue({
  el:"#app",
  components:{App},
  template:'<App/>',
  store
})

