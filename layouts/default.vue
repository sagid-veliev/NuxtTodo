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
        display: flex;
        width: 1440px;
        background: $theme-color;
        border: 1px solid black;
        margin: auto;
        box-sizing: border-box;
        &_content {
            display: grid;
            grid-template-rows: 35px minmax(900px, auto);
            margin: 32px;
            grid-gap: 16px;
        }
    }
    
</style>