<template>
  <ul class="featureList">
    <li v-for="feature in features" :key="feature.id">
      <input class="form-check-input" type="checkbox" value="" :id="feature.id + 'Check'">
      <label class="form-check-label" :for="feature.id + 'Check'">{{ feature.description }}</label>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'feature-checkboxes',
    props: {
      features: Array
    },
    methods: {}
  }
</script>

<style scoped>

.featureList {
  list-style-type: none;
}

</style>
