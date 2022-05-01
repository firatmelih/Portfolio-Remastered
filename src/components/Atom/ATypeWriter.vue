<template>
  <a-text
    bold
    level="x-large"
  >
    <template v-if="!onlyCursor">I am {{ currentPrompt }}</template>
    {{ cursor }}
  </a-text>
</template>

<script>
  import AText from '@/components/Atom/AText'
  document.title = 'test'
  export default {
    name: 'ATypeWriter',
    components: { AText },
    props: {
      willType: {
        type: Array,
        required: true
      },
      onlyCursor: {
        type: Boolean,
        default:false
      }
    },
    data: () => {
      return {
        currentPrompt: '',
        cursor: '',
        atHome:true
      }
    },
    methods: {
      async typeTheScript (script) {
          for (let x = 0; x <= script.length; x++) {
            x === script.length ? x = 0 : x
            await this.sleep(200)
            for (let y = 0; y < script[x].length; y++) {
              await this.sleep(200)
              this.currentPrompt += (script[x][y])
              if(this.atHome)document.title='I am '+this.currentPrompt
            }
            for (let counter = 0; counter < 3; counter++) {
              this.cursor = '|'
              await this.sleep(400)
              this.cursor = ''
              await this.sleep(400)
            }
            for (let y = 0; y < script[x].length; y++) {
              await this.sleep(100)
              this.currentPrompt = this.currentPrompt.slice(0, -1)
              if(this.atHome)document.title='I am '+this.currentPrompt
            }
          }
      },
      sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
    },
    created () {
      this.typeTheScript(this.willType)
      if(this.onlyCursor)this.atHome=false
    },
    unmounted () {
      this.atHome = false
      document.title='About Me'
    }
  }
</script>
