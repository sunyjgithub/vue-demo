<template>
  <div>
    <p>点击了{{$store.state.count}} 次，次数是{{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">如果是奇数increment</button>
    <button @click="incrementAsync"> async increment</button>
  </div>
</template>

<script>


  import {mapGetters}  from 'vuex'

  export default {


    computed:{
      evenOrOdd(){
         return this.$store.getters.evenOrOdd("param");
      }
    },
    methods:{
      increment(){
        this.$store.dispatch('increment');
      },
      decrement(){
        this.$store.dispatch('decrement');
      },

      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd');
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync');
      }
    }

  }
</script>

<style>

</style>
