<template>
  <section>
      <div class="photo-div">
        <img src="./assets/oscar.jpg" class="photo-style" >
        <article>
          <h1 class="text-title">> Andrés Porras<span v-bind:class="[colorClass[colorOpt]]">|</span></h1>
          <p>Welcome to my site. I am a software developer, check out below my project and contact info.</p>
        </article>
        
      </div>
      <article>
        <h3>About me</h3>
        <div class="about">
          <p><strong>Experience:</strong> +2 years</p>
          <p><strong>Languages:</strong> Ruby, Javascript, PHP, Python, C#</p>
          <p><strong>Frameworks:</strong> Ruby On Rails, Vue.js, Flask, .NET</p>
          <p><strong>Other tools:</strong> SQL, Git, Linux</p>
          <p><strong>Education:</strong> Systems engineer (UNAD, Colombia), B2 english level (British Council)</p>
        </div>
      </article>
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

  .photo-style{
    width: 150px;
    height: 200px;
    border-radius: 50%
  }

  .photo-div {
    display: flex;
  }

  .photo-div > * {
    margin: 15px;
  }

  .photo-div > img {
    flex-basis: 150px;
  }

  .photo-div > article {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .photo-div > article > * {
    flex-basis: 100px;
  }

  .text-title{
    font-family: 'Press Start 2P', cursive;
    color: rgb(161, 169, 234); 
  }
</style>
