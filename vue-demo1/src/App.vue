<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <!--绑定事件监听放在一个普通的div上没有效果-->
        <!--<div v-on:addTodo="addTodo" >我是父组件的一个div</div>-->
        <todo-header ></todo-header><!--为当前这个组件绑定事件监听-->
        <todo-list ></todo-list>
        <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js';
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    import storageUtil from './util/storageUtil'


    export default {




      computed:{
        completeSize(){
          return this.todos.reduce((totalAmount,todo)=>totalAmount+(todo.complete?1:0),0)
        },

        isAllCheck:{
          get(){
            return this.completeSize===this.todos.length && this.completeSize>0
          },

          set(val){//val是当前checkbox的最新值
            this.selectAllTodos(val);
          }
        }
      },

      methods:{
        addTodo(todo){
          alert("我被触发了")
          this.todos.unshift(todo);

        },
        deleteTodo(index){
          this.todos.splice(index,1);

        },
        deleteCompleteTodos(){
         this.todos=this.todos.filter(todo=>!todo.complete)
        },
        selectAllTodos(check){
         this.todos.forEach(todo=>todo.complete=check)
        }

      },

      watch:{//开启深度监视
        todos: {
          deep:true,
          handler(newVal){
            storageUtil.saveTodos(newVal)
          }
        }
      },

      mounted(){//一般是执行异步代码，可以绑定事件监听 或者订阅消息

       /*  //订阅消息
        PubSub.subscribe('deleteTodo',function (msg,data) {
            this.deleteTodo(data);
        })*/

       //箭头函数没有自己的this 就ok了
        PubSub.subscribe('deleteTodo', (msg,data)=> {
          this.deleteTodo(data);
        })
      },


        components:{
          TodoHeader,
          TodoList,
          TodoFooter
        }

    }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>
