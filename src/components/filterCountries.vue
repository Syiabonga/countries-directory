<template>
  <div>
<select @change="filterCountries($event)" class="form-select" aria-label="Default select example">
  <option selected>Europe</option>
  <option value="Africa">Africa</option>
  <option value="Americas">Americas</option>
  <option value="Asia">Asia</option>
  <option value="Oceania">Oceania</option>
</select>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    name: 'filterCountries',
    methods: mapActions(['filterCountries']) 
}
</script>

<style>

</style>