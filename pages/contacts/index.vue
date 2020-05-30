<template>
  <contact-info />
</template>

<script>
  import  ContactInfo from '../../components/ContactInfo';

  export default {
    head () {
      return {
        titleTemplate: "Контакти АЗПСМ",
        title: 'Контакти Гніздичівської АЗПСМ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Контактна інформація, а також місце розташування Гніздичівської АЗПСМ'
          }
        ]
      }
    },
    name: "index",
    components: {
      ContactInfo,
    }
  }
</script>

<style scoped>

</style>
