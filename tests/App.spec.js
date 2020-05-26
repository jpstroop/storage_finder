import App from '@/App.vue'

describe('App', () => {
  it('has a data function', () => {
    expect(typeof App.data).toBe('function')
  })

  it('brings in data from from /data', () => {
    const defaultData = App.data()
    expect(defaultData.categories).toBeArray()
    expect(defaultData.features).toBeArray()
    expect(defaultData.options).toBeArray()
  })
})
