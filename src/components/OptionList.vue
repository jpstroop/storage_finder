<template>
  <ul id="option-list" class="col-sm-7">
    <li v-for="(option, index) in options"
      :key="option.id"
      :id="option.id"
      class="option"
      :class="index % 2 === 0 ? 'even' : 'odd'">
      <h2>{{option.label}}</h2>
      <p>{{option.description}} <a :href="option.url">Learn More...</a></p>
      <ul class='option-features'>
        <li v-for="feature in option.features" :key="option+'-'+feature">{{feature}}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'option-list',
    props: {
      options: Array
    },
    methods: { }
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
}

.option {
  padding: 1rem .5rem;
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
