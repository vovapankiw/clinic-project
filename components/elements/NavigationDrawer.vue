<template>
  <v-navigation-drawer
    :value="showDrawer"
    absolute
    temporary
    dark
    @input="toggle"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      nav
      dense
      class="pt-6"
    >
      <v-list-item-group

      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-item-title
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "NavigationDrawer",
    props: {
      showDrawer: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        items: [
          {
            title: 'Головна',
            link: '/',
            options: []
          },
          {
            title: 'Персонал',
            link: '/staff',
            options: []
          },
          {
            title: 'Послуги',
            link: '/services',
            options: []
          },
          {
            title: 'Новини',
            link: '/news',
            options: []
          },
          {
            title: 'Контакти',
            link: '/contacts',
            options: []
          },
        ]
      }
    },
    methods: {
      toggle(e) {
        if(!e) {
          this.$emit('hideDrawer')
        }
      }
    }
  }
</script>

<style scoped>

</style>
