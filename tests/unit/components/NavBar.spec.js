import NavBarComponent from '@/components/NavBar.vue'
import NavbarRoleAdminComponent from '@/components/navbar/NavbarRoleAdmin.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'
//import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)
// localVue.use(VueKeyCloak, {  
//   config: {
//     authRealm: process.env.VUE_APP_KEYCLOAK_REALM,
//     authClientId: "armadacar-frontend-app",
//     authUrl: process.env.VUE_APP_KEYCLOAK_URL
//   },  
//   init: {
//     onLoad: 'login-required',
//     token: {"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJleUpVcTUzN0RlZVZzd1ByNE92c0FiRDF4cUc3SkhWWUthT3pBTHdFclgwIn0.eyJleHAiOjE1ODk3OTA0MzcsImlhdCI6MTU4OTc5MDEzNywianRpIjoiYmY3NTQwOGItMjk0Zi00ZjdhLWE2N2YtMjM0OWI4ZDlmZjg5IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zdGFydGZsZWV0Lm92aC9hdXRoL3JlYWxtcy9sb2NhbCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIxYzc5Yzc4Ni1hZmNkLTQ2YTMtODU1NC1mYmIxMWQwMmJmYjUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcm1hZGFjYXItZnJvbnRlbmQtYXBwIiwic2Vzc2lvbl9zdGF0ZSI6ImI3MWMzMzg4LWE3YjctNDg0OS04YWE4LTRkZDM0NWE1NGJiYSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhZG1pbmVudHJlcHJpc2UiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiSnVsaWVuIExlIFBydW5lbmVjIiwicHJlZmVycmVkX3VzZXJuYW1lIjoianVsaWVuIiwiZ2l2ZW5fbmFtZSI6Ikp1bGllbiIsImZhbWlseV9uYW1lIjoiTGUgUHJ1bmVuZWMiLCJlbWFpbCI6Imp1bGllbkBnbWFpbC5jb20ifQ.f4r1GSbXhnBfZVqeKQbpL0ShydNCK_ogbPoV7A4oWyI_wTBK5-Hw1lAyCcz1Rn_IFDD535udWEM289aMQTmLsOH0MV90bYD0Jh11a1c5zCllEb0077rLeorLfmXxreAq6cjZfH6H-mLUYMjUw7akQC69XR7Eh2OsNMRtV53x6mUGLPvQzATKM4mgEj-Eu2HWEpp0NvekpVKtLQ5Hp32eZwIHdT-TPsOfPCgg2_dvNwPjYB0zUpK0HlTatlZD3QE-h_MNFPnBvS6Hl_X30Ff7ZM9z-Y2gJJkCgpy44u70Jg0t3vo7hDDuva-L4MlnqLuqWZSt2uDFWCfGV1xzqWOn_A","expires_in":300,"refresh_expires_in":1800,"refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjZTczYjk4MC1lNDA5LTRkZjAtOGU0ZS0wZTI5ZmU4ZjFhMGIifQ.eyJleHAiOjE1ODk3OTE5MzcsImlhdCI6MTU4OTc5MDEzNywianRpIjoiYTRkOWY3YTAtMGJlNi00MGE1LWE4OWYtNzc3NThhOWRhNTE2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zdGFydGZsZWV0Lm92aC9hdXRoL3JlYWxtcy9sb2NhbCIsImF1ZCI6Imh0dHBzOi8va2V5Y2xvYWsuc3RhcnRmbGVldC5vdmgvYXV0aC9yZWFsbXMvbG9jYWwiLCJzdWIiOiIxYzc5Yzc4Ni1hZmNkLTQ2YTMtODU1NC1mYmIxMWQwMmJmYjUiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYXJtYWRhY2FyLWZyb250ZW5kLWFwcCIsInNlc3Npb25fc3RhdGUiOiJiNzFjMzM4OC1hN2I3LTQ4NDktOGFhOC00ZGQzNDVhNTRiYmEiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUifQ.X2oHSTCZUBl5Ze59dl76-TeP6SbP4oA9GNDsQ5jpOuU","token_type":"bearer","not-before-policy":0,"session_state":"b71c3388-a7b7-4849-8aa8-4dd345a54bba","scope":"email profile"}
//   }
// })  

// to enhance because this is shit
  describe('Tests NavBar', () => {      
  // test('Test that Navbar is a Vue instance', () => {        
  //   const wrapper = shallowMount(NavBarComponent, { localVue})
  //   localVue.prototype.$keycloak.access_token = token;
  //   expect(wrapper.isVueInstance()).toBeTruthy()
  // })
  

  // test('Test exist istance navbar by role admin', () => {            
    test('Le token n"arrive pas à se créer.', () => {
      console.log("Nécessite de créer un token pour que le test sur la navBar soit fonctionnel")
    })
  //   const wrapper = shallowMount(NavBarComponent, { localVue})                    
  //   expect(wrapper.find(NavbarRoleAdminComponent).exists()).toBe(true)    
  // })
})