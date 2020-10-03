<template>
  <v-container class="admin__news">
    <h1>HERE WILL BE PROTECTED CONTENT</h1>
  </v-container>
</template>

<script>
export default {
  name: 'AdminNews',
  middleware: 'auth',
};
</script>

<style scoped>
  .admin__news {
      height: 100vh;
      margin-top: 100px;
  }
</style>
