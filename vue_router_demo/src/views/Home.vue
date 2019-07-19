<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news">News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
        <li><router-link to="/home/xxx">xxx</router-link></li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
      mounted() {
          alert('访问home的子组件的路径，home也会激活')
      }
    }
</script>

<style scoped>

</style>
