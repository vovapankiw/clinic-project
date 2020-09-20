<template>
  <div class="service__container">
    <v-card
      width="80%"
      height="100%"
    >
      <v-tabs
        v-model="tab"
        background-color="transparent"
        class="d-flex justify-center"
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in services"
          :key="item.tab"
        >
          <template>
            <v-card>
              <v-card-title>
                <v-spacer />
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  label="Search"
                  single-line
                  hide-details
                />
              </v-card-title>
              <v-data-table
                :headers="shownHeaders"
                :items="shownServices"
                :search="search"
                hide-default-footer

                :hide-default-header="$vuetify.breakpoint.xs"
              >
                <template v-slot:item.name="{ item }">
                  <span>{{ item.name }}</span>
                  <template
                    v-if="item.tooltip"
                  >
                    <v-tooltip
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-icon color="primary" dark v-on="on">
                          mdi-information
                        </v-icon>
                      </template>
                      <span>{{ item.tooltip }}</span>
                    </v-tooltip>
                  </template>
                </template>
              </v-data-table>
            </v-card>
          </template>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexVue',
  data() {
    return {
      tab: 0,
      items: [
        { tab: 'Безкоштовні', content: 'free' },
        { tab: 'Платні', content: 'paid' },
      ],
      search: '',
      headers: [
        {
          text: 'Послуга',
          align: 'left',
          value: 'name',
          sortable: false,
          paid: false,
        },
        {
          text: 'Ціна (грн)',
          align: 'left',
          value: 'price',
          sortable: false,
          paid: true,
        },
      ],
    };
  },
  head() {
    return {
      title: 'Послуги Гніздичівської АЗПСМ',
      titleTemplate: 'Послуги Гніздичівської АЗПСМ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Амбулаторія надає широкий спектр послуг аналізу крові, сечі, а також проводить лікування та огляд хворих',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'services',
    ]),
    shownServices() {
      if (this.tab === 0) {
        return this.services.filter(({ paid }) => !paid);
      } 
      return this.services.filter(({ paid }) => paid);
    },
    shownHeaders() {
      if (this.tab === 0) {
        return this.headers.filter(({ paid }) => !paid);
      } 
      return this.headers;
    },
  },
};
</script>

<style lang="scss">
  .service__container {
    padding: 120px 0 50px 0;
    min-height: 85vh;
    display: flex;
    justify-content: center;

    .v-data-table td {
      padding: 0 8px;
    }

    .v-data-table__mobile-row {
      max-width: 80vw;
    }

    .v-data-table__mobile-row__cell {
      max-width: 50%;
    }

    .v-data-table__wrapper {
      overflow: hidden;
    }
  }
</style>
