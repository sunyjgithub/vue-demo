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


export default {

  data(){
    return{
      count:0
    }
  },

  computed:{
    evenOrOdd(){
      return this.count%2===0?'偶数':'奇数'
    }
  },
  methods:{
    increment(){
       const count=this.count;
       this.count=count+1;
    },
    decrement(){
      const count=this.count;
      this.count=count-1;
    },

    incrementIfOdd(){
      const count=this.count;
      if(count%2===1){
        this.count=count+1;
      }
    },
    incrementAsync(){
       setTimeout(()=>{
         const count=this.count;
         this.count=count+1;
       },1000)
    }
  }

}
</script>

<style>

</style>
