<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-list :todos="todos" :deleteTodo="deleteTodo"></todo-list>
        <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>

    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'

    console.log(TodoHeader);

    export default {

       data(){
         return{
           todos:[
             {title:'吃饭',complete:false},
             {title:'睡觉',complete:true},
             {title:'打游戏',complete:false}

           ]
         }
       },

      methods:{
        addTodo(todo){
          this.todos.unshift(todo);

        },
        deleteTodo(index){
          this.todos.splice(index,1);

        },

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
