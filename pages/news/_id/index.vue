<template>
  <div class="news-post__wrapper">
    <div
      class="news-post__main-post"
    >
      <h2
        class="news-post__main-post__title"
      >{{ chosenNews.title }}</h2>
      <div
        class="news-post__main-post__container"
      >
        <img
          :src="require(`~/assets/news/${chosenNews.img}`)"
          :alt="chosenNews.title"
          class="news-post__main-post__img"
        >
      </div>
      <div
        class="news-post__main-post__text"
      >{{ chosenNews.fullText }}</div>
    </div>
    <div
      class="news-post__random-news"
    >
      <news-card
        v-for="news in randomNews"
        :key="news.id"
        :news="news"
        :size="cardView"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import NewsCard from '../../../components/elements/NewsCard';

  export default {
    name: "index.vue",
    components: {
      NewsCard
    },
    computed: {
      ...mapGetters([
        'allNews',
      ]),

      chosenNews() {
        return this.allNews.filter(({id}) => id === this.$route.params.id)[0]
      },

      randomNews() {
        return this.allNews.filter(({id}) => id !== this.$route.params.id).slice(0, 3);
      },

      cardView() {
        return this.$vuetify.breakpoint.smAndDown ? 'normal' : 'mini'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-post {
    &__wrapper {
      padding: 100px 60px 20px 60px;
      display: flex;

      @media only screen and (max-width: 960px) {
        display: block;
        padding-bottom: 2rem;
      }
    }

    &__main-post {
      flex: 1 80%;
      padding: 0 3rem;

      @media only screen and (max-width: 960px) {
        padding: 2rem 0;
      }

      &__title {
        text-align: center;
        font-size: 2.5rem;
        padding-bottom: 25px;

        @media only screen and (max-width: 960px) {
          font-size: 1.5rem;
        }
      }

      &__container {
        display: flex;
        justify-content: center;
      }

      &__img {
        height: 100%;
        width: 60%;
        padding-bottom: 1.5rem;

        @media only screen and (max-width: 960px) {
          width: 100%;
        }
      }

      &__text {
        text-align: justify;
      }
    }

    &__random-news {
      flex: 1 20%;
    }
  }
</style>
