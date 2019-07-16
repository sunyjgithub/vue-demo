export default {
  totalCount(state){
    return state.todos.length
  },

  completeCount(state){
    return state.todos.reduce((totalAmount,todo)=>totalAmount+(todo.complete?1:0),0)
  },

  isAllCheck(state,getters){
      return getters.completeCount===getters.totalCount && state.todos.length>0
  }


}
