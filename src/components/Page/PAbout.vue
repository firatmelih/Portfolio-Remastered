<template>
  <p-default :class="['non-selectable',{'scroll-clicked':scrollClicked}]">
    <m-navigation/>
    <m-container
      class="pt-100"
      :class="[{'scroll-clicked':scrollClicked}, {'-contact-selected':renderMeThis==='contact'}]"
    >
      <div class="wardrobe">
        <o-about-inside
          :getWillMakeWay="getWillMakeWay"
          :whatToRender="renderMeThis"
        />
        <div
          id="work"
          @click="makeWayGuys('resume')"
          :class="['wardrobe__item', '-resume',{'will-make-way-to-left':willMakeWay}]"
        >
          <w-icon
            size="100"
            color="primary"
          >
            mdi mdi-card-account-details-outline
          </w-icon>
          <a-text bold level="mega">resume</a-text>
        </div>
        <div
          id="hobby"
          @click="makeWayGuys('portfolio')"
          :class="['wardrobe__item', '-portfolio',{'will-make-way-to-right':willMakeWay}]"
        >
          <w-icon
            size="100"
            color="primary"
          >
            mdi mdi-briefcase-outline
          </w-icon>
          <a-text bold level="mega">portfolio</a-text>
        </div>
        <div
          @click="makeWayGuys('about')"
          :class="['wardrobe__item', '-about',{'will-make-way-to-left':willMakeWay}]"
        >
          <w-icon
            size="100"
            color="primary"
          >
            mdi mdi-account-box-outline
          </w-icon>
          <a-text bold level="mega">who am I</a-text>
        </div>
        <div
          @click="makeWayGuys('contact')"
          :class="['wardrobe__item', '-contact',{'will-make-way-to-right':willMakeWay}]"
        >
          <w-icon
            size="45"
            color="primary"
          >
            mdi mdi-cellphone
          </w-icon>
          <a-text level="mega">Contact</a-text>
        </div>
      </div>
    </m-container>
  </p-default>
</template>

<script>
  import MNavigation from '@/components/Molecule/MNavigation'
  import MContainer from '@/components/Molecule/MContainer'
  import PDefault from '@/components/Page/PDefault'
  import OAboutInside from '@/components/Organism/OAboutInside'
  import AText from '@/components/Atom/AText'
  import { disable, enable } from 'cursor-flashlight'

  export default {
    name: 'PAbout',
    components: { PDefault, MContainer, MNavigation, AText, OAboutInside },
    data () {
      return {
        scrollClicked: false,
        willMakeWay: false,
        renderMeThis: 'loading'
      }
    },
    methods: {
      async makeWayGuys (event) {
        this.renderMeThis = event
        window.scrollTo(0, 0)
        if (!this.willMakeWay) {
          this.willMakeWay = true
        }
      },
      getWillMakeWay(localWillMakeWay){
        this.willMakeWay = localWillMakeWay
      }
    },
    mounted () {
      if (!this.scrollClicked) {
        disable()
      } else {
        enable({ size: '15vmax' })
      }
      this.renderMeThis=''
    }
  }
</script>

<style lang="scss">
  .-contact-selected{
    overflow: hidden;
    height: 100vh;
  }
  .wardrobe {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    height: 100%;
    width: 100%;

    & > * > * {
      transition: ease-in-out .5s !important;
    }
    & > div{
      transition: ease-in-out 1s !important;
    }
    @media only screen and (max-width: 750px) {
      height: 100vh;
      display: flex;
      flex-direction: column;
      *{
        font-size: 48px !important;
      }
      &__item {
        height: 500px;
      }
    }

    &__item {
      z-index: 3;
      position: relative;
      right: 0;

      &.will-make-way-to-right {
        position: relative;
        right: -100% !important;
      }

      &.will-make-way-to-left {
        position: relative;
        right: 100% !important;
      }

      display: flex;
      justify-content: center;
      grid-gap: 25px;
      align-items: center;
      flex-direction: column;

      &:hover {
        cursor: pointer;

        span, i {
          transform: scale(1.2);
        }
      }

      &.-resume {
        background: url('/src/assets/workhistory.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/workhistory.gif');
        }
      }

      &.-portfolio {
        background: url('/src/assets/hobbyworks.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/hobbyworks.gif');
        }
      }

      &.-about {
        background: url('/src/assets/sketchbook.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/sketchbook.gif');
        }
      }

      &.-contact {
        background: url('/src/assets/contact.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/contact.gif');
        }
      }
    }
  }
</style>
