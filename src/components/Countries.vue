<template>
  <div class="countries">
      <div class="country" v-for="country in allCountries" :key="country.name">
          <h3>{{country.name}}</h3>
          <button type="button" class="btn btn-primary">Primary</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Countries',
    computed: mapGetters(['allCountries']),
    methods:{
        ...mapActions(['fetchCountries']),
    },
    created(){
        this.fetchCountries();
    }
};
</script>

<style>

</style>