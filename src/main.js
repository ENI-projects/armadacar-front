import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store"
import { BootstrapVue} from 'bootstrap-vue';
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";
import { ACTIONS } from "@/store/actions-definitions";

Vue.use(BootstrapVue)
Vue.config.productionTip = false
  
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireBeAdmin)) {
    if (Vue.prototype.$keycloak.authenticated) {           
      if (Vue.prototype.$keycloak.tokenParsed.resource_access["armadacar-frontend-app"].roles.includes("adminentreprise"))
      {
        next()
      }
      else{
        alert("Vous n'avez pas les droits")
        window.location.replace(process.env.VUE_APP_ROOT_URL)
      }
    } else {
      window.location.replace(process.env.VUE_APP_KEYCLOAK_URL)
    }
  } else {
    next()
  }
})

Vue.use(VueKeyCloak, {  
  config: {
    authRealm: process.env.VUE_APP_KEYCLOAK_REALM,
    authClientId: "armadacar-frontend-app",
    authUrl: process.env.VUE_APP_KEYCLOAK_URL
  },
  init: {    
    onLoad: 'login-required'
  },
  logout: {
    redirectUri: process.env.VUE_APP_ROOT_URL
  },  
  onReady: keycloak => {
    store.dispatch(ACTIONS.UPDATE_TOKEN, keycloak.token);
    store.dispatch(ACTIONS.UPDATE_USER_ID, keycloak.idTokenParsed.sub);
    //store.dispatch(ACTIONS.RETRIEVE_PROFILE).then(() => {
    //  if (!store.state.profile || store.state.profile.user_name === "") {
    //    router.replace("/first-step");
    //    return;
    //  }
    //});
    new Vue({
      router: router,
      store: store,
      render: h => h(App),
    }).$mount('#app')
  }
});
    