import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import { cloneDeep } from 'lodash'

describe('The Vuex Store', () => {
  afterEach(() => {
    store.state.requiredFeatures = []
  });

  test('"requiredFeatures" starts as an empty Array', () => {
    expect(store.getters.requiredFeatures).toEqual([])
  })

  test('"addFeature" adds a feature "requiredFeatures"', () => {
    let feature = 'fooBar'
    store.commit('addFeature', { featureId: feature })
    expect(store.state.requiredFeatures.includes(feature)).toBeTruthy()
  })

  test('"removeFeature" removes a feature "requiredFeatures"', () => {
    let feature = 'fooBar'
    store.state.requiredFeatures = [feature, 'bazQux']
    store.commit('removeFeature', { featureId: feature })
    expect(store.state.requiredFeatures.includes(feature)).toBeFalsy()
  })

  test('"removeFeature" removes a feature "requiredFeatures"', () => {
    let feature = 'fooBar'
    store.state.requiredFeatures = [feature, 'bazQux']
    store.commit('removeFeature', { featureId: feature })
    expect(store.state.requiredFeatures.includes(feature)).toBeFalsy()
  })

  // it('"removeFeature" removes a feature to the "requiredFeatures"', () => {
  //
  //   expect(store.state.requiredFeatures.includes('fooBar')).toBeTruthy()
  // })


})
