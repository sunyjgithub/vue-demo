<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对VUE的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <AddComp :addComment="addComment"></AddComp>
        <!--组件间通信 将comments数据传递给组件的comments属性，在对应的组件中就需要有这个组件属性的相关定义-->
        <ListComp :comments="comments" :deleteComment="deleteComment"></ListComp>
    </div>
  </div>

</template>


<script>
  import Add from './components/Add';
  import List from './components/List';
  export default {

    data() {
      return{
        comments:[//数据定义在哪个组件  更新数据的行为和方法就应该定义在哪个组件上
          {
            name:'sunyj',
            content : 'vue挺好'
          },
          {
            name : 'pengrj',
            content : 'good ',
          },
          {
            name : 'zhubj',
            content : 'fight',
          }
        ]
      }
    },

    methods:{
      //添加评论
      addComment(comment){
        this.comments.unshift(comment)
      },
      //删除评论
      deleteComment(index){
        this.comments.splice(index,1);
      }
    },

    components:{
      AddComp:Add,
      ListComp:List
    }

  }
</script>

<style>


</style>
