<template>
  <header class="header-styles">
    <a>Projects</a>
    <a>Contact</a>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
  .header-styles{
    display: flex;
    height: 100px;
    flex-direction: row-reverse;
    align-items: center;
  }

  .header-styles > a {
    flex-basis:10%;
  }
</style>
