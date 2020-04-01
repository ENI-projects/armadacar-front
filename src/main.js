import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import { ACTIONS } from "@/store/actions-definitions"
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

Vue.config.productionTip = false

Vue.use(VueKeyCloak, {
  init: {
    onLoad: "login-required"
  },
  logout: {
    redirectUri: () => {
      //if the environement is production return the keycloak url in the Kubernetes cluster
      //else returns the keycloak container url in docker-compose network
      if (process.env.NODE_ENV == "production") {
        return "http://keycloak-service.keycloak.svc.cluster.local:8080/auth"
      } else {
        return "http://keycloak:8080/auth"
      }
    }
  },
  config: initOptions.default,
  onReady: keycloak => {
    store.dispatch(ACTIONS.UPDATE_TOKEN, keycloak.token);
    store.dispatch(ACTIONS.UPDATE_USER_ID, keycloak.idTokenParsed.sub);
    new Vue({
      router: router,
      store: store,
      render: h => h(App),
    }).$mount('#app')
    //store.dispatch(ACTIONS.RETRIEVE_PROFILE).then(() => {
    //  if (!store.state.profile || store.state.profile.user_name === "") {
    //    router.replace("/first-step");
    //    return;
    //  }
    //});
  }
});


//let initOptions = {
//  url: 'http://localhost:8081/auth', realm: 'demo', clientId: 'admin-cli', onLoad: 'login-required'
//}
//
//let keycloak = Keycloak(initOptions);
//
//keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {
//
//  if (!auth) {
//    window.location.reload();
//  } else {
//    Vue.$log.info("Authenticated");
//  }
//
//  new Vue({
//    render: h => h(App),
//  }).$mount('#app')
//
//
//  localStorage.setItem("vue-token", keycloak.token);
//  localStorage.setItem("vue-refresh-token", keycloak.refreshToken);
//
//  setTimeout(() => {
//    keycloak.updateToken(70).success((refreshed) => {
//      if (refreshed) {
//        Vue.$log.debug('Token refreshed' + refreshed);
//      } else {
//        Vue.$log.warn('Token not refreshed, valid for '
//          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//      }
//    }).error(() => {
//      Vue.$log.error('Failed to refresh token');
//    });
//
//
//  }, 60000)
//
//}).error(() => {
//  Vue.$log.error("Authenticated Failed");
//});