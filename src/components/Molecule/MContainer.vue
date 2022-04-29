<template>
  <div class="m-container">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'MContainer',
  }
</script>

<style lang="scss">
  .m-container {
    padding-top: 100px;
    background: rgba(0, 0, 0, 0.58);
    overflow: hidden;
    height: 100vh;
    margin: 0 160px;
    text-align: center;
    transition: transform 1s;
    &.scroll-clicked{
      transform: translateY(-1000px);
    }
    @media only screen and (max-width: 750px) {
      width: 100%;
      height: 100%;
      margin:0 0;
      .-ultra {
        margin-top: 100px;
        font-size: 20vw;
      }
    }
  }
</style>
