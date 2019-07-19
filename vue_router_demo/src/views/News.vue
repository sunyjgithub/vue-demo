<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['News001', 'News002', 'News003']
      }
    },

    mounted() {
      alert("news 的生命周期")
    }
  }
</script>

<style>

</style>
