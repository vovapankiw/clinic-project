<template>
  <div
    class="news__wrapper"
  >
    <div class="news__title py-4 display-1">
      <h2>Новини</h2>
    </div>
    <div class="news-card__container">
      <news-card
        v-for="news in newsScope"
        :key="news.id"
        :news="news"
      />
    </div>
  </div>
</template>

<script>
  import NewsCard from './elements/NewsCard';

  export default {
    name: "News",
    components: {
      NewsCard,
    },
    data() {
      return {
        newsScope: [
          {
            id: 1,
            title: 'Доступні ліки',
            text: 'Hello, my name is Voloday, but my friends call me Vova. I am from the western part of Ukraine',
            img: 'news_1',
            date: '11.12.2019'
          },
          {
            id: 2,
            title: 'Апарат для аналізу крові',
            text: 'Hello, my name is Voloday, but my friends call me Vova. I am from the western part of Ukraine',
            img: 'news_2',
            date: '10.10.2019'
          },
          {
            id: 3,
            title: 'Обережно грип!',
            text: 'Hello, my name is Voloday, but my friends call me Vova. I am from the western part of Ukraine',
            img: 'news_3',
            date: '20.12.2019',
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .news__wrapper {
    padding: 50px 15px;
  }
  .news__title {
    text-align: center;
  }

  .news-card__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
