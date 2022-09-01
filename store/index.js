import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        productsDefault: []
    },
    mutations: {
        SET_PRODUCT (state, product) {
            state.products.push(product);
            state.productsDefault.push(product);
        },
        ASSIGN_STATE(state) {
			if (process.client && localStorage.getItem('products') !== "undefined") {
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('products')))
				);
                
			}
		},
        REMOVE_PRODUCT(state, index) {
            state.products.splice(index, 1);
            state.productsDefault.splice(index, 1);
        }
    },
    actions: {
        ADD_PRODUCT({commit}, product) {
            commit("SET_PRODUCT", product);
        },
        INIT_STATE({commit}) {
            commit('ASSIGN_STATE');
        },
        DELETE_PRODUCT({commit}, index) {
            commit('REMOVE_PRODUCT', index);
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
});

store.subscribe((mutation, state) => {
    if(process.client) {
        localStorage.setItem('products', JSON.stringify(state));
    }
});

export default () => store;