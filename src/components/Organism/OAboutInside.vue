<template>

  <m-about-inside-container
    class="-grid"
    :close-the-gates="closeTheGates"
    v-if="whatToRender==='resume'"
    @mouseout="hoveredWorkId=null"
  >
    <template
      :key="data.id"
      v-for="data in resumeData.work"
    >
      <div
        class="-grid__card"
        @mouseenter="hoveredWorkId=data.id"
        v-if="hoveredWorkId!==data.id"
      >
        <a-text
          bold
          color="orange"
          level="large"
        >{{ data.company }}
        </a-text>
        <a-text color="blue" level="small">{{ data.location }}</a-text>
        <a-text color="red">{{ data.position }}</a-text>
        <a-text color="orange">{{ data.workType }}</a-text>
        <span>
          <a-text level="medium">{{ data.startDate.year }} {{ data.startDate.month }}</a-text>
          <a-text level="medium">-</a-text>
          <a-text level="medium">{{ data.endDate.year }} {{ data.endDate.month }}</a-text>
        </span>
      </div>
      <a
        :href="data.companyLink"
        target="_blank"
        class="-grid__card__hover center-me"
        v-else
      >
        {{ data.about }}
      </a>
    </template>
  </m-about-inside-container>

  <m-about-inside-container
    class="-grid"
    :close-the-gates="closeTheGates"
    v-else-if="whatToRender==='portfolio'"
  >
    <template
      :key="data.id"
      v-for="data in portfolioData"
    >
      <div
        class="-grid__card"
        v-if="data.description"
      >
        <a-text
          bold
          level="large"
        >{{ formatAsTitle(data.name) }}
        </a-text>
        <a-text style="width: 75%" level="medium">{{ data.description }}</a-text>
      </div>
    </template>
  </m-about-inside-container>

  <m-about-inside-container
    class="center-me"
    :close-the-gates="closeTheGates"
    v-else-if="whatToRender==='about'"
  >
  <o-v-s-code-view/>
  </m-about-inside-container>

  <m-about-inside-container
    :close-the-gates="closeTheGates"
    v-else-if="whatToRender==='contact'"
  >
    <m-contact-form/>
  </m-about-inside-container>

</template>

<script>
  import aboutData from '../../data/about_data.json'
  import AText from '@/components/Atom/AText'
  import MAboutInsideContainer from '@/components/Molecule/MAboutInsideContainer'
  import OVSCodeView from '@/components/Organism/OVSCodeView'
  import MContactForm from '@/components/Molecule/MContactForm'
  export default {
    name: 'OAboutInside',
    components: { OVSCodeView, MAboutInsideContainer, AText, MContactForm },

    props: {
      whatToRender: {
        type: String,
        required: true
      },
      getWillMakeWay: {
        type: Function
      }
    },
    data () {
      return {
        resumeData: aboutData,
        hoveredWorkId: null,
        portfolioData: []
      }
    },
    methods: {
      closeTheGates () {
        this.getWillMakeWay(false)
      },
      formatAsTitle(formatMe){
       return formatMe.replaceAll('_',' ').replaceAll('-',(' ')).replaceAll(/([A-Z])/g, ' $1').trim()
      }
    },
    async mounted () {
      try {
        const data = await fetch('https://api.github.com/users/firatmelih/repos')
        this.portfolioData = await data.json()
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>
