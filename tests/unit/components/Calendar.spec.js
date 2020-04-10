import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { ACTIONS } from "@/store/actions-definitions";
import store from "@/store";

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Tests Calendar', () => {
  test('returns list event not equal 0', () => {      
      store.dispatch(ACTIONS.SET_EVENTS);        
      expect(store.state.events).not.toEqual(0)
    })
})