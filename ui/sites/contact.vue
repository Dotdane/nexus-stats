<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <ui-header>
        <h1>Hey {{ user }}!</h1>
        <p>Wanna talk with us, or just feeling lonely? Hit us up on one of the channels below!</p>

        <a href="https://discord.gg/TCxe6P4" target="_blank" class="comm discord">
          <img src="/img/contact/discord.svg" alt="Discord">
          <span>Discord</span>
        </a>
        <a href="mailto:contact@nexus-stats.com?Subject=Regarding%20NexusHub" class="comm mail">
          <img src="/img/contact/mail.svg" alt="Mail">
          <span>Good ol' Mail</span>
        </a>
      </ui-header>
      <div class="container">
        <section>
          <img src="/img/ui/info.svg" alt="Information about Discord" class="ico-h-24">
          <span>Please note: Discord is the superior <s>siege engine</s> way to talk to us.</span>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'ui-header': uiheader
  },

  computed: {
    user () {
      if (this.$store.state.user) {
        return this.$store.state.user.name
      } else {
        return 'there'
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ header .container {
  text-align: center;
  padding-bottom: 0;
  padding-top: 200px;

  h1 {
    font-size: 2.6em;
  }
  p {
    font-size: 1.1em;
    margin: auto;
  }
}

.comm {
  @include ie;
  @include field;
  position: relative;
  top: 40px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  padding: 20px;
  margin-top: 60px;
  width: 100px;
  height: 100px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
  &:before {
    border-radius: 0;
  }
  img {
    height: 50px;
  }
  span {
    display: block;
    color: white;
  }
}
.discord {
  background: #7289DA;

  &:hover {
    background: #7289DA;
  }
}
.mail {
  top: 35px;

  img {
    height: 40px;
  }
}

section {
  text-align: center;
  margin-top: 40px;
  color: white;
  opacity: 0.5;
}
</style>
