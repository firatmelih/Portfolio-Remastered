<template>
  <p-default :class="{'scroll-clicked':scrollCount==1}">
    <m-navigation/>
    <a-scroll-button
        id="scroll"
      @click="scrollCount===4?scrollCount=2:scrollCount+=1"
      :clicked="scrollCount===2"
    />
    <m-container id="welcome" :class="['grid-gap','vh100']">
        <a-text
          level="ultra"
        >Welcome<i class="bi bi-github"></i>
        </a-text>
        <a-type-writer :will-type="typeWriterInputs"/>
        <m-socials/>
    </m-container>
    <p-about id="about"/>
  </p-default>
  <m-container id="rick" :class="['grid-gap','vh100']">
      <iframe
          v-if="!isMobile || scrollCount===1"
          :class="{'lift-me-up':scrollCount===1}"
          allow="autoplay"
          id="roll"
          width="560"
          height="315"
          :src="scrollCount===1?'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1':'https://www.youtube.com/embed/dQw4w9WgXcQ'"
          title="YouTube video player"
          allowfullscreen
      ></iframe>
  </m-container>
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
  import PAbout from "@/components/Page/PAbout";

  export default {
    name: 'PHome',
    components: {PAbout, PDefault, MContainer, MSocials, AText, ATypeWriter, AScrollButton, MNavigation },
    data: () => {
      return {
        typeWriterInputs: ['Melih', 'a Developer', 'an Engineer', 'a Student'],
        scrollCount: 0,
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
      if (this.scrollCount!==1) {
        disable()
      } else {
        enable({ size: '15vmax' })
      }
      if(this.scrollCount===0 || this.scrollCount===4){
        document.getElementById('welcome').scrollIntoView()
        document.getElementById('scroll').classList.remove('reverse')
      }
      else if(this.scrollCount===1)
      {
        document.getElementById('rick').scrollIntoView()
      }
      else if(this.scrollCount===2){
        document.getElementById('about').scrollIntoView()
        document.getElementById('scroll').classList.add('reverse')
      }
      else if(this.scrollCount===3){
        this.scrollCount=4
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/scss/variables';
  @import 'src/scss/script-styles';
  #rick{
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  iframe{
    z-index: -1;
  }
  @media only screen and (max-width: 750px) {
    iframe {
      z-index: 2;
      width: 350px;
    }
  }
  .reverse{
    .a-scroll-button{
      background: black;
    }
  }
</style>
