<template>
    <div :class="{'-collapsed':isMobile && menuCollapsed}" class="navbar a-non-selectable">
      <div class="navbar__left">
        <router-link
          @mouseenter="logoHover=true"
          @mouseleave="logoHover=false"
          to="/"
        >
          <a-text
            :color="logoHover?'red':'blue'"
            level="xx-large"
            bold
          >
            f
          </a-text>
          <a-text
            level="xx-large"
            :color="logoHover?'blue':'red'"
            bold
          >
            m
          </a-text>
        </router-link>
      </div>

      <div
        v-if="!isMobile"
        class="navbar__right"
      >
        <ul>
          <li>Currently</li>
          <li>Nothing</li>
          <li>Here</li>
        </ul>
      </div>
      <div
        @click="menuCollapsed=!menuCollapsed"
        v-else
      >
        <ul :class="['three-colored-children', '-menu',{'-clicked':menuCollapsed}]">
          <li>|</li>
          <li>|</li>
          <li>|</li>
        </ul>
      </div>
    </div>
    <div :class="['navbar__right__mobile',{'-collapsed':isMobile && menuCollapsed}]">
      <ul>
        <li>Currently</li>
        <li>Nothing</li>
        <li>Here</li>
      </ul>
    </div>
</template>

<script>

  import AText from '@/components/Atom/AText'

  export default {
    name: 'MNavigation',
    components: {  AText },
    data: () => {
      return {
        logoHover: false,
        isMobile: false,
        menuCollapsed: false
      }
    },
    mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 750
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/scss/variables';
  @import "src/scss/script-styles";

  .navbar {
    &.-collapsed{
      position: fixed;
      top: 0;
    }
    z-index: 102;
    background: $body-bg;
    height: 100px;
    width: 100vw;
    overflow: hidden !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 160px;
    @media only screen and (max-width: 750px) {
      padding: 10vw;
    }

    & > * {
      font-size: $font-xxl;
    }

    &__left {
      a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: all .5s;
      }
    }

    &__right {
      color: $primary-red;

      ul {
        display: flex;
        justify-content: space-around;

        li {
          padding: 15px;
          list-style: none;

          &:last-child {
            padding: 15px 0 15px 15px;
          }

          &:nth-child(1) {
              color: $primary-blue;
          }

          &:nth-child(2) {
            color: $primary-red;
          }

          &:nth-child(3) {
            color: $primary-orange;
          }

          a {
            text-decoration: none;
          }
        }
      }

      &__mobile {
        z-index: 101241234213;
        transition: 1s;
        position: fixed;
        top: -900px;
        left: 0;

        &.-collapsed {
          top: 100px;
          left: 0;
        }

        background-color: $body-bg;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90%;

        ul {
          li {
            list-style: none;
            padding: 25px;
            font-size: 50px;

            &:nth-child(1) {
                color: $primary-blue;
            }

            &:nth-child(2) {
              color: $primary-red;
            }

            &:nth-child(3) {
              color: $primary-orange;
            }
          }
        }
      }
    }

    .-menu {
      transition: 1s;
      list-style: none;
      display: flex;
      transform: rotate(90deg);
      li{
        transition: 1s;

        position: relative;
      }
      &.-clicked {
        li{
          &:nth-child(1) {
            position: absolute;
            top: 0;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            position: absolute;
            top: 0;
            transform: rotate(-45deg);
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            position: absolute;
            top: 0;
            z-index: -1;
          }
        }
      }
    }
  }

</style>
