<template>
  <v-footer
    dark
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="item in items"
        :key="item.title"
        color="white"
        text
        rounded
        class="my-2"
        :to="item.link"
        :nuxt="true"
      >
        {{ item.title }}
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
  name: 'Footer',
  data() {
    return {
      items: [
        {
          title: 'Головна',
          icon: 'dashboard',
          link: '/',
        },
        {
          title: 'Персонал',
          icon: 'question_answer',
          link: '/staff',
        },
        {
          title: 'Послуги',
          icon: 'question_answer',
          link: '/services',
        },
        {
          title: 'Новини',
          icon: 'question_answer',
          link: '/news',
        },
        {
          title: 'Контакти',
          icon: 'question_answer',
          link: '/contacts',
        },
      ],
      dataInfo: 'Льівська обл., Жидачівський р-н., смт.Гніздичів, вул.Грушевського 112',
    };
  },
};
</script>

<style scoped>

</style>
