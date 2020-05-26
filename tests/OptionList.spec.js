import { mount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuex from 'vuex'
import Vue from 'vue'
import OptionList from '@/components/OptionList.vue'
import options from './fixtures/options.json'
import store from '@/store'

describe('OptionList', () => {

  let wrapper

  const localVue = createLocalVue()
  localVue.use(BootstrapVue)
  localVue.use(BootstrapVueIcons)

  beforeEach(() => {
    wrapper = mount(OptionList, {
      store,
      localVue,
      propsData: { options }
    })
  });

  it('is an unordered list', () => {
    expect(wrapper.element.tagName).toBe("UL")
  })

  it('hides options that don not meet requirements', () => {
    // Would like mess with the store directly, rather than relying on the
    // FeatureCheckboxes and test the visibility of options, but can't figure
    // it out. Something related to
    //
    // optionIsCollapsed(option) {
    //   return document.getElementById(option.id).style.display === 'none'
    // },
    //
    // in OptionList.vue, and the DOM not being accessible int the test, I think.
    // using $refs doesn't make a difference.
    //
  })
})
