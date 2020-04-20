<template>
  <div
    class="photo-banner px-3"
  >
    <img
      :src="src"
      :alt="alt"
      class="photo-banner__image"
    >
    <div
      class="photo-banner__title__wrapper"
    >
      <span
      class="photo-banner__title"
      >
        {{ title }}
      </span>
      <div v-if="showBtns">
        <v-btn
          depressed
          large
          color="primary"
          class="photo-banner__btn my-1"
          @click="showSchedule"
        >
          Графік роботи
        </v-btn>
      </div>
    </div>

    <schedule
      :isScheduleVisible="isScheduleVisible"
      @hideDialog="showSchedule"
    />
  </div>
</template>

<script>
  import Schedule from  './Schedule';

  export default {
    name: "PhotoBanner",
    components: {
      Schedule,
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: 'фото'
      },
      showBtns: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isScheduleVisible: false,
      }
    },
    methods: {
      showSchedule() {
        this.isScheduleVisible = !this.isScheduleVisible;
      }
    }
  }
</script>

<style scoped lang="scss">
  .photo-banner {
    position: relative;
    height: 507px;
    background-color: rgb(245, 249, 249);

    &__title__wrapper {
      position: absolute;
      bottom: 50px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        text-align: center;

        @media only screen and (max-width: 964px) {
          display: flex;
          flex-direction: column;
        }
      }
    }

    &__image {
      width: 100%;
      height: 507px;
      object-fit: cover;
      padding: 25px;
      filter: brightness(65%);
    }

    &__title {
      padding: 10px 20px 10px 20px;
      text-align: center;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
      letter-spacing: 2px !important;
      font-size: 50px;
      line-height: 110% !important;
      color: #ffffff !important;

      @media only screen and (max-width: 964px) {
        font-size: 35px;
      }
    }
  }
</style>
