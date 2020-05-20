<template>
  <div id="app">
    <h1>Storage Finder</h1>
    <div class="container-fluid">
      <div class="row">
        <feature-categories :categories="categories" :features="features" />
        <option-list :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureCategories from '@/components/FeatureCategories.vue'
import OptionList from '@/components/OptionList.vue'
import categories from '@/../data/categories.json'
import features from '@/../data/features.json'
import options from '@/../data/options.json'

export default {
  name: 'app',
  components: {
    FeatureCategories,
    OptionList
  },
  data() {
    return {
      categories: categories,
      features: features,
      options: options
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
