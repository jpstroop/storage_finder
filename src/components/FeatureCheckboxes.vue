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

export default {
  name: 'feature-checkboxes',
  props: {
    features: Array
  },
  methods: {
    addFeature(id) {
      this.$store.commit('addFeature', { featureId: id })
    },
    removeFeature(id) {
      this.$store.commit('removeFeature', { featureId: id })
    },
    storeHasFeature(id) {
      return this.$store.getters.requiredFeatures.includes(id)
    },
    manageFeature(id) {
      // Just rely on button toggling to add and remove. The Array starts out
      // empty, so the first click will add, second will remove, etc...
      this.storeHasFeature(id) ? this.removeFeature(id) : this.addFeature(id)
      // console.log(this.$store.state.requiredFeatures)
    }
  }
}
</script>

<style scoped>

.featureList {
  list-style-type: none;
}

</style>
