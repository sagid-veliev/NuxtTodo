<template>
    <div class="cart">
        <div class="cart_image">
            <nuxt-img
                width="332px"
                provider="cloudinary"
                class="cart_image-block"
                alt="Product image"
                :src="`/images/image_lqkyvb.jpg`"
                fit="cover"
            />
        </div>
        <div class="cart_info">
            <div class="cart_info_name">
                <p>Наименование товара</p>
            </div>   
            <div class="cart_info_description">
                <p>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
            </div>
            <div class="cart_info_price">
                <p>10 000 руб.</p>
            </div>                   
        </div>               
    </div>
</template>
<script>
export default {
    name: "Cart"
}
</script>
<style lang="scss" scoped>
    @mixin info_product($weight, $size, $height) {
        font-family: $font;
        font-weight: $weight;
        font-size: $size;
        line-height: $height;
        color: #3F3F3F;
    }
    .cart {
        display: grid;
        grid-template-rows: 200px minmax(223px, auto);
        min-height: 423px;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: $radius;
        &_image {
            height: 200px;
            position: relative;
            overflow: hidden;
            &-block {
                image-rendering:auto;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                max-width: 100%;
                max-height: 100%;
                margin: auto;
            }
        }
        &_info {
            display: grid;
            grid-gap: $gap;
            margin: 16px;
            &_name p{  
                @include info_product(600, 20px, 25px);
            }
            &_description p {
                @include info_product(400, 16px, 20px);
            }
            &_price p {
                @include info_product(600, 24px, 30px);
            }
        }
    }
</style>