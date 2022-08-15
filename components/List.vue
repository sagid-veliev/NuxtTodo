<template>
    <div class="container-list">
        <div class="container-list_item">
            daasdasdsasdadsda
        </div>
        <div class="container-list_item">
            daasdasdsasdadsda
        </div>
        <div class="container-list_item">
            daasdasdsasdadsda
        </div>
        <div class="container-list_item">
            daasdasdsasdadsda
        </div>
    </div>
</template>
<script>
export default {
    name: "List"
}
</script>
<style lang="scss" scoped>
    .container-list {
        display: grid;
        grid-template-columns: repeat(3, 332px);
        grid-auto-rows: minmax(423px, auto);
        grid-gap: $gap;
        border: 1px solid black;
        &_item {
            background: #FFFEFB;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
            border-radius: 4px;
        }
    }
</style>