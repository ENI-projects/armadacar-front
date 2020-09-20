<template>
  <div class=" thumbnail course">
    <h5 style="color: white;">Départ : {{ start }}</h5>
    <h5 style="color: white;">Arriver : {{ arrival }}</h5>
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
  border-radius: 5px;
  border: 2px solid #00A5CF;
  background-color: #00A5CF;
  margin: 15px;
  margin-left: -35px;
  width: 120%;  
}

</style>