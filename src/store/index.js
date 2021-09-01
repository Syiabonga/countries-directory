import Vuex from 'vuex'
import Vue from 'vue'
import countries from './modules/countries'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countries
    }
})