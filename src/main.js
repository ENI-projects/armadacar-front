import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import * as Keycloak from 'keycloak-js'

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')

let initOptions = {
  url: 'http://localhost:8081/auth', realm: 'demo', clientId: 'admin-cli', onLoad:'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{
    
    if(!auth) {
      window.location.reload();
    } else {
      Vue.$log.info("Authenticated");
    }
 
    new Vue({
      render: h => h(App),
    }).$mount('#app')
  

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setTimeout(() =>{
      keycloak.updateToken(70).success((refreshed)=>{
        if (refreshed) {
          Vue.$log.debug('Token refreshed'+ refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).error(()=>{
          Vue.$log.error('Failed to refresh token');
      });


    }, 60000)

}).error(() =>{
  Vue.$log.error("Authenticated Failed");
});