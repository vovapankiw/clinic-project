<template>
  <v-layout class="admin__route">
    <v-container>
      <v-flex>
        <v-btn
          @click="loggIn"
        >
          Login with google
        </v-btn>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'Admin',
  methods: {
    loggIn() {
      console.log('here')
      this.$auth.loginWith('facebook')
        .then(() => {
          console.log('success')
          this.$router.push('/');
        })
        .catch(e => console.log(`Error ${e}`));
    },
  },

};
</script>

<style scoped>
  .admin__route{
    margin-top: 100px;
    height: 100vh;
  }
</style>
