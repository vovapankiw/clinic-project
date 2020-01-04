<template>
  <div
    class="photo-banner"
  >
    <img
      src="~assets/header.jpg"
      alt="гнізідичівська поліклініка"
      class="photo-banner__image"
    >
    <div
      class="photo-banner__title__wrapper"
    >
      <div>
        <v-btn depressed large color="primary" min-width="192px" class="photo-banner__btn">038-48-715</v-btn>
        <v-btn depressed large color="accent" class="photo-banner__btn">Зареєструватися</v-btn>
      </div>
      <span
      class="photo-banner__title"
      >
        Гніздичівська АЗПСМ
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PhotoBanner"
  }
</script>

<style scoped lang="scss">
  .photo-banner {
    position: relative;
    height: 507px;

    &__title__wrapper {
      position: absolute;
      bottom: 50px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__image {
      width: 100%;
      height: 507px;
      object-fit: cover;
      filter: brightness(65%);
    }

    &__title {
      padding: 10px;
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
