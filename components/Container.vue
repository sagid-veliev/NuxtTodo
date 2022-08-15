<template>
    <div class="container-product">
        <div class="container-product_form">
            <slot name="form"></slot>
        </div>
        <div class="container-product-list">
            <slot name="list"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Container"
}
</script>
<style lang="scss">
    .container-product {
        display: grid;
        grid-template-columns: 332px 1028px;
        grid-gap: 16px;
        border: 1px solid black;
    }
</style>