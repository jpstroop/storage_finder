<template>
  <div id="app" class="small-container">
    <h1>Storage Options</h1>
    <option-selector :categories="categories" :features="features" />
    <options />
  </div>
</template>

<script>
import OptionSelector from '@/components/OptionSelector.vue'
import Options from '@/components/Options.vue'
import categories from '@/../data/categories.json'
import features from '@/../data/features.json'
import options from '@/../data/options.json'

export default {
  name: 'app',
  components: {
    OptionSelector,
    Options
  },
  data() {
    return {
      categories: categories,
      features: features,
      options: options
    }
  },
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
