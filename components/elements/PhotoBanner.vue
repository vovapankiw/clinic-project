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
      class="photo-banner__title"
    >
      <div>
        <v-btn depressed large color="primary">038-48-715</v-btn>
        <v-btn depressed large color="accent">Зареєструватися</v-btn>
      </div>
      <span>Гніздичівська АЗПСМ</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PhotoBanner"
  }
</script>

<style scoped>
  .photo-banner {
    position: relative;
    height: 507px;
  }
  .photo-banner__title {
    position: absolute;
    bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .photo-banner__title span {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3) !important;
    letter-spacing: 2px !important;
    font-size: 50px !important;
    line-height: 110% !important;
    color: #ffffff !important;
  }

  .photo-banner__image{
    width: 100%;
    height: 507px;
    object-fit: fill;
    filter: brightness(65%);
  }
</style>
