import axios from 'axios'

const state = {
    //array to store all countries
    countries: []
};

const getters = {
    //gt all the countries from the state array
    allCountries: (states) => states.countries
};

const actions = {
    //fuction that gets all the countries
    async fetchCountries({commit}){
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        commit('setCountries',response.data);
    }
    //function to delete a country
    //function to filter countries
};

const mutations = {
    //Send all the countries to the state array
    setCountries: (state, countries) => (state.countries = countries),
};

export default {
    state,
    getters,
    actions,
    mutations,
};