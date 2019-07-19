<template>
    <div>
       <h2>About组件</h2>
      <h2>{{msg}}</h2>
      <input type="text">
    </div>

</template>

<script>
    export default {
        name: "About",

        props: {
          msg: String
        },

        mounted() {
          alert("生命周期方法触发");
        }
    }
</script>

<style scoped>

</style>
