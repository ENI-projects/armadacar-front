import NavBarComponent from '@/components/NavBar.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue} from 'bootstrap-vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

// to enhance because this is shit
describe('Tests NavBar', () => {
  test('Test that Navbar is a Vue instance', () => {
    const wrapper = shallowMount(NavBarComponent, { localVue})
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})