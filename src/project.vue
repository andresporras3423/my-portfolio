<template>
  <section class="project-properties">
      <div v-bind:class="[direction[index%2], photo]" v-bind:style = "giveUrl()" >
      </div>
      <div v-bind:class="[direction[(index+1)%2]]">
          <h3>{{properties.name}}</h3>
          <p>{{properties.description}}</p>
          <div>
              <button>Github</button>
              <button>Live</button>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    props: ['properties', 'index'],
  data () {
    return {
        photo: "photo",
        col6: "col-6",
        direction: ["g-column1","g-column2"]
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
      border-radius: 10px;
      box-shadow: 0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1);
      
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
    border-radius: 10px;
  }

  .g-column1{
      grid-column: 1;
  }

  .g-column2{
      grid-column: 2;
  }

</style>