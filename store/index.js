export const state = () => ({
    products: [],
    productsDefault: []    
})

export const mutations = {
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
}

export const actions = {
    ADD_PRODUCT({commit}, product) {
        commit("SET_PRODUCT", product);
    },
    INIT_STATE({commit}) {
        commit('ASSIGN_STATE');
    },
    DELETE_PRODUCT({commit}, index) {
        commit('REMOVE_PRODUCT', index);
    }
}

export const getters = {
    PRODUCTS(state) {
        return state.products;
    }
}

//При сортировке летят ошибки о том, что не нужно изменять значения стейта за пределами mutations
//Сделана попытка клонировать значение массива, но безуспешно
export const strict = false;