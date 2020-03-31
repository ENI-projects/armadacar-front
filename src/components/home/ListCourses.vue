<template>
  <div class="listCourses">
    <h2 class="titleList">Derniers déplacements:</h2>
    <br/>
      <Course
        v-for="(course, index) in this.courses"
        :key="index"
        :start="course.start"
        :arrival="course.arrival"
      />
  </div>
</template>

<script>
import Course from "@/components/home/Course"

export default {
  name: 'ListCourses',
  components: {Course},
  props: {
    courses: Array
  }
}
</script>

<style>
.listCourses {
  border-radius: 30px;
  text-align: center;
  border: 2px solid #8c8c8c;
  padding: 10px;
}

.titleList {
  margin-top: 10px;
}
</style>