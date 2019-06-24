/*vuex的核心管理对象模块*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state={
   count:0
}


const mutations={
  //增加的mutation
  INCREMENT(state){
    state.count++
  },

  //减少的mutation
  DECREMENT(state){
    state.count--
  }
}

const actions={
  //增加的action
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    if(state.count%2===1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    //在action中可以直接执行异步代码
     setTimeout(()=>{
       commit('INCREMENT')
     },1000)
  }
}


const getters={
  evenOrOdd(state){
    return state.count%2===0?'偶数':'奇数'
  }
}

export default new Vuex.Store({

   state,//状态对象
   mutations, //包含过个更新state函数的对象
   actions,//包含多个对应事件回调函数的对象
   getters,//包含多个getter计算属性函数的对象

})


