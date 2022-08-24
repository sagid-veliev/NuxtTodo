<template>
    <div class="cart">
        <div class="cart_image">
            <nuxt-img
                width="332px"
                provider="cloudinary"
                class="cart_image-block"
                alt="Product image"
                :src="'' + path"
                fit="cover"
            />
        </div>
        <div class="cart_info">
            <div class="cart_info_name">
                <p>{{ name }}</p>
            </div>   
            <div class="cart_info_description">
                <p>{{ description }}</p>
            </div>  
            <div class="cart_info_price">
                <p>{{ price }} руб.</p>
            </div>                   
        </div>               
    </div>
</template>
<script>
export default {
    name: "Cart",
    props: {
        path: String,
        name: String,
        description: String,
        price: String
    }
}
</script>
<style lang="scss" scoped>
    @mixin info_product($weight, $size, $height) {
        font-family: $font;
        font-weight: $weight;
        font-size: $size;
        line-height: $height;
        color: #3F3F3F;
        background: #FFFEFB;
        word-break: break-word;
    }

    @keyframes add-cart {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    .cart {
        display: grid;
        width: 100%;
        grid-template-rows: 200px minmax(223px, auto);
        min-height: 423px;
        background: #FFFEFB;
        border-radius: $radius;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        animation: add-cart;
        animation-duration: 1s;
        animation-timing-function: ease;
        &_image {
            position: relative;
            overflow: hidden;
            border-radius: $radius $radius 0 0;
            &-block {
                background-image: cover;
                position: absolute;
                z-index: 10;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                margin: auto;
            }
        }
        &_info {
            display: flex;
            flex-direction: column;
            grid-gap: $gap;
            margin: 16px;
            box-sizing: border-box;
            &_name {  
                @include info_product(600, 20px, 25px);
            }
            &_description {
                @include info_product(400, 16px, 20px);
                margin-bottom: 16px;
            }
            &_price {
                @include info_product(600, 24px, 30px);
                margin-top: auto;
            }
        }
    }
</style>