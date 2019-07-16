<template>
  <div>
    <p>点击了{{count}} 次，次数是{{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">如果是奇数increment</button>
    <button @click="incrementAsync"> async increment</button>
  </div>
</template>

<script>
  import { mapState,mapActions,mapGetters } from 'vuex'

export default {

    data(){

      return{
        //count:this.$store.state.count// state的变化不能直接反应到视图上 如果用在data配置中，应该使用在computed中
      }
    },


  /*computed:{
    evenOrOdd(){
      return this.$store.getters.evenOrOdd;
    },
    count(){
      return this.$store.state.count
    }
  },*/
  computed:{
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },

  methods:{
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
  }
  /*methods:{
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
  }*/

}
</script>

<style>

</style>
