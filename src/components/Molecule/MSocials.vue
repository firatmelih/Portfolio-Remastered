<template>
  <div class="m-socials">
    <a
      target="_blank"
      href="https://twitter.com/akam512"
    >
      <a-text>
        <w-icon
          size="45"
          color="primary"
        >
          mdi mdi-twitter
        </w-icon>
      </a-text>
    </a>
    <a
      target="_blank"
      href="https://github.com/firatmelih"
    >
      <a-text>
        <w-icon
          size="45"
          color="primary"
        >
          mdi mdi-github
        </w-icon>
      </a-text>
    </a>
    <a
      target="_blank"
      href="https://linkedin.com/in/firatmelih"
    >
      <a-text>
        <w-icon
          size="45"
          color="primary"
        >
          mdi mdi-linkedin
        </w-icon>
      </a-text>
    </a>
  </div>
</template>

<script>
  import AText from '@/components/Atom/AText'

  export default {
    name: 'MSocials',
    components: { AText }
  }
</script>

<style lang="scss">
  .m-socials {
    display: flex;
    justify-content: center;
    a {
      padding: 0 25px;
    }
  }
</style>
