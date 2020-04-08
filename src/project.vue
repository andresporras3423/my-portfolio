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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 50px;
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
    z-index: -1;
    cursor: pointer;
  }

  .g-column1{
      grid-column: 1;
  }

  .g-column2{
      grid-column: 2;
  }

</style>