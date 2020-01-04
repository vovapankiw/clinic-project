<template>
  <div
    class="grey lighten-5 ma-0"
  >
    <p
      class="text-center pa-2"
    >
      <span class="care_pillars__title">
        МИ - це професіоналізм
      </span>
    </p>
    <div class="care_pillars__main">
      <div
        v-for="item in items"
        :key="item.id"
        class="care_pillars__main_item"
      >
        <img
          :src="require(`~/assets/pillars/${item.src}`)"
          alt="item.alt"
          class="care_pillars__main_img"
        >
        <div
          class="care_pillars__main_text"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarePillars",
    data() {
      return {
        items: [
          {
            id: 1,
            src: 'appointment\.png',
            alt: 'якісне обслуговування',
            text: 'Ввічливе та швидке обслуговвувааня, з повагою до нашого з вами часу',
          },
          {
            id: 2,
            src: 'preventative\.png',
            alt: 'огляд паціжнтів',
            text: 'Огляд пацієнтів як у амбулаторії так і з виїздом на дім',
          },
          {
            id: 3,
            src: 'treatment\.png',
            alt: 'якісне лікування',
            text: 'Викорисатання новітніх апаратів для надання якісного лікування',
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .care_pillars {

    &__title {
      color: #4496d4;
      font-size: 30pt;
      font-family: open_sanslight;
      line-height: 130%;
    }

    &__main {
      display: grid;
      grid-template-columns: repeat(auto-fill, 400px);
      grid-gap: 15px;
      justify-content: space-around;
      justify-items: center;

      &_item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &_img {
        width: 50%;
      }

      &_text {
        text-align: center;
        font-family: open_sansregular,
        sans-serif; color: #000;
        font-size: 20px;
        padding: 15px;
      }
    }
  }
</style>
