<template>
  <v-card
    max-width="350"
    class="mx-auto my-4"
  >
    <img
      :src="require(`~/assets/staff/${member.src}`)"
      class="staff__img"
    >
      <v-row class="fill-height d-flex align-center justify-center">
        <v-card-title class=" pa-1">
          <div class="pa-1"> {{ member.name }}</div>
        </v-card-title>
      </v-row>

    <v-list two-line>
      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ member.phone }}</v-list-item-title>
          <v-list-item-subtitle>Мобільний</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-briefcase</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ member.experience }} років</v-list-item-title>
          <v-list-item-subtitle>Стаж</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account-card-details</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ member.position }}</v-list-item-title>
          <v-list-item-subtitle>Посада</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account-star</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ member.qualification }}</v-list-item-title>
          <v-list-item-subtitle>Категорія</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: "StaffItem",
    props: {
      member: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .staff__img {
    width: 100%;
    height:200px;
    object-fit: cover;
    background-blend-mode: darken;
  }
</style>
