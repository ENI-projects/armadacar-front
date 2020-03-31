<template>
  <div class="course">
    <h5>Départ : {{ start }}</h5>
    <h5>Arriver : {{ arrival }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Course',
  props: {
    start: String,
    arrival: String
  }
}
</script>

<style scoped>
.course {
  border-radius: 20px;
  border: 2px solid #78C2AD;
  background-color:#78C2AD;
  margin: 15px;
  width: 90%;
}
</style>