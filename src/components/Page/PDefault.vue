<template>
  <div class="p-default non-selectable">
    <slot/>
  </div>

</template>

<script>
  export default {
    name: 'PDefault'
  }
</script>

<style lang="scss">
  @import "src/scss/variables";
  .p-default {
    height: 100%;
    width: 100%;
    color: $white;
    @media only screen and (max-width: 750px) {
      background-size: contain;
      width: 100%;
      height: 100%;
    }
  }
</style>
