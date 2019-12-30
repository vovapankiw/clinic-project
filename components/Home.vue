<template>
  <div
    class="home__wrapper"
  >
    <photo-banner />
    <div
      class="home__quotes"
    >
      <!--<blockquote class="brooks">-->
        <!--Дев’ять десятих нашого щастя залежить від здоров’я. (Артур Шопенгауер)-->
      <!--</blockquote>-->

      <blockquote class="groucho">
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
  /* Some generic stuff. Don't worry about it */
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700),
  url(https://fonts.googleapis.com/css?family=Sanchez:400italic,400),
  url(https://fonts.googleapis.com/css?family=Roboto:100);

  .home__wrapper {
    height: 100vh;
    background: hsl(50, 5, 97);
    color: hsl(200, 40, 40);;
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

    footer {
      font-family: 'Noto Sans', sans-serif;
      font-size: 0.6em;
      font-weight: 700;
      color: darken($white, 15%);
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
      color: darken($white, 7%);
    }
  }
</style>
