<template>
  <div id="app">
    <filterCountries/>
    <Countries/>
  </div>
</template>

<script>
import Countries from './components/Countries.vue'
import filterCountries from "./components/filterCountries.vue";


export default {
  name: 'App',
  components: {
    Countries,
    filterCountries,
  }
}
</script>

<style>
</style>
