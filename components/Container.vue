<template>
    <div class="container-product">
        <div class="container-product_form">
            <slot сlass="container-product_form_slot" name="form"></slot>
        </div>
        <div class="container-product_list">
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
@keyframes form_show {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

.container-product {
    display: grid;
    grid-template-columns: 332px 1028px;
    width: 100%;
    min-height: 423px;
    grid-gap: $gap;
}

@media (max-width: 1400px) {
    .container-product {
        flex-direction: column;
        grid-template-columns: 29% 71%;
        justify-content: space-between;
    }
}

@media (max-width: 900px) {
    .container-product {
        grid-template-columns: 100%;
        justify-content: center;
    }
}

@media (max-width: 700px) {

    .container-product {
        &_wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;

            &_btn {
                width: 100%;
                height: 100%;
                border: none;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                background: $theme-color;
                border-radius: 4px;
                color: $font-color;
                font-family: $font;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                transition: 0.2s;

                &:hover {
                    cursor: pointer;
                    color: #5b8d53;
                    background-color: #f8f8f8;
                }
            }
        }
    }
}
</style>