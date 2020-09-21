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
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavigationDrawer from '../components/elements/NavigationDrawer';

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
