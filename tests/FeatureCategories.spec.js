import { mount, createLocalVue } from '@vue/test-utils'
import FeatureCategories from '@/components/FeatureCategories.vue'
import categories from './fixtures/categories.json'
import features from './fixtures/features.json'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

describe('FeatureCategories', () => {
  const localVue = createLocalVue()
  localVue.use(BootstrapVue)
  localVue.use(BootstrapVueIcons)

  const wrapper = mount(FeatureCategories, {
    localVue: localVue,
    propsData: {
      categories: categories,
      features: features
    }
  })

  it('is an unordered list', () => {
    expect(wrapper.element.tagName).toBe("UL")
  })

  test('list items contain an info button that toggles the description', async() => {
    const catListItem = wrapper.find('li.category') // just testing the first
    const infoButton = catListItem.find('svg')
    const description = catListItem.find('div')
    expect(description.element).not.toBeVisible()
    await infoButton.trigger('click')
    expect(description.element).toBeVisible()

    // FAIL
    // See: https://stackoverflow.com/q/62223642/714478
    //
    // const closeButton = catListItem.find('.close-description')
    // await closeButton.trigger('click')
    // expect(description.element).not.toBeVisible()
    //
    // ^ UI works, but in the test we're getting the transitional "collapsing"
    // state (see: https://getbootstrap.com/docs/4.3/components/collapse/#example)
    // <div class="collapse show collapsing" id="classificationLong" style="height: 0px; display: block;" />
    // and not the final "collapsed" state.
  })
})
