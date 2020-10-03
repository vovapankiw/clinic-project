<template>
  <contact-info />
</template>

<script>
import ContactInfo from '../../components/ContactInfo.vue';

export default {
  name: 'Index',
  components: {
    ContactInfo,
  },
  head() {
    return {
      titleTemplate: 'Контакти АЗПСМ',
      title: 'Контакти Гніздичівської АЗПСМ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Контактна інформація, а також місце розташування Гніздичівської АЗПСМ',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
