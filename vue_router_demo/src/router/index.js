/*路由器模块*/
import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import Xxx from '../views/xxx'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter);

//要注意，以 / 开头的嵌套路径会被当作根路径。
export default new VueRouter({
  routes:[
    {
      path: '/about',
      component : About
    },
    {
      path: '/home',
      component : Home,
      children: [//主要定义在childern中，对应的组件就会插入到对应的父组件的 route-view中
        {
          path: 'news',//方式1
          component : News
        },
        {
          path: '/home/message',//方式二
          component : Message,
          children: [
            {
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: 'xxx',
          component : Xxx
        },
       /* {
          path: '',
          component : News  //那么初始化时就会把News组件渲染在home上   提供一个空路由
        },*/
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },

    {
      path: '/',
      redirect: '/about'

    },
    //虽然你的path设置成/home/xxx 看起来像是home的子路由 ，但你的路由组件定义在根层级中，只会渲染在根组件对应的route-view中
    /*{
      path: '/home/xxx',
      component : Xxx
    },*/

  ]
})
