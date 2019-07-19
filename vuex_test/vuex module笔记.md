Vuex 使用的是单一状态树，应用的所有状态会集中到一个对象中。
如果项目比较大，那么相应的状态数据肯定就会更多，这样的话，store 对象就会变得相当的臃肿，非常难管理。

//最终都会汇集到这里 会变得非常臃肿
export default new Vuex.Store({

   state,//状态对象
   mutations, //包含过个更新state函数的对象
   actions,//包含多个对应事件回调函数的对象
   getters,//包含多个getter计算属性函数的对象

})


Vuex 允许我们将 store 分割成大大小小的对象，每个对象也都拥有自己的 state、getter、mutation、action，这个对象我们把它叫做 module（模块），
在模块中还可以继续嵌套子模块、子子模块 


module 案例：
 现在在 src 里面建个文件夹，命名为 module，然后再里面新建一个 moduleA.js 文件，并编写如下代码：
 export default {
     state: {
         text: 'moduleA'
     },
     getters: {},
     mutations: {},
     actions: {}
 }
 
 如上，再建一个 moduleB.js 文件
 
 export default {
     state: {
         text: 'moduleB'
     },
     getters: {},
     mutations: {},
     actions: {}
 }
 
 
 然后打开 store.js 文件，导入这两个 module ：
 import moduleA from './module/moduleA';
 import moduleB from './module/moduleB';
 
 export default new Vuex.Store({
     modules: {
         moduleA, moduleB,
     },
     // ...
 }

这个时候，store 中已经注入了两个子模块 moduleA moduleB，
我们可以在 App.vue 中通过 this.$store.state.moduleA.text 这种方式来直接访问模块中的 state 数据。
如下修改：
// ...
computed: {
    ...mapState({
        name: state => state.moduleA.text
    }),
},

由此可知，模块内部的 state 是局部的，只属于模块本身所有，所以外部必须通过对应的模块名进行访问。

