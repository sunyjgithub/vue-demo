import {ADD_TODO,DELETE_TODO} from './mutation-types'


export default {
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo);
  },

  [DELETE_TODO](state,{index}){
    state.todos.splice(index,1)
  }
}
