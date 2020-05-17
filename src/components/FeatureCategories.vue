<template>
  <ul id="feature-categories" class="col-sm-4 list-group">
    <li v-for="category in categories" :key="category.id" class="list-group-item">
      <p class="font-weight-bold description">{{ category.description }}</p>

      <feature-checkboxes :features="filterFeaturesByCategory(category.id)"/>

    </li>
  </ul>
</template>

<script>
  import FeatureCheckboxes from '@/components/FeatureCheckboxes.vue'

  export default {
    name: 'feature-categories',
    components: {
      FeatureCheckboxes,
    },
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


.description {
  margin-bottom: .2rem;
}
</style>
