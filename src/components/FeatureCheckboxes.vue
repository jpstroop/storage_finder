<template>
  <ul class="featureList">
    <li v-for="feature in features" :key="feature.id">
      <input class="form-check-input"
        type="checkbox"
        :id="feature.id + 'Check'"
        v-on:change="manageFeature(feature.id)">
      <label class="form-check-label" :for="feature.id + 'Check'">{{ feature.description }}</label>
    </li>
  </ul>
</template>

<script>
  import { store } from "../store.js";

  export default {
    name: 'feature-checkboxes',
    props: {
      features: Array
    },
    methods: {
      manageFeature(id) {
        // Just rely on button toggling to add and remove. The Array starts out
        // empty, so the first click will add, second will remove, etc...
        store.hasFeature(id) ? store.removeFeature(id) : store.addFeature(id);
        console.log(store.state.requiredFeatures)
      }
    }
  }
</script>

<style scoped>

.featureList {
  list-style-type: none;
}

</style>
