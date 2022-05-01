<template>
<router-view />
</template>

<script>
  // VERSION 1.0.1
  // import { mapState, mapActions } from 'vuex'

  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import 'src/scss/variables';
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  body{
    margin: 0;
    padding: 0;
    background:url('./assets/background.png') !important;
    background-size: cover;
  }
  * {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif !important;
    scroll-behavior: smooth;
  }
</style>
