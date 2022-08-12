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
        height: 900px;
        background: $theme-color;
        border: 1px solid black;
        margin: auto;
        box-sizing: border-box;
        &_content {
            margin: 32px;
            grid-gap: 16px;
        }
    }
    
</style>