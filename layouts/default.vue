<template>
    <div class="container">
        <div class="container_content">
            <Header />
            <Nuxt />
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Cart from "../components/Cart.vue";
import Form from "../components/Form.vue";
import List from "../components/List.vue";
import Skeleton from "../components/Skeleton.vue";
export default {
    components: {
        Header,
        Cart,
        Form,
        List,
        Skeleton
    },
    beforeCreate() {
        this.$store.commit('ASSIGN_STATE');
    },
    created() {
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if(process.client) {
                localStorage.setItem('products', JSON.stringify(state));
            }
        });
    },
    beforeDestroy() {
        this.unsubscribe();
    },
}    

</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        display: grid;
        max-width: 1440px;
        min-height: 900px;
        background: $theme-color;
        margin: auto;
        box-sizing: border-box;
        &_content {
            height: auto;
            display: grid;
            grid-template-rows: 35px auto;
            margin: 32px;
            grid-gap: $gap;
        }
    }

    @media (max-width: 450px) {
        .container_content {
            grid-template-rows: 80px auto; 
            margin: 8px;
        }
    }
    
</style>