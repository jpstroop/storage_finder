<template>
  <ul id="feature-categories" class="col-sm-4 list-group">
    <li v-for="category in categories" :key="category.id" class="list-group-item">
      <p class="font-weight-bold description" :id="category.id+'Desc'">
        {{ category.description }}
        <b-icon-info-circle v-b-toggle="category.id+'Long'" class='info-icon when-closed' variant="primary"></b-icon-info-circle>
      </p>
      <b-collapse :id="category.id+'Long'">
        <b-card>
          <b-icon-x-square v-b-toggle="category.id+'Long'" variant="danger" class="close-description"></b-icon-x-square>
          <div class="long-description" v-html="category.longDescription"></div>
        </b-card>
      </b-collapse>

      <feature-checkboxes :features="filterFeaturesByCategory(category.id)"/>

    </li>
  </ul>
</template>

<script>
import FeatureCheckboxes from '@/components/FeatureCheckboxes.vue'

export default {
  name: 'feature-categories',
  components: {
    FeatureCheckboxes
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

<style>
/* .long-description includes html that is rendered from JSON strings and
 * scoped CSS does not work on its children.
 */
.long-description > * {
  margin-bottom: .5rem;
}

.long-description {
  margin-bottom: -.5rem;
  font-size: smaller;
}
</style>

<style scoped>

#feature-categories {
  padding-right: 0;
  margin-right: 0;
}

.list-group-item {
  text-align: left;
}

.description {
  margin-bottom: .2rem;
}

.info-icon {
  margin-left: .2rem;
  vertical-align: -0.2em;
}

.card {
  margin-bottom: .3rem;
}

.card-body {
  padding: .75rem 1.25rem;
}

.close-description {
  float: right;
  margin: -.5rem -1rem .5rem 1rem;
}

.not-collapsed.when-closed {
  display: none;
}

.list-group-item {
  margin: auto 1rem;
}

</style>
