<template>
  <div>
    <v-dialog
      v-model="isScheduleVisible"
      width="900"
      persistent
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          <span>Графік роботи</span>
          <v-spacer />
          <v-btn
            text
            icon
            color="pink"
            @click="hideDialog"
          >
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-card-title>

        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          hide-default-footer
          :hide-default-header="$vuetify.breakpoint.xs"
          disable-sort
          class="elevation-1 schedule_table"
        ></v-data-table>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "Schedule",
    props: {
      isScheduleVisible: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        headers: [
          {
            text: 'Лікар',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          { text: 'Понеділок', value: 'monday' },
          { text: 'Вівторок', value: 'tuesday' },
          { text: 'Середа', value: 'wednesday' },
          { text: 'Четвер', value: 'thursday' },
          { text: 'П\'ятниця', value: 'friday' },
          { text: 'Субота', value: 'saturday' },
          { text: 'Неділя', value: 'sunday' },
        ],
        desserts: [
          {
            name: 'Паньків Д.В.',
            monday: '9:00 - 18:00',
            tuesday: '9:00 - 18:00',
            wednesday: '9:00 - 18:00',
            thursday: '9:00 - 18:00',
            friday: '9:00 - 18:00',
            saturday: '9:00 - 18:00',
            sunday: '9:00 - 18:00',
          },
          {
            name: 'Паньків О.Ю.',
            monday: '9:00 - 18:00',
            tuesday: '9:00 - 18:00',
            wednesday: '9:00 - 18:00',
            thursday: '9:00 - 18:00',
            friday: '9:00 - 18:00',
            saturday: '9:00 - 18:00',
            sunday: '9:00 - 18:00',
          },
          {
            name: 'Купець У.І.',
            monday: '9:00 - 18:00',
            tuesday: '9:00 - 18:00',
            wednesday: '9:00 - 18:00',
            thursday: '9:00 - 18:00',
            friday: '9:00 - 18:00',
            saturday: '9:00 - 18:00',
            sunday: '9:00 - 18:00',
          },
          {
            name: 'Гасенець Є.В.',
            monday: '9:00 - 18:00',
            tuesday: '9:00 - 18:00',
            wednesday: '9:00 - 18:00',
            thursday: '9:00 - 18:00',
            friday: '9:00 - 18:00',
            saturday: '9:00 - 18:00',
            sunday: '9:00 - 18:00',
          },
        ],
      }
    },
    methods: {
      hideDialog() {
        this.$emit('hideDialog');
      }
    }
  }
</script>

<style lang="scss">
  .schedule_table{
    th {
      text-align: center !important;
    }
  }
</style>
