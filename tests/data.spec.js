import 'jest-extended'
import categories from '@/../data/categories.json'
import features from '@/../data/features.json'
import options from '@/../data/options.json'

// These tests test the data files that are part of the application (@/data/).
// The rest of the test suite works against the files in tests/fixtures/

describe('data files', () => {
  test('each category has the expected properties and types', () => {
    categories.forEach((category) => {
      const keys = ['id', 'description', 'longDescription']
      categories.forEach((category) => {
        expect(category).toContainAllKeys(keys)
        keys.forEach((key) => {
          expect(typeof category[key]).toBe('string')
        })
      })
    })
  })

  test('each feature has the expected properties and types', () => {
    const keys = ['id', 'category', 'description']
    features.forEach((feature) => {
      expect(feature).toContainAllKeys(keys)
      keys.forEach((key) => {
        expect(typeof feature[key]).toBe('string')
      })
    })
  })

  test('each feature is in a known category', () => {
    const categoryIds = categories.map(c => c.id)
    features.forEach((feature) => {
      expect(feature.category).toBeOneOf(categoryIds)
    })
  })

  test('each option has the expected properties and types', () => {
    const keys = ['id', 'description', 'label', 'url', 'features']
    options.forEach((option) => {
      expect(option).toContainAllKeys(keys)
      keys.slice(0, 4).forEach((key) => { //
        expect(typeof option[key]).toBe('string')
      })
      expect(option.features).toBeArray()
    })
  })

  test('each option has known features', () => {
    const featureIds = features.map(c => c.id)
    options.forEach((option) => {
      expect(option.features).toIncludeAnyMembers(featureIds)
    })
  })
})
