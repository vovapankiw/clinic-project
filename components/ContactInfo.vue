<template>
  <v-container
    fluid
    class="contact-info__container"
  >
    <v-row>
      <v-col cols="12">
        <v-row
          class="grey lighten-5 ma-6 justify-space-around"
        >
          <v-card
            class="mb-3 pa-2 contact-info__text-block"
            outlined
            tile
          >
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title
                  class="text-center text-wrap"
                >
                  Гніздичівська амбулаторія загальної практики <br> сімейної медицини
                </v-list-item-title>
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

                <v-list-item-title>hnyzclinik@gmail.com</v-list-item-title>
              </v-list-item>

              <v-list-group
                prepend-icon="people_outline"
                :value="false"
              >
                <template v-slot:activator>
                  <v-list-item-title>Лікарі</v-list-item-title>
                </template>

                <v-list-item
                  v-for="(admin, i) in staff"
                  :key="i"
                  link
                  class="doctors__list_item"
                >
                  <v-list-item-avatar>
                    <v-img :src="require(`~/assets/staff/${admin.src}`)" />
                  </v-list-item-avatar>

                  <v-list-item-title v-text="adaptedName(admin.name)" />
                  <v-list-item-title v-text="admin.phone" />
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>

          <v-card
            class="mb-3 pa-2 contact-info__map"
            outlined
            tile
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d166290.01696417408!2d24.06437!3d49.365746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45f3fce20166bdb9!2z0JPQvdGW0LfQtNC40YfRltCy0YHRjNC60LAg0LDQvNCx0YPQu9Cw0YLQvtGA0ZbRjyDQt9Cw0LPQsNC70YzQvdC-0Zcg0L_RgNCw0LrRgtC40LrQuC3RgdGW0LzQtdC50L3QvtGXINC80LXQtNC40YbQuNC90Lg!5e0!3m2!1suk!2sua!4v1581771275885!5m2!1suk!2sua"
              width="100%"
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
import { mapGetters } from 'vuex';

export default {
  name: 'ContactInfo',
  computed: {
    ...mapGetters([
      'staff',
    ]),
  },
  methods: {
    adaptedName(name) {
      return name.split(/\s+/).map((elem, i) => (i ? `${elem.substring(0, 1)}.` : elem)).join(' ');
    },
  },
};
</script>

<style scoped lang="scss">
  .contact-info{

    &__container {
      margin-top: 60px;
      height: 100%;
      display: flex;
      align-items: center;
    }

    &__text-block,
    &__map{
      margin-right: 15px;
      width:500px;

      @media only screen and (max-width: 1264px) {
        margin-right: 0;
      }

      @media only screen and (max-width: 600px) {
        width:300px;
      }
    }
  }

  .doctors__list_item {
    display: flex;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

</style>
