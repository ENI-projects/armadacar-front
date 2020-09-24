<template>
  <div class="row">
      <div class=" align-self-center divResumeActionAdmin col-xl-5 col-md-12" v-if="role.includes('adminentreprise')">
            <ResumeActionAdmin/>
      </div>
      <div class="col-xl-5 col-md-12 d-flex justify-content-center" v-else>
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
import ResumeActionAdmin from '@/components/home/ResumeActionAdmin.vue'
import { ACTIONS } from "@/store/actions-definitions";
import { mapState } from "vuex";
import Vue from 'vue'

export default {
  data()
  {
    return {
      role : Vue.prototype.$keycloak.tokenParsed.resource_access["armadacar-frontend-app"].roles
    }
  },
  name: 'App',
  components: {
    CalendarComponent,
    ListCourses,
    ResumeActionAdmin
  },
  computed : {
    ...mapState(["courses"]),
  },
  mounted() {
    this.$store.dispatch(ACTIONS.SET_LAST_FOUR_COURSES);
  }
}
</script>

<style>
.divResumeActionAdmin
{
  padding-left: 20px;
}
</style>