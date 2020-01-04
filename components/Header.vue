<template>
  <div>
    <v-app-bar
      color="white"
      elevate-on-scroll
      fixed
      height="88px"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" />
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
        drawer: null,
        items: [
          { title: 'Головна', icon: 'dashboard' },
          { title: 'Персонал', icon: 'question_answer' },
          { title: 'Послуги', icon: 'question_answer' },
          { title: 'Новини', icon: 'question_answer' },
          { title: 'Контакти', icon: 'question_answer' },
        ],
        dataInfo: [
          'смт.Гніздичів','вул.Грушевського 112', '(032)-48-018', 'hnyzclinic@gmail.com'
        ]
      }
    }
  }
</script>

<style scoped>
  .navbar__logo {
    max-height: 100%;
  }
</style>
