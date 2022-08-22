import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCT: (state, product) => {
            state.products.unshift(product);
        },
    },
    actions: {
        ADD_PRODUCT({commit}, product) {
            commit("SET_PRODUCT", product);
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
})
