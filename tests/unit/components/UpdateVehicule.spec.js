import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import AddUpdateVehiculeComponent from '@/components/vehicule/AddUpdateVehicule.vue'
import GestionVehiculeComponent from '@/components/vehicule/VehiculeList.vue'


import { BootstrapVue} from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(BootstrapVue)


describe('Tests UpdateVehicule component', () => {
  it("Verify title update", () => 
  {
    const routes = [
      { path: '/admin/gestionVehicule/updateVehicule', component: AddUpdateVehiculeComponent }, 
      { name:'gestionVehicule', path: '/admin/gestionVehicule/', component: GestionVehiculeComponent },    
    ]

    const router = new VueRouter({
      mode: 'history',
      routes
    })
    
    const wrapper = shallowMount(AddUpdateVehiculeComponent, {
      localVue,
      router
    })
    
    wrapper.vm.$nextTick();
    wrapper.vm.$router.push('/admin/gestionVehicule/updateVehicule');

    const title = wrapper.find('h2');
    expect(title.element.textContent.toLowerCase()).toContain("modifier")    
  })
})
