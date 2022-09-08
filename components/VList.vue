<template>
    <div class="container-list">
        <Transition v-for="(product, index) in PRODUCTS" :key="index" appear name="cart" tag="template">
            <VCart 
                :path="product.image" 
                :name="product.name" 
                :description="product.description"
                :price="product.price" 
                @delete="deleteProduct(index)" 
            />
        </Transition>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "List",
    data() {
        return {
            showSkeleton: true,
        }
    },
    computed: {
        ...mapGetters([
            "PRODUCTS",
        ])
    },
    methods: {
        ...mapActions([
            "DELETE_PRODUCT",
        ]),
        deleteProduct(index) {
            this.DELETE_PRODUCT(index);
        }
    },
}
</script>

<style lang="scss" scoped>
.cart-enter-active,
.cart-leave-active {
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
    @include container_list;
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