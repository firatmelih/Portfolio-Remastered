<template>
<router-view />
</template>

<script>
  // import { mapState, mapActions } from 'vuex'

  export default {
    name: 'App',
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
    &::-webkit-scrollbar {
      display: none;
    }
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif !important;
    scroll-behavior: smooth;
  }
</style>
