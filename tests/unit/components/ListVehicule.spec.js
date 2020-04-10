import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { ACTIONS } from "@/store/actions-definitions";
import store from "@/store";

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Tests ListVehicule', () => {
  test('returns list stockage place not equal 0', () => {      
      store.dispatch(ACTIONS.SET_LIEUX_STOCKAGES);        
      expect(store.state.lieuxStockages).not.toEqual(0)
    })

  test('returns list vehicule not equal 0', () => {      
      store.dispatch(ACTIONS.SET_VEHICULES);        
      expect(store.state.vehicules).not.toEqual(0)
  })
})