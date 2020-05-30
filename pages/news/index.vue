<template>
  <div class="global__news__wrapper">
    <h2 class="global__news__title">Новини</h2>

    <div class="global__news__rest__container">
      <news-card
        v-for="news in allNews"
        :key="news.id"
        :news="news"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import NewsCard from '../../components/elements/NewsCard';

  export default {
    head () {
      return {
        title: 'Новини Гніздичівської АЗПСМ',
        titleTemplate: 'Новини Гніздичівської АЗПСМ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Новини які стосуються Гніздичівської АЗПСМ, а також корисна інформація для пацієнтів'
          }
        ]
      }
    },
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
      ])
    }
  }
</script>

<style scoped lang="scss">
  .global__news {
    &__wrapper {
      padding: 100px 60px 20px 60px;
      display: flex;
      flex-direction: column;
      min-height: 85vh;
    }

    &__title {
      color: #4496d4;
      font-size: 30pt;
      font-family: open_sanslight;
      line-height: 130%;
      text-align: center;
      padding: 15px;
    }

    &__rest__container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 25px;
    }
  }
</style>
