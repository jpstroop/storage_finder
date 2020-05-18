<template>
  <ul id="option-list" class="col-sm-7">
    <li v-for="(option, index) in options"
      :key="option.id"
      :id="option.id"
      class="option"
      :class="index % 2 === 0 ? 'even' : 'odd'">
      <h2>{{option.label}}</h2>
      <p>{{option.description}} <a :href="option.url">Learn More...</a></p>
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

</style>
