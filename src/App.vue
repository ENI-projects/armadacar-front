<template>
  <div id="app">
    <NavBarComponent/>
    <router-view :key="$route.fullPath"/>
    <FooterComponent/>
  </div>
</template>

<script>
import './assets/style/style.css'
import NavBarComponent from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent
  }
}
</script>
