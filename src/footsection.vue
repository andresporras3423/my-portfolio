<template>
  <footer class="footer-styles">
    <div><span class="contact">Contact me</span></div>
    <div>
         <span class="social-links">
        <label><i class="fa fa-github"></i></label>
        <label><i class="fa fa-twitter"></i></label>
        <label><i class="fa fa-linkedin"></i></label>
      </span>
    </div>
  </footer>
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
  .footer-styles > div{
    float:left;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center; */
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
    width: 30px;
    height: 30px;
    background-color: rgb(255, 81, 0); 
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
    position: relative;
}

.social-links > label > i {
    cursor: pointer;
    position: absolute;
    top: 7px;
    left: 8px;
}
</style>
