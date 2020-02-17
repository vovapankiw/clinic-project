<template>
  <div
    class="home__wrapper"
  >
    <photo-banner
      :title="'Гніздичівська АЗПСМ'"
      :src="require(`~/assets/header.jpg`)"
      :alt="'гнізідичівська поліклініка'"
      :show-btns="true"
    />
    <div
      class="home__quotes"
    >
      <blockquote
        class="groucho"
      >
        Дев’ять десятих нашого щастя залежить від здоров’я.
        <footer>Артур Шопенгауер</footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
  import PhotoBanner from '../components/elements/PhotoBanner'

  export default {
    name: "Home",
    components: {
      PhotoBanner,
    }
  }
</script>

<style lang="scss" scoped>
  /* Some generic stuff. Don't worry staff it */
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700),
  url(https://fonts.googleapis.com/css?family=Sanchez:400italic,400),
  url(https://fonts.googleapis.com/css?family=Roboto:100);

  .home__wrapper {
    background: hsl(50, 5, 97);
    color: cadetblue;
  }
  .home__quotes{
    height: 20%;
    margin: 10px 25px;
  }

  /* Some vars */
  $background-color: hsl(50, 5, 97);
  $black: hsl(200, 40, 10);
  $white: $background-color;
  $base-font-size: 2.4em;
  $base-line-height: 1.5em;

  .groucho {
    position: relative;
    font-family: 'Sanchez', serif;
    font-size: $base-font-size;
    line-height: $base-line-height;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;

    @media only screen and (max-width: 1264px) {
      font-size: 1.8em;
    }

    @media only screen and (max-width: 964px) {
      overflow-wrap: break-word;
      font-size: 1.6em;
    }

    footer {
      font-family: 'Noto Sans', sans-serif;
      font-size: 0.6em;
      font-weight: 700;

      color: cadetblue;
      align-self: flex-end;
      &:before {
        content: '\2015';
      }
    }
    &:after {
      content: '\201D';
      position: absolute;
      top: 0.28em;
      right: 10%;
      font-size: 6em;
      font-style: italic;
      color: cadetblue;

      @media only screen and (max-width: 964px) {
        right: 0;
      }

      @media only screen and (max-width: 964px) {
        right: -3%;
        font-size: 4em;
      }
    }
  }
</style>
