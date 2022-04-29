<template>
  <p-default :class="{'scroll-clicked':scrollClicked}">
    <m-navigation/>
    <a-scroll-button
      @click="scrollClicked=!scrollClicked"
      :clicked="scrollClicked"
    />
    <m-container :class="['grid-gap','vh100',{'scroll-clicked':scrollClicked}]">
        <a-text
          level="ultra"
        >Welcome<i class="bi bi-github"></i>
        </a-text>
        <a-type-writer :will-type="typeWriterInputs"/>
        <m-socials/>
    </m-container>
    <div class="center-me">
      <iframe
        v-if="!isMobile || scrollClicked"
        :class="{'lift-me-up':scrollClicked}"
        allow="autoplay"
        id="roll"
        width="560"
        height="315"
        :src="scrollClicked?'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1':'https://www.youtube.com/embed/dQw4w9WgXcQ'"
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>
  </p-default>
</template>

<script>
  import MNavigation from '@/components/Molecule/MNavigation'
  import AScrollButton from '@/components/Atom/AScrollButton'
  import ATypeWriter from '@/components/Atom/ATypeWriter'
  import AText from '@/components/Atom/AText'
  import MSocials from '@/components/Molecule/MSocials'
  import {
    enable,
    disable
  } from 'cursor-flashlight'
  import '@mdi/font/css/materialdesignicons.min.css'
  import MContainer from '@/components/Molecule/MContainer'
  import PDefault from '@/components/Page/PDefault'

  export default {
    name: 'PHome',
    components: { PDefault, MContainer, MSocials, AText, ATypeWriter, AScrollButton, MNavigation },
    data: () => {
      return {
        typeWriterInputs: ['Melih', 'a Developer', 'an Engineer', 'a Student'],
        scrollClicked: false,
        isMobile: false
      }
    },
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 750
      }
    },
    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },
    updated () {
      if (!this.scrollClicked) {
        disable()
      } else {
        enable({ size: '15vmax' })
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/scss/variables';
  @import 'src/scss/script-styles';

  iframe {
    transition: all 1s;
    z-index: -1;
    position: fixed;
    bottom: -500px;
      @media only screen and (max-width: 750px) {
        position: fixed;
        top: 3px;
      }
  }
  .lift-me-up{
    position: fixed;
    bottom: 400px;
    @media only screen and (max-width: 750px) {
      top: 200px !important;
    }
  }


  @media only screen and (max-width: 750px) {
    iframe {
      z-index: 1243;
      position: fixed;
      top: 5px;
      width: 350px;
    }
  }
</style>
