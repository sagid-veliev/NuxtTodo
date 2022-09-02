<template>
    <div class="container-list" >
        <template v-if="showSkeleton">
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </template>
        <template>
            <transition v-for="(product, index) in PRODUCTS" :key="index" appear name="cart">
                <Cart
                    :path="product.image"
                    :name="product.name"
                    :description="product.description"
                    :price="product.price"
                    @delete="deleteProduct(index)"
                />
            </transition>
        </template>
    </div>
</template>
<script>
export default {
    name: "List",
    data() {
        return {
            showSkeleton: true
        }
    },
    computed: {
        PRODUCTS() {
            return this.$store.getters.PRODUCTS.slice();
        }
    },
    methods: {
        deleteProduct(index) {
            this.$store.dispatch("DELETE_PRODUCT", index);
        }
    },
    mounted() {
        this.showSkeleton = false;
    }
}
</script>

<style lang="scss" scoped>
    .cart-enter-active, .cart-leave-active {
        transition: all .7s;
    }
    .cart-enter {
        transform: translateX(33%);
        opacity: 0;
    }
    .cart-leave-to {
        transform: translateX(-100%);
        opacity: 0;
    }
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

    @media (max-width: 600px) {
        .container-list {
            grid-template-columns: 70%;
            justify-content: center;
        }
    }
</style>