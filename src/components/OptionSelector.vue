<template>
  <ul id="option-selector" class="col-sm-4 list-group">

    <li v-for="category in categories" :key="category.id" class="list-group-item">
      <p class="font-weight-bold">{{ category.description }}</p>
      <!-- TODO: should probably be a separate component -->
      <ul :id="category.id + 'Features'" class="featureList">
        <li v-for="feature in filterFeaturesByCategory(category.id)" :key="feature.id">
          <input class="form-check-input" type="checkbox" value="" :id="feature.id + 'Check'">
          <label class="form-check-label" :for="feature.id + 'Check'">{{ feature.description }}</label>
        </li>
      </ul>
    </li>

  </ul>
</template>

<script>
  export default {
    name: 'option-selector',
    props: {
      categories: Array,
      features: Array
    },
    methods: {
      filterFeaturesByCategory(catId) {
        return this.features.filter(f => f.category === catId)
      }
    }
  }
</script>

<style scoped>
.list-group-item {
  text-align: left;
}

.featureList {
  list-style-type: none;
}
</style>
