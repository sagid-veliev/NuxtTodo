<template>
    <div class="container-list">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
    </div>
</template>
<script>
import Cart from './Cart.vue';
export default {
    name: "List",
    components: { Cart }
}
</script>
<style lang="scss" scoped>
    .container-list {
        display: grid;
        grid-template-columns: repeat(3, 332px);
        grid-template-rows: minmax(423px, auto);
        grid-gap: $gap;
    }
</style>