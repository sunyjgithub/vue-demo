/*路由器模块*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue'

Vue.use(VueRouter);

/*向外暴露路由器对象*/
export default  new VueRouter({
  //n个路由 注意是routes  不是routers
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }





  ]
})
