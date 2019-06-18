<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
        <ItemComp v-for="(comment,index) in comments" :key="index" :index="index" :commentMsg="comment"
            :deleteComment="deleteComment"></ItemComp>
    </ul>
  </div>
</template>

<script>

    //list组件中需要使用item组件
    import Item from './Item';
    export default {
      //声明接收属性:这个属性就会成为组件对象的属性
      props:['comments','deleteComment'],
      components:{
        ItemComp:Item
      }
    }
</script>

<style >

  .reply {
    margin-top: 0px;
  }


</style>
