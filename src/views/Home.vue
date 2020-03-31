<template>
  <div class="row">
    <div class="col-xl-5 col-md-12 d-flex justify-content-center">
        <ListCourses 
          class="align-self-center"
          :courses="this.lastCourses"
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
import store from "@/store";
import { ACTIONS } from "@/store/actions-definitions";

export default {
  name: 'App',
  components: {
    CalendarComponent,
    ListCourses
  },
  computed: {
    lastCourses: () => {
      store.dispatch(ACTIONS.SET_COURSES);
      return store.state.courses
    }
  }
}
</script>