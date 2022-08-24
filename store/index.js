import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCT: (state, product) => {
            state.products.push(product);
        },
    },
    actions: {
        ADD_PRODUCT({commit}, product) {
            commit("SET_PRODUCT", product);
        },
        // SORT_BY_MAX({commit})
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
})
