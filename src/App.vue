<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeDemo  @dataPassed="showdata"/>
    
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomeDemo from './components/HomeDemo.vue'
// import  EmitDemo from './components/EmitDemo.vue'

export default {
  name: 'App',
  components: {
      HomeDemo
  },
  methods:{
    showdata(val){
      console.log('emiited value', val);
    }
  }
}
</script>

<style>
#app>div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #084179;
  margin-top: 30px;
  background-color: powderblue;
}
#app>div>div>h2{
  margin-top: 60px;
  background-color: aqua;
}
</style>
