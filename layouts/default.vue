<template>
  <v-app>
    <Header
      @showDrawer="toggleDrawer"
    />
    <NavigationDrawer
      :show-drawer="drawer"
      @hideDrawer="toggleDrawer"
    />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import NavigationDrawer from '../components/elements/NavigationDrawer.vue';

export default {
  components: {
    NavigationDrawer,
    Header,
    Footer,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
