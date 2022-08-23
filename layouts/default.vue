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

export default {
    components: {
        Header
    }
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

    // @media (max-width: 1400px) {
        
    // }
    
</style>