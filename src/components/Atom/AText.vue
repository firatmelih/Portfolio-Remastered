<template>
<span
  class="a-text"
  :class="['-' + level, '-' + color, {'-bold': bold}]"
>
  <slot/>
</span>
</template>

<script>
  export default {
    name: 'AText',
    props:{
      level:{
        required:false,
        default:'medium',
        type:String
      },
      bold:{
        required: false,
        default: false,
        type: Boolean
      },
      color:{
        required: false,
        default: '',
        type: String
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  @import 'src/scss/variables';

  .a-text{
    font-family: 'Ubuntu', sans-serif !important;
    font-style: normal;
    line-height: 140%;
    margin: 0;

    &.-small{
      font-size: $font-s;
    }
    &.-medium{
      font-size: $font-m;
    }
    &.-large{
      font-size: $font-l;
    }
    &.-x-large{
      font-size: $font-xl;
    }
    &.-xx-large{
      font-size: $font-xxl;
    }
    &.-mega{
      font-size: $font-mega;
    }
    &.-ultra{
      font-size: $font-ultra;
    }
    &.-bold{
      font-weight: bold;
    }

    &.-red{
      color: $primary-red;
    }
    &.-blue{
      color: $primary-blue;
    }
    &.-white{
      color: $white;
    }
    &.-orange{
      color: $primary-orange;
    }
  }
</style>
