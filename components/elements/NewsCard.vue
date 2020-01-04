<template>
  <v-card
    class="mx-auto my-5"
    max-width="400"
    height="400"
  >
    <img
      class="news_card__img"
      :src="require(`~/assets/${news.img}.jpg`)"
    >
      <v-card-title class="news_card__title">{{ news.title }}</v-card-title>

    <v-card-subtitle class="pb-0">{{ news.date }}</v-card-subtitle>

    <v-card-text class="text--primary pb-0">
      <div>{{ news.text }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Прочитати
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "NewsGroup",
    props: {
      news: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .news_card__img {
    width: 100%;
    height: 250px;
    margin-bottom: 2rem;
    object-fit: cover;
    filter: brightness(55%);
  }

  .news_card__title {
    position: absolute;
    top: 45%;
    color: white;
  }
</style>
