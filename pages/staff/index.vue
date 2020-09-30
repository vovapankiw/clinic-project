<template>
  <div class="staff__wrapper">
    <h2 class="staff__title">Наша команда</h2>
    <div class="staff__container">
      <staff-item v-for="member in staff" :key="member.id" :member="member" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StaffItem from '../../components/elements/StaffItem';

export default {
  name: 'Staff',
  components: {
    StaffItem,
  },
  head () {
    return {
      title: 'Персонал Гніздичівської АЗПСМ',
      titleTemplate: 'Персонал Гніздичівської АЗПСМ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Персонал у Гніздичівській АЗПСМ це поєднання досвіду та молодого ентузіазмуб де кожен є професіоналом своєї справи ',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'staff',
    ]),
  },
};
</script>

<style scoped>
.staff__wrapper {
  height: 100%;
  padding-top: 100px;
}

.staff__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 66vh;
}

.staff__title {
  color: #4496d4;
  font-size: 30pt;
  font-family: open_sanslight;
  line-height: 130%;
  text-align: center;
  padding: 15px;
}
</style>
