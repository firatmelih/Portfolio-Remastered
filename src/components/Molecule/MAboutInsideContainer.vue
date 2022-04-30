<template>
  <div
    class="m-about-inside"
  >
    <div @click="closeTheGates" class="button-close">
      <a-text>
        X
      </a-text>
    </div>
    <slot/>
  </div>
</template>

<script>
  import AText from '@/components/Atom/AText'
  export default {
    name: 'MAboutInsideContainer',
    components: {AText},
    props:{
      closeTheGates:{
        type:Function
      }
    }
  }
</script>

<style lang="scss">
  @import '/src/scss/variables';

  .m-about-inside{
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: absolute;

  &.-grid{
    padding: 50px;
    display: grid;
      justify-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;
      @media only screen and (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
}

  .-grid__card{
    background: $body-bg;
    border: 1px solid $primary-orange;
    width: 100%;
    height: 300px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    span {
      display: flex;
      span {
        padding: 5px;
      }
    }
    &__hover {
      width: 100%;
      height: 300px;
      border: 1px solid $white;
      padding: 15px;
      font-size: 18px;
      font-weight: bold;
      color: $white;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>
