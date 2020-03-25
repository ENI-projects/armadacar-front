<template>
<div class="row">
  <div class="lastCourse col-xl-4 col-lg-4 col-md-12 col-sm-12">
      <LastCourseComponent/>
  </div>
  <div class="col-xl-8 col-md-12 col-sm-12 col-lg-8" id="calendarDiv">
    <CalendarComponent/>
  </div>  
</div>  
</template>

<script>
import CalendarComponent from '@/components/home/Calendar.vue'
import LastCourseComponent from '@/components/home/LastCourse.vue'

export default {
  name: 'App',
  components: {
    CalendarComponent,
    LastCourseComponent
  }  
}
</script>
