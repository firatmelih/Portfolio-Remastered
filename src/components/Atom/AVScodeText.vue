<template>
  <a-text
    style="padding: 0 10px 0 0"
    :class="[
    {'js-const':(input==='const' || isConst)},
    {'js-special':input==='import' || input==='from' || input==='return' || input==='export' || input==='default'},
    {'js-string':string},
    {'js-special':special},
    {'js-symbol':symbol},
    {'js-variable':variable},
    {'js-custom':input!=='const' && input!=='from' && input!=='return' && !variable && !symbol && !special && !string && !isConst}
    ]"
  >
    {{ input }}
  </a-text>
</template>

<script>
  import AText from '@/components/Atom/AText'

  export default {
    name: 'AVScodeText',
    components: { AText },
    props: {
      input: {
        type: String,
        default: ''
      },
      string: {
        type: Boolean
      },
      special: {
        type: Boolean
      },
      isConst: {
        type: Boolean
      },
      symbol: {
        type: Boolean
      },
      variable: {
        type: Boolean
      }
    }
  }
</script>
