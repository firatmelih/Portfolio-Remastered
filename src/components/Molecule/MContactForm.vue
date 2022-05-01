<template>
<div class="m-contact-form">

  <div class="m-contact-form__container">
    <a-text bold level="xx-large">
      Contact Me
    </a-text>
    <label>Name</label>
    <input type="text"/>
    <label>Email</label>
    <input type="email"/>
    <label>Message</label>
    <textarea/>
    <button>Submit</button>
  </div>
  <div class="m-contact-form__image-area">
    <div class="m-contact-form__image-area__center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39878.58128846284!2d11.933876054982685!3d51.340346497950094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6890b8f4bfc45%3A0x1c5843ee9a869eba!2sMerseburg!5e0!3m2!1sen!2sde!4v1651277370793!5m2!1sen!2sde" width="600" height="450" style="border:0; z-index: 2; position: inherit;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div>
  </div>
</div>
</template>

<script>
  import AText from '@/components/Atom/AText'
  export default {
    name: 'MContactForm',
    components: { AText }
  }
</script>

<style lang="scss">
  @import '/src/scss/variables';
.m-contact-form{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media only screen and (max-width: 1360px) {
    border-radius: 15px;
    padding-top: 100px;
    height: 700px;
  }
  &__container{
    position: relative;
    background-color: #5511ee;
    background-image: linear-gradient(43deg, #5511ee 0%, #603660 46%, #1c1c1a 100%);
    border-radius: 15px 0 0 15px;
    @media only screen and (max-width: 1360px) {
      border-radius: 15px;
      height: 700px;
    }
    display: flex;
    height: 700px;
    width: 500px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    input{
      font-size: 16px;
      text-align: center;
      border: 1px solid white;
      background: $white;
      width: 75%;
      height: 8%;
      border-radius: 15px;
    }
    textarea{
      padding-top: 25px;
      text-align: center;
      font-size: 16px;
      border: 1px solid white;
      background: $white;
      width: 75%;
      height: 30%;
      border-radius: 15px;
    }
    button{
      cursor: pointer;
      background: $body-bg;
      border:0;
      color: white;
      width: 50%;
      height: 5%;
      border-radius: 10px;
    }
  }
  &__image-area{
    @media only screen and (max-width: 1360px) {
      display: none;
    }
    background: $body-bg;
    border-radius: 0 15px 15px 0;
    overflow: hidden !important;
    height: 700px;
    &__center{
      display: flex;
      justify-items: center;
      align-items: center;
      height: 1000px;
      width: 700px;
      border-radius: 900px 15px 15px 150px;
      background:transparent;
      z-index: 9;
    }
    img{
      position: absolute;
      top: 50px;
      right: 25%;
      transform: rotateY(180deg) rotateZ(45deg);
      z-index: 8;
    }
    iframe{
      border-radius: 900px 15px 15px 150px;
      z-index: 0;
      height: 1000px;
      width: 700px;
      position: relative;
      top: 0;
      right: 0;
    }
  }
}
</style>
