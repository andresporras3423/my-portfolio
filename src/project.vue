<template>
  <section class="project-properties shadow-style">
      <div v-bind:class="[direction[index%2], photo]" v-bind:style = "giveUrl()" >
      </div>
      <div v-bind:class="[direction[(index+1)%2], info]">
          <h3>{{properties.name}}</h3>
          <p>{{properties.description}}</p>
          <p>
              <span class="tools-style" v-for="(t, index) in properties.tools" :key="index">{{t}}</span>
          </p>
          <div>
              <button class="btn btn-primary button-link-style" v-on:click="global.redirect(properties.github)">Github</button>
              <button class="btn btn-primary button-link-style" v-on:click="global.redirect(properties.live)">Live</button>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    props: ['properties', 'index'],
  data () {
    return {
        global: this.$eventHub,
        photo: "photo",
        col6: "col-6",
        direction: ["g-column1","g-column2"],
        info: "info"
    }
  },
  methods: {
      giveUrl: function(){
          return `background-image: url('${this.properties.url}');`
      }
  }
}
</script>

<style>
  .project-properties {
      background-color: white;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      margin-top: 25px;
      margin-bottom: 25px;
  }

  .project-properties > * {
      grid-row: 1;
  }

  .photo{
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    padding-top: 40%;
    z-index: 1;
    cursor: pointer;
  }

  .g-column1{
      grid-column: 1;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
  }

  .g-column2{
      grid-column: 2;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
  }

  .tools-style{
      border: 1px solid grey;
      border-radius: 10%;
      margin: 5px;
      padding: 5px;
      background-color: rgba(161, 169, 234, 0.5);
  }

  .info{
      margin: 10px;
  }

  .button-link-style {
      width: 80px;
      height: 40px;
  }

</style>