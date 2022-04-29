<template>
<div class="non-selectable w-100">
  <div :class="['a-scroll-button',{'-clicked':clicked}]">
    <p>.</p>
  </div>
</div>
</template>

<script>
  export default {
    name: 'AScrollButton',
    components: {  },
    props:{
      clicked:{
        type:Boolean
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/scss/variables';
  .w-100{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
  .a-scroll-button{
    transition: all 1s;
    &.-clicked{
      transform: rotate(180deg);
    }
    z-index: 100;
    position: absolute;
    top: 75vh;
    border: 2px solid white;
    border-radius: 30px;
    height: 100px;
    width: 60px;
    color: white;
    font-size: $font-mega;
    p{
      cursor: pointer;
      transition: all .5s;
      position:relative;
      text-align: center;
      top: -30px;
    }
    &:hover{
      p{
        top: 0;
      }
    }
  }

</style>
