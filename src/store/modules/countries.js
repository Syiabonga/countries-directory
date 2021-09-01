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
    },
    //function to delete a country
    async deleteCountry({commit}, name){
        const response = await axios.delete(`https://restcountries.eu/rest/v2/name/${name}`);
        commit('removeCountry', name)
    },
    //function to filter countries by number
    async filterCountries({commit}, e){
        const region = e.target.options[e.target.options.selectedIndex].innerText;
        const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`);
        commit('setCountries', response.data);
    }
    //filter to filter by continent
};

const mutations = {
    //Send all the countries to the state array
    setCountries: (state, countries) => (state.countries = countries),
    removeCountry: (state, name) => 
        (state.countries = states.countries.filter(country => country.name !== name))
};

export default {
    state,
    getters,
    actions,
    mutations,
};