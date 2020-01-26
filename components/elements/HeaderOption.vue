<template>
  <v-menu
    left
    bottom
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        text
        large
        :to="item.link"
        :nuxt="true"
      >
        {{  item.title }}
      </v-btn>
    </template>

    <v-list
      v-if="item.options.length"
    >
      <v-list-item
        v-for="n in 5"
        :key="n"
        @click="() => {}"
      >
        <v-list-item-title>Option {{ n }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: "HeaderOption",
    props: {
      item: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
