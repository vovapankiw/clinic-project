<template>
  <div
    class="news__wrapper px-3"
  >
    <div class="news__title py-4 display-1">
      <h2>Новини</h2>
    </div>
    <div class="news-card__container">
      <news-card
        v-for="news in lastNews"
        :key="news.id"
        :news="news"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import NewsCard from './elements/NewsCard';

  export default {
    name: "News",
    components: {
      NewsCard,
    },
    data() {
      return { }
    },
    computed: {
      ...mapGetters([
        'allNews',
      ]),

      /**
       * Showing last news according the order in db
       */
      lastNews() {
        return this.allNews.slice(-3);
      }
    }
  }
</script>

<style scoped lang="scss">
  .news__wrappers {
    padding: 25px 15px;

    @media only screen and (max-width: 350px) {
      padding: 50px 15px;
    }
  }
  .news__title {
    color: #4496d4;
    font-size: 30pt;
    font-family: open_sanslight;
    line-height: 130%;
    text-align: center;
    padding: 15px;
  }

  .news-card__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
