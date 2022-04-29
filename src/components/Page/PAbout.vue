<template>
  <p-default :class="['non-selectable',{'scroll-clicked':scrollClicked}]">
    <m-navigation/>
    <m-container
      class="pt-100"
      :class="{'scroll-clicked':scrollClicked}"
    >
      <div class="wardrobe">
        <m-about-inside
          :getWillMakeWay="getWillMakeWay"
          :whatToRender="renderMeThis"
        />
        <div
          id="work"
          @click="makeWayGuys('work')"
          :class="['wardrobe__item', '-work',{'will-make-way-to-left':willMakeWay}]"
        >
          <w-icon
            size="45"
            color="primary"
          >
            mdi mdi-briefcase
          </w-icon>
          <a-text level="mega">Work</a-text>
        </div>
        <div
          id="hobby"
          @click="makeWayGuys('hobby')"
          :class="['wardrobe__item', '-hobby',{'will-make-way-to-right':willMakeWay}]"
        >
          <w-icon
            size="45"
            color="primary"
          >
            mdi mdi-gamepad-down
          </w-icon>
          <a-text level="mega">Hobby Projects</a-text>
        </div>
        <div
          @click="makeWayGuys('sketch')"
          :class="['wardrobe__item', '-sketch',{'will-make-way-to-left':willMakeWay}]"
        >
          <w-icon
            size="45"
            color="primary"
          >
            mdi mdi-book
          </w-icon>
          <a-text level="mega">Sketch Book</a-text>
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
  import MAboutInside from '@/components/Organism/MAboutInside'
  import AText from '@/components/Atom/AText'
  import { disable, enable } from 'cursor-flashlight'

  export default {
    name: 'PAbout',
    components: { PDefault, MContainer, MNavigation, AText, MAboutInside },
    data () {
      return {
        scrollClicked: false,
        willMakeWay: false,
        renderMeThis: ''
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
    }
  }
</script>

<style lang="scss">

  .wardrobe {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
    height: 100%;
    width: 100%;

    & > div, & > * > * {
      transition: ease-in-out 1s !important;
    }

    @media only screen and (max-width: 750px) {
      display: flex;
      flex-direction: column;
      height: auto;
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

        p, i {
          transform: scale(1.5);
        }
      }

      &.-work {
        background: url('/src/assets/workhistory.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/workhistory.gif');
        }
      }

      &.-hobby {
        background: url('/src/assets/hobbyworks.gif');
        background-size: cover;

        &:hover {
          background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.81), rgba(66, 16, 54, 0.36)),
          url('/src/assets/hobbyworks.gif');
        }
      }

      &.-sketch {
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
