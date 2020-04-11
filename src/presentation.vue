<template>
  <section>
      <div class="photo-div">
        <img src="./assets/oscar.jpg" class="photo-style" >
        <article>
          <h1 class="text-title">> Andrés Porras<span v-bind:class="[colorClass[colorOpt]]">|</span></h1>
          <p>Welcome to my site. I am a software developer, check out below my projects and contact info.</p>
        </article>
        
      </div>
      <div class="shadow-style about-section">
        <h3 class="about-title"> 
            <div class="red-point point"></div>
            <div class="yellow-point point"></div>
            <div class="green-point point"></div>
            <div class="title-style">About me</div>
          </h3>
        <div class="about">
          <p><strong>Experience:</strong> +2 years</p>
          <p><strong>Languages:</strong> Ruby, Javascript, PHP, Python, C#</p>
          <p><strong>Frameworks:</strong> Ruby On Rails, Vue.js, Flask, .NET</p>
          <p><strong>Other tools:</strong> SQL, Git, Linux</p>
          <p><strong>Education:</strong> Systems engineer (UNAD, Colombia), B2 english level (British Council)</p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    created: function(){
      this.updateColor();
    },
  data: function () {
    return {
        colorClass:["","disappear"],
        colorOpt: 0
    }
  },
  methods: {
      updateColor: function(){
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

  .about-section{
    font-family: 'Ubuntu Mono', monospace;
  }

  .about-title{
    display: flex;
    background-color: rgb(223, 222, 225);
    margin-bottom: 0;
    align-items: center;
    font-size: 30px;
  }

  .about-title > * {
    margin-left: 5px;
    margin-right: 5px;
  }

  .about{
    background-color: rgb(90, 93, 122);
  }


  .about > p {
    color: #35feff;
    padding: 20px 10px 0px 35px;
    margin-bottom: 0;
    font-size: 18px;
  }

  .about > p:last-of-type {
    padding-bottom:20px;
  }

  .about > p > strong {
    color: white;
  }

  .red-point{
    background-color: red;
  }

  .yellow-point{
    background-color: yellow;
  }

  .green-point{
    background-color: green;
  }

  .point{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .about-section > h3 { 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .about-section > div { 
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

</style>
