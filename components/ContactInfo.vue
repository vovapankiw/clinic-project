<template>
  <v-container fluid class="contact-info__container">
    <v-row>
      <v-col cols="12">
        <v-row
          class="grey lighten-5 justify-center ma-6"
        >
          <v-card
            class="ma-3 pa-6"
            outlined
            tile
            width="500"

          >
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="text-center">Гніздичівська амбулаторія загальної практики <br> сімейної медицини</v-list-item-title>

              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-icon>

                <v-list-item-title>48-715</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email-send</v-icon>
                </v-list-item-icon>

                <v-list-item-title>81740</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>

                <v-list-item-title>hnyzclinic@gmail.com</v-list-item-title>
              </v-list-item>

              <v-list-group
                prepend-icon="people_outline"
                :value="false"
              >
                <template v-slot:activator>
                  <v-list-item-title>Лікарі</v-list-item-title>
                </template>

                <v-list-item
                  v-for="(admin, i) in admins"
                  :key="i"
                  link
                >
                  <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-title v-text="admin[0]"></v-list-item-title>
                  <v-list-item-title v-text="admin[1]"></v-list-item-title>
                </v-list-item>

              </v-list-group>
            </v-list>
          </v-card>
          <v-card
            class="ma-3 pa-6"
            outlined
            tile
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2599.423510658539!2d24.106500831219584!3d49.33735575499756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a64fffa408865%3A0x45f3fce20166bdb9!2sHnizdychivs%CA%B9ka%20Ambulatoriya%20Zahal%CA%B9noyi%20Praktyky-Simeynoyi%20Medytsyny!5e0!3m2!1sru!2sua!4v1578763599679!5m2!1sru!2sua"
              width="500"
              height="320"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
            />
          </v-card>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "ContactInfo",
    data: () => ({
      admins: [
        ['Паньків Д.В.', '067-55-88-665'],
        ['Паньків О.Ю.', '097-56-47-995'],
        ['Паньків О.Ю.', '097-56-47-995'],
        ['Паньків О.Ю.', '097-56-47-995'],
      ],
    }),
  }
</script>

<style scoped>
  .contact-info__container {
      margin-top: 60px;
  }
</style>
