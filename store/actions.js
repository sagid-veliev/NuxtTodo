export default {
    ADD_PRODUCT({commit}, product) {
        commit("SET_PRODUCT", product);
    },
    INIT_STATE({commit}) {
        commit('ASSIGN_STATE');
    },
    DELETE_PRODUCT({commit}, index) {
        commit('REMOVE_PRODUCT', index);
    }
};