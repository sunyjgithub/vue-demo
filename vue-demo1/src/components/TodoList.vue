<template>
  <ul class="todo-main">
     <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" ></todo-item>
  </ul>
</template>

<script>

    import TodoItem from './TodoItem'
    import {mapState} from 'vuex'
    export default {
      components:{
        TodoItem
      },
      computed:{
        ...mapState(['todos'])
      }
    }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
