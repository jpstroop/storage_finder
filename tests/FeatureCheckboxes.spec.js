import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import FeatureCheckboxes from '@/components/FeatureCheckboxes.vue'
import features from './fixtures/features.json'
import store from '@/store.js'

const featureSet = features.filter(f => f.category == "classification")

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(Vuex)

describe('FeatureCheckboxes', () => {

  it('is an unordered list', () => {
    const wrapper = shallowMount(FeatureCheckboxes)
    expect(wrapper.element.tagName).toBe("UL")
  })

  it('dispatches "addFeature" when a checkbox is ticked', () => {
    let mutations = {
      addFeature: jest.fn(),
      removeFeature: jest.fn()
    }
    let getters = {
      requiredFeatures: () => []
    }
    let wrapper = shallowMount(FeatureCheckboxes, {
      localVue,
      store: new Vuex.Store({ mutations, getters }),
      propsData: { features: featureSet }
    })
    wrapper.find(`#${featureSet[0].id}Check`).trigger('click')
    expect(mutations.addFeature).toHaveBeenCalled()
  })

  it('dispatches "removeFeature" when a checkbox is unticked', () => {
    let mutations = {
      addFeature: jest.fn(),
      removeFeature: jest.fn()
    }
    let getters = {
      requiredFeatures: () => [featureSet[0].id, 'bazQux']
    }
    let wrapper = shallowMount(FeatureCheckboxes, {
      localVue,
      store: new Vuex.Store({ mutations, getters }),
      propsData: { features: featureSet }
    })
    wrapper.find(`#${featureSet[0].id}Check`).trigger('click')
    expect(mutations.removeFeature).toHaveBeenCalled()
  })

})
