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
          :items="getSchedule"
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
  import { mapGetters } from 'vuex';

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
      }
    },
    computed: {
      ...mapGetters([
        'getSchedule',
      ]),
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
