<template>
  <div id="app" class="h-100">
    <NavBarComponent/>
    <router-view :key="$route.fullPath"/>
    <FooterComponent
      class="footer"
    />
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

<style>
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
