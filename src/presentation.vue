<template>
  <section>
      <h1>> Andrés Porras <span v-bind:class="[colorClass[colorOpt]]">|</span></h1>
      <p>Welcome to my site. I am a software developer, check out below my project and contact info.</p>
  </section>
</template>

<script>
export default {
    created(){
      this.updateColor();
    },
  data () {
    return {
        colorClass:["","disappear"],
        colorOpt: 0
    }
  },
  methods: {
      updateColor(){
        var that = this
          setTimeout(function(){
        that.colorOpt= (that.colorOpt+1)%2;
        that.updateColor()
        }, 1000);
      }
    //   ,
    //   hello(){
    //       console.log('created called.');
    //   }
  }
}
</script>

<style>
  .disappear{
      display: none;
  }
</style>
