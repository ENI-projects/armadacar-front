<template>
  <div class="row">
    <div class="col-xl-5 col-md-12 d-flex justify-content-center">
        <ListCourses 
          class="align-self-center"
          :courses="courses"
        />
    </div>
    <div class="col-xl-7 col-md-12" id="calendarDiv">
      <CalendarComponent/>
    </div>
  </div>
</template>

<script>
import CalendarComponent from '@/components/home/Calendar.vue'
import ListCourses from '@/components/home/ListCourses.vue'
import { ACTIONS } from "@/store/actions-definitions";
import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
    CalendarComponent,
    ListCourses
  },
  computed : {
    ...mapState(["courses"])
  },
  mounted() {
    this.$store.dispatch(ACTIONS.SET_LAST_FOUR_COURSES);
  }
}
</script>