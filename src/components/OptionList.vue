<template>
  <ul id="option-list" class="col-sm-8">
    <b-collapse v-for="option in options"
      tag="li" :visible="true"
      :key="option.id" :id="option.id"
      class="option">
      <div class="option-wrapper">
        <h2>{{option.label}}</h2>
        <p>{{option.description}} <a :href="option.url">Learn More...</a></p>
        <ul class='option-features'>
          <li v-for="feature in option.features" :key="option+'-'+feature">{{feature}}</li>
        </ul>
      </div>
    </b-collapse>
  </ul>
</template>

<script>
export default {
  name: 'option-list',
  props: {
    options: Array
  },
  data() {
    return {
      requiredFeatures: this.$store.getters.requiredFeatures
    }
  },
  watch: {
    requiredFeatures(oldRequiredFeatures, newRequiredFeatures) {
      this.filterOptions()
    }
  },
  methods: {
    optionHasAllFeatures(option) {
      return this.requiredFeatures.every(e => option.features.includes(e))
    },
    optionIsCollapsed(option) {
      return document.getElementById(option.id).style.display === 'none'
    },
    filterOptions() {
      var toHide = this.options.filter(o => !this.optionHasAllFeatures(o))
      var toShow = this.options.filter(o => this.optionHasAllFeatures(o))
      for (var i = 0; i < this.options.length; i++) {
        var option = this.options[i]
        if (toHide.includes(option) && !this.optionIsCollapsed(option)) {
          this.$root.$emit('bv::toggle::collapse', option.id)
        }
        if (toShow.includes(option) && this.optionIsCollapsed(option)) {
          this.$root.$emit('bv::toggle::collapse', option.id)
        }
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: x-large;
}

.even {
  background-color: gainsboro;
}

#option-list {
  list-style-type: none;
  text-align: left;
  padding-left: 0;
  margin-left: 0;
  margin-top: -1rem;
}

.option {
  /* This plus option-wrapper below keeps jQuery animations smooth */
  padding: 0;
}

.option-wrapper {
  padding: 1rem 0;
  margin: 0 1rem;
  border-bottom: 1px solid rgba(0,0,0,.125);
}

.option-features {
  padding-left: 0;
  margin-left: -.3rem;
}

.option-features li {
  font-size: smaller;
  font-weight: bold;
  color: white;
  background-color: dimgray;
  display: inline;
  margin: .3rem;
  line-height: 1;
  border: 1px solid dimgray;
  padding: .3rem;
}

</style>
