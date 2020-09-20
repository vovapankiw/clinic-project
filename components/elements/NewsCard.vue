<template>
  <v-card
    class="mx-auto my-5"
    :max-width="size === 'normal' ? 400 : 200"
    :max-height="size === 'normal' ? 450 : 210"
  >
    <img
      :class="[size === 'normal' ? 'news_card__img-normal' : 'news_card__img-mini', 'news_card__img']"
      :src="require(`~/assets/news/${news.img}`)"
      :alt="news.title"
    >
    <v-card-title
      :class="[size === 'normal' ? 'news_card__title-normal' : 'news_card__title-mini', 'news_card__title']"
    >
      {{ news.title }}
    </v-card-title>

    <template v-if="size === 'normal'">
      <v-card-subtitle class="pb-0">
        {{ news.date }}
      </v-card-subtitle>

      <v-card-text class="text--primary pb-0">
        <div class="news_card__text">
          {{ news.text }}
        </div>
      </v-card-text>
    </template>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="openNews(news.id)"
      >
        Прочитати
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewsGroup',
  props: {
    news: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  methods: {
    openNews(id) {
      this.$router.push({
        path: `/news/${id}`,
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .news_card__img {
    object-fit: cover;
    filter: brightness(55%);

    &-normal {
       width: 100%;
       height: 250px;
       margin-bottom: 2rem;
     }

     &-mini {
       width: 100%;
       height: 150px;
      }
  }

  .news_card__title {
    position: absolute;
    color: white;
    word-break: break-word;

    &-normal {
      top: 40%;
    }

    &-mini {
      top: 30%;
    }
  }

  .news_card__text {
    min-height: 70px;
  }
</style>
