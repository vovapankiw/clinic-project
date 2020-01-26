<template>
  <div class="staff__wrapper">
    <h2 class="staff__title">Наша команда</h2>
    <div
      class="staff__container"
    >
      <staff-item
        v-for="member in staff"
        :key="member.id"
        :member="member"
      />
    </div>
  </div>
</template>

<script>
  import StaffItem from '../../components/elements/StaffItem';

  export default {
    name: "Staff",
    components: {
      StaffItem
    },
    data() {
      return {
        staff: [
          {
            id: 1,
            name: 'Паньків Дарія Володимирівна',
            src: 'pankivd\.jpg',
            phone: '067-55-64-662',
            experience: 20,
            position: 'Head',
            qualification: 'Вища кваліфікаційна категорія',
          },
          {
            id: 2,
            name: 'Паньків Ольга Юріївна',
            src: 'pankivd\.jpg',
            phone: '098-77-85-634',
            experience: 2,
            position: 'Лікар-загальної практики-сімейний лікар',
            qualification: 'Перша',
          },
          {
            id: 3,
            name: 'Паньків Дарія Володимирівна',
            src: 'pankivd\.jpg',
            phone: '067-55-64-662',
            experience: 20,
            position: 'Head',
            qualification: 'Вища',
          },
          {
            id: 4,
            name: 'Паньків Дарія Володимирівна',
            src: 'pankivd\.jpg',
            phone: '067-55-64-662',
            experience: 20,
            position: 'Head',
            qualification: 'Вища',
          },
          {
            id: 5,
            name: 'Паньків Дарія Володимирівна',
            src: 'pankivd\.jpg',
            phone: '067-55-64-662',
            experience: 20,
            position: 'Head',
            qualification: 'Вища',
          },
          {
            id: 6,
            name: 'Паньків Дарія Володимирівна',
            src: 'pankivd\.jpg',
            phone: '067-55-64-662',
            experience: 20,
            position: 'Head',
            qualification: 'Вища',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .staff__wrapper {
    padding-top: 100px;
  }

  .staff__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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
