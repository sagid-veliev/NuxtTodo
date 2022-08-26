<template>
    <div class="container-list">
        <template v-for="product in PRODUCTS">
            <Cart
                :path="product.image"
                :name="product.name"
                :description="product.description"
                :price="product.price"
            />
        </template>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Cart from './Cart.vue';
export default {
    name: "List",
    components: { Cart },
    // data() {
    //     return {
    //         products: []
    //     }
    // },
    computed: {
        ...mapGetters ([
            "PRODUCTS"
        ])
    },
    // mounted() {
    //     this.products = localStorage.getItem("products");
    // },
    // beforeUpdate() {
    //     localStorage.setItem("products", JSON.stringify(this.PRODUCTS));
    // }
}
</script>
<style lang="scss" scoped>
    .container-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 332px);
        grid-template-rows: minmax(423px, auto);
        grid-gap: $gap;
    }

    @media (max-width: 1400px) {
        .container-list {
            grid-template-columns: repeat(3, 31.3%);
            
        }
    }

    @media (max-width: 1200px) {
        .container-list {
            grid-template-columns: repeat(2, min(46%));
            justify-content: space-around;
        }
    }

    @media (max-width: 700px) {
        .container-list {
            grid-template-columns: 70%;
            justify-content: center;
        }
    }
</style>