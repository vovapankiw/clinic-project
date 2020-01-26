<template>
  <v-footer
    dark
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in items"
        :key="link.title"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
      <v-col
        class="lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ dataInfo }}
      </v-col>
      <v-col
        class="lighten-2 text-center white--text"
        cols="12"
      >
        &copy; {{ new Date().getFullYear() }} — <strong>Гніздичівська АЗПСМ</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        items: [
          { title: 'Головна', icon: 'dashboard' },
          { title: 'Персонал', icon: 'question_answer' },
          { title: 'Послуги', icon: 'question_answer' },
          { title: 'Новини', icon: 'question_answer' },
          { title: 'Контакти', icon: 'question_answer' },
        ],
        dataInfo: 'Льівська обл., Жидачівський р-н., смт.Гніздичів, вул.Грушевського 112'
      }
    }
  }
</script>

<style scoped>

</style>
