<template>
  <div>
    <v-app-bar
      color="white"
      elevate-on-scroll
      fixed
      height="88px"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="showDrawer"
      />
      <img
        class="navbar__logo"
        src="~assets/logo.png"
      >
      <v-spacer></v-spacer>

      <div
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <header-option
          v-for="(item, i) in items"
          :key="i"
          :item="item"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn depressed large color="primary">032-48-715</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  import HeaderOption from './elements/HeaderOption';

  export default {
    name: "Header",
    components: {
      HeaderOption,
    },
    data() {
      return {
        items: [
          {
            title: 'Головна',
            link: '/',
            options: []
          },
          {
            title: 'Персонал',
            link: '/staff',
            options: []
          },
          {
            title: 'Послуги',
            link: '/services',
            options: []
          },
          {
            title: 'Новини',
            link: '/news',
            options: []
          },
          {
            title: 'Контакти',
            link: '/contacts',
            options: []
          },
        ],
        dataInfo: [
          'смт.Гніздичів','вул.Грушевського 112', '(032)-48-018', 'hnyzclinic@gmail.com'
        ]
      }
    },
    methods: {
      showDrawer() {
        this.$emit('showDrawer')
      }
    }
  }
</script>

<style scoped>
  .navbar__logo {
    max-height: 100%;
  }
</style>
