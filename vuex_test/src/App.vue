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
  import { mapState } from 'vuex'

export default {


  computed:{
    evenOrOdd(){
      return this.$store.getters.evenOrOdd();
    }
  },
  methods:{
    increment(){
     //通知vuex去增加
      this.$store.dispatch('increment')//触发store中对应的action调用
    },
    decrement(){
      this.$store.dispatch('decrement')
    },

    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    }
  }

}
</script>

<style>

</style>
