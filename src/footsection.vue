<template>
  <footer class="footer-styles">
    <div><span class="contact">Contact me</span></div>
    <div>
         <span class="social-links">
        <label><i class="fa fa-github" v-on:click="global.redirect('https://github.com/andresporras3423')"></i></label>
        <label><i class="fa fa-twitter" v-on:click="global.redirect('https://twitter.com/oscarrussi1')"></i></label>
        <label><i class="fa fa-linkedin" v-on:click="global.redirect('https://www.linkedin.com/in/oscar-andr%C3%A9s-russi-porras/')"></i></label>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      global: this.$eventHub
    }
  },
  methods: {
  }
}
</script>

<style>
  .footer-styles > div{
    float:left;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
  }

  /* .footer-styles > div > span {
      grid-column: 2;
      grid-row: 1;
  } */

.contact{
    font-size: 30px;
}

.social-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
}

.social-links > label {
    width: 35px;
    height: 35px;
    background-color: rgb(161, 169, 234); 
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
    position: relative;
}

.social-links > label > i {
    cursor: pointer;
    position: absolute;
    top: 9px;
    left: 9px;
    font-size: 20px;
}
</style>
