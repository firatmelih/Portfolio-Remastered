<template>
  <div
    class="work-inside"
    v-if="whatToRender==='work'"
    @mouseout="hoveredWorkId=null"
  >
    <div @click="closeTheGates" class="button-close">
      <a-text>
        X
      </a-text>
    </div>
    <template
      :key="data.id"
      v-for="data in workData.work"
    >
      <div
        class="work-inside__card"
        @mouseenter="hoveredWorkId=data.id"
        v-if="hoveredWorkId!==data.id"
      >
        <a-text
          bold
          level="large"
        >{{ data.company }}
        </a-text>
        <a-text level="small">{{data.location}}</a-text>
        <a-text>{{ data.position }}</a-text>
        <a-text>{{ data.workType }}</a-text>
        <span>
          <a-text level="medium">{{ data.startDate.year }} {{ data.startDate.month }}</a-text>
          <a-text level="medium">-</a-text>
          <a-text level="medium">{{ data.endDate.year }} {{ data.endDate.month }}</a-text>
        </span>
      </div>
      <a
        :href="data.companyLink"
        target="_blank"
        class="work-inside__card__hover center-me"
        v-else
      >
        {{ data.about }}
      </a>
    </template>
  </div>
  <div
    class="work-inside"
    v-else-if="whatToRender==='hobby'"
  >
    <div @click="closeTheGates" class="button-close">
      <a-text>
        X
      </a-text>
    </div>
    <template
      :key="data.id"
      v-for="data in hobbyData"
    >
      <div
        class="work-inside__card"
        v-if="data.description"
      >
        <a-text
          bold
          level="large"
        >{{ data.name }}
        </a-text>
        <a-text  level="small">{{data.description}}</a-text>
      </div>
    </template>

  </div>
  <div
    class="sketch-inside"
    v-else-if="whatToRender==='sketch'"
  >
    <div @click="closeTheGates" class="button-close">
      <a-text>
        X
      </a-text>
    </div>
    <div
      class="sketch-inside__card"
    >
      <a-text
        bold
        level="large"
      >MAYBE ONE DAY
      </a-text>
    </div>
  </div>


  <div
    class="contact-inside"
    v-else
  >
    <div @click="closeTheGates" class="button-close">
      <a-text>
        X
      </a-text>
    </div>
  </div>
</template>

<script>
  import aboutData from '../../data/about_data.json'
  import AText from '@/components/Atom/AText'

  export default {
    name: 'MAboutInside',
    components: { AText },

    props: {
      whatToRender: {
        type: String,
        required: true,
      },
      getWillMakeWay:{
        type:Function
      }
    },
    data () {
      return {
        workData: aboutData,
        hoveredWorkId: null,
        hobbyData: []
      }
    },
    methods:{
      closeTheGates(){
        this.getWillMakeWay(false);
      }
    },
    async mounted () {
      try {
        const data = await fetch('https://api.github.com/users/firatmelih/repos')
        this.hobbyData = await data.json()
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

<style lang="scss">
  @import '/src/scss/variables';

  .work-inside,.hobby-inside {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    @media only screen and (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
    &__card {
      width: 100%;
      height: 300px;
      border: 1px solid $white;
      justify-content: space-around;
      align-items: center;
      display: flex;
      flex-direction: column;
      span {
        display: flex;
        p {
          padding: 5px;
        }
      }

      &__hover {
        width: 100%;
        height: 300px;
        background: $body-bg;
        border: 1px solid $primary-red;
        color: $primary-blue;
        padding: 15px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  .hobby-inside,.contact-inside,.work-inside,.sketch-inside{
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 50px;
    z-index: 1;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    position: absolute;
  }

  .contact-inside,.sketch-inside{
    display: flex;
    justify-items: center;
  }
</style>
