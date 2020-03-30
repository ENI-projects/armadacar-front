import NavBarComponent from '@/components/NavBar.vue'
import { shallowMount } from '@vue/test-utils'

// to enhance because this is shit
describe('Tests NavBar', () => {
    test('Test that Navbar is a Vue instance', () => {
      const wrapper = shallowMount(NavBarComponent, { stubs: ['router-link', 'router-view'] })
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  })