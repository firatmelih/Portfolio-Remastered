<template>
  <div class="o-vscode-view">
    <div class="o-vscode-view__folder-area">
      <div>
        <span :class="{'selected':collapseAll}" @click="collapseAll=!collapseAll">
          <a-text level="normal" >
            <w-icon v-if="!collapseAll">mdi mdi-menu-down</w-icon>
            <w-icon v-else>mdi mdi-menu-right</w-icon>
            <w-icon v-if="!collapseAll">mdi mdi-folder-open-outline</w-icon>
            <w-icon v-else>mdi mdi-folder-outline</w-icon>
            firatmelih</a-text>
        </span>
        <template v-if="!collapseAll">
          <span @click="throwNotAllowed">
          <a-text level="normal" >
            <w-icon>mdi mdi-menu-right</w-icon>
            <w-icon style="color: #9CDCFE">mdi mdi-folder-outline</w-icon>
            topsecret</a-text>
        </span>
          <span  :class="{'selected':!componentsCollapsed}" @click="componentsCollapsed=!componentsCollapsed">
          <a-text level="normal" >
            <w-icon v-if="componentsCollapsed">mdi mdi-menu-down</w-icon>
            <w-icon v-else>mdi mdi-menu-right</w-icon>
            <w-icon v-if="componentsCollapsed" style="color: #b5cea8">mdi mdi-folder-open-outline</w-icon>
            <w-icon v-else style="color: #b5cea8">mdi mdi-folder-outline</w-icon>
            components</a-text>
        </span>
          <span @click="throwNotAllowed" v-if="componentsCollapsed" style="padding-left: 42px">
          <a-text level="normal" >
            <w-icon style="color: skyblue">mdi mdi-react</w-icon>
            SubmitButton.jsx</a-text>
        </span>
          <span v-if="componentsCollapsed" :class="{'selected':componentsCollapsed}" style="padding-left: 42px">
          <a-text level="normal" >
            <w-icon style="color: skyblue">mdi mdi-react</w-icon>
            WhoAmI.jsx</a-text>
        </span>
          <span v-if="componentsCollapsed" @click="throwNotAllowed" style=" cursor:pointer; padding-left: 42px">
          <a-text level="normal" >
            <w-icon style="color: skyblue">mdi mdi-react</w-icon>
            WhiteBox.jsx</a-text>
        </span>
        </template>
      </div>
    </div>
    <div class="o-vscode-view__editor-area">
      <div>
        <a-text class="js-special" level="medium">
          import
        </a-text>
        <a-text class="js-parameter" level="medium">
          React
        </a-text>
        <a-text class="js-special" level="medium">
          from
        </a-text>
        <a-text class="js-string" level="medium">
          "react"
        </a-text>
      </div>
      <div>
        <AVScodeText input="const"/>
        <AVScodeText input="WhoAmI"/>
        <AVScodeText input="="/>
        <AVScodeText input="()"/>
        <AVScodeText isConst input="=>"/>
        <AVScodeText symbol input="{"/>
      </div>
      <div>
        <div>
          <AVScodeText input="const"/>
          <AVScodeText variable input="name"/>
          <AVScodeText symbol input="="/>
          <AVScodeText string input='"Melih"'/>
        </div>
        <div>
          <AVScodeText input="const"/>
          <AVScodeText variable input="surname"/>
          <AVScodeText symbol input="="/>
          <AVScodeText string input='"Firat"'/>
        </div>
        <div>
          <AVScodeText input="const"/>
          <AVScodeText variable input="birthPlace"/>
          <AVScodeText symbol input="="/>
          <AVScodeText string input='"Istanbul"'/>
        </div>
      </div>
      <div style="padding-left: 30px">
        <AVScodeText input='return'/>
        <AVScodeText symbol input='('/>
      </div>
      <div style="padding-left: 90px">
        <AVScodeText style="padding: 0" symbol input='<'/>
        <AVScodeText style="padding: 0" isConst input='div'/>
        <AVScodeText style="padding: 0" symbol input='>'/>
      </div>
      <div style="padding-left: 150px">
        <AVScodeText style="padding: 0" is-const input='{'/>
        <AVScodeText style="padding: 0" string input='`Hey guys, I am'/>
        <AVScodeText style="padding: 0" is-const input='${'/>
        <AVScodeText style="padding: 0" variable input='name'/>
        <AVScodeText style="padding: 0" is-const input='}'/>
        <AVScodeText style="padding: 0" string input='. I am from '/>
        <AVScodeText style="padding: 0" is-const input='${'/>
        <AVScodeText style="padding: 0" variable input='birthPlace'/>
        <AVScodeText style="padding: 0" is-const input='}'/>
        <AVScodeText style="padding: 0" string input='. I am a 2 years of Frontend Developer.`'/>
        <AVScodeText style="padding: 0" is-const input='}'/>
      </div>
      <div style="padding-left: 90px">
        <AVScodeText style="padding: 0" symbol input='</'/>
        <AVScodeText style="padding: 0" isConst input='div'/>
        <AVScodeText style="padding: 0" symbol input='>'/>
      </div>
      <div style="padding-left: 30px">
        <AVScodeText symbol input=')'/>
      </div>
      <AVScodeText symbol input='}'/>
      <div>
        <AVScodeText input='export'/>
        <AVScodeText input='default'/>
        <AVScodeText input='WhoAmI'/>
      </div>

      <div>
        <AVScodeText input="const"/>
        <AVScodeText variable input="cheesySentences"/>
        <AVScodeText symbol input="="/>
        <AVScodeText symbol input="["/>
        <AVScodeText string input='"Programming has always been passion to me."'/>
        <AVScodeText symbol input=","/>
        <AVScodeText string input='"I love the life of 0s and 1s."'/>
        <AVScodeText symbol input=","/>
        <AVScodeText string input='"The more I learn I understand less I know."'/>
        <AVScodeText symbol input="]"/>
      </div>
      <div>
        <AVScodeText input="const"/>
        <AVScodeText variable input="about"/>
        <AVScodeText symbol input="="/>
        <AVScodeText string input='"Creative, cheerful, questioning extrovert person who loves writing escapist short stories, horror stories with twists.
      Definitely a cat person, but also loves dogs. Establishes efficient plans with foundations. Hates doing nothing, unproductive days and especially screen glare from sunlight. "'/>
        <a-type-writer style="font-size: 16px" :onlyCursor="true" will-type=" "/>
      </div>
    </div>
  </div>
</template>

<script>
  import AVScodeText from '@/components/Atom/AVScodeText'
  import AText from '@/components/Atom/AText'
  import ATypeWriter from '@/components/Atom/ATypeWriter'

  export default {
    name: 'OVSCodeView',
    components:{AVScodeText, AText, ATypeWriter},
    data(){
      return{
        componentsCollapsed:true,
        collapseAll:false
      }
    },
    methods:{
      throwNotAllowed(){
        alert('I Thought you are here for viewing who am I')
      },
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: javaScript;
    src: url('/src/font/CONSOLA.TTF');
  }

  @import '/src/scss/variables';
  .o-vscode-view{
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    display: flex;
  *{
    font-family: "javaScript",serif !important;
  }
  text-align: start;
  width: 100%;
  height: 100%;
  background: $js-bg;
  @media only screen and (max-width: 750px) {
    width: 100%;
  }

    &__folder-area{
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      @media only screen and (max-width: 750px) {
        display: none;
      }
      min-width: 250px;
      border-right: 10px solid #0c0c0c;

      div{
        display: flex;
        flex-direction: column;
        span{
          cursor: pointer;
          display: flex;
          padding: 1px;
          &:active{
            background: $primary-red !important;
          }
          &.selected{
            background: $primary-orange;
          }
          i{
            padding-right: 5px;
          }
        }
      }
    }
    &__editor-area{
      @media only screen and (max-width: 750px) {
        overflow: hidden;
      }
    }
  }
</style>
