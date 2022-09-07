export default {
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
};