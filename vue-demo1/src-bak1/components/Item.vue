<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
    </div>
    <p class="user"><span >{{commentMsg.name}}</span><span>说:</span></p>
    <p class="centence">{{commentMsg.content}}</p>
  </li>
</template>

<script>
    export default {
       props:{ //指定属性值和属性类型
         commentMsg:Object,
         //浏览器报错：
         // Invalid prop: type check failed for prop "deleteComment".
         // Expected String with value "function () { [native code] }", got Function
        /* deleteComment:String,*/
         deleteComment:Function,

         //key" is a reserved attribute and cannot be used as component prop. 报错
         //key:Number
         index:Number
       },
      methods:{
        deleteItem(){
          const {commentMsg,index}=this
          if(window.confirm(`确定删除${commentMsg.name}的评论吗？`)){
             this.deleteComment(index);
          }

        }
      }
    }
</script>

<style >
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>
