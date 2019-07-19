// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import Storage from 'vue-ls';
import config from './defaultSettings'

Vue.config.productionTip = false

Vue.use(Storage, config.storageOptions);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  mounted: function() {


    let callback = (val, oldVal, uri) => {
      console.log('localStorage change', val,uri);
    }

    Vue.lss.on('foo', callback) //watch change foo key and triggered callback


  }
})




