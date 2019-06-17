<template>
    <div>
        <p class="msg">{{msg}}</p>
    </div>
</template>


<script>
    export default {//配置选项和Vue一致
       data(){//必须写函数
         return{
           msg:"Hello VUE Component"
         }
       }
    }
</script>

<style>
  .msg{
    color: red;
    font-size: 30px;
  }

</style>
