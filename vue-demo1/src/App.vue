<template>
  <div>
     <img class="logo" src="./assets/logo.png" alt="logo"/>
    <!--使用组件标签-->
    <HelloWorld></HelloWorld>

  </div>
</template>


<script>
  //1引入组件
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    //2映射组件标签
    components:{
      HelloWorld
    }

  }
</script>

<style>
 .logo{
   width: 200px;
   height: 200px;
 }

</style>
