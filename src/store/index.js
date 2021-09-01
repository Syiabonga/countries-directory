import Vuex from 'vuex'
import Vue from 'vue'
import countries from './modules/countries'

//load vuex
Vue.use(Vuex)

//create store
export default new Vuex.Store({
    modules:{
        countries,
    }
});