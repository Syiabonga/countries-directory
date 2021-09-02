<template>
  <div class="container-fluid">
      <div class="row text-center bg-pic" >
          <div class="col-md-4 col-style" v-for="country in allCountries" :key="country.name">
              <div class="card card-style" style="width: 18rem;">
                <img :src=country.flag class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{country.name}}</h5>
                    <p class="card-text">
                        <ul>
                            <li>Capital: {{country.capital}}</li>
                            <li>Region: {{country.region}}</li>
                            <li>Area: {{country.area}} km²</li>
                        </ul>
                    </p>
                </div>
                </div>
          </div>
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

<style scoped>
.card-style{
    margin: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto 
}
.card{
    min-height: 350px;
}
.bg-pic{
    background-image: url("../assets/img3.jpg");
    min-height: 900px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
ul{
    text-align: left;
}
</style>