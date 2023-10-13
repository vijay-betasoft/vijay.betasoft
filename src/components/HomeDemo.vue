<template>
    <div>
        <h1>First Page</h1>
        <button @click="Emitdata" style="width:60px">click me</button>
    </div>
</template>
<script>
  export default {
    name: "HomeDemo",
    data(){
      return{
        data:"hello world!"
      };
    },
    methods:{
      Emitdata(){
        console.log("inside Emitdata");
        this.$emit('dataPassed',this.data);
      },
    },
  };
</script>