<template>
    <div class="cart">
        <div @click="deleteProduct()" class="cart_delete"> 
            <nuxt-img
                class="cart_delete_icon"
                width="16px"
                heigth="16px"
                provider="cloudinary"
                src="/images/delete_1_pokvr2.svg"
            />
        </div>
        <div class="cart_image">
            <nuxt-img
                class="cart_image-block"
                width="332px"
                provider="cloudinary"
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
    },
    methods: {
        deleteProduct() {
            this.$emit('delete');
        }
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
        position: relative;
        width: 100%;
        grid-template-rows: 200px minmax(223px, auto);
        min-height: 423px;
        background: #FFFEFB;
        border-radius: $radius;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02); 
        animation: add-cart 1s ease;
        box-sizing: border-box;
        &:hover {
            cursor: pointer;
        }
        &_delete {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            right: -8px;
            top: -8px;
            background-color: #FF8484;
            width: 32px;
            height: 32px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            &:hover {
                background-color: #ff6b6b;
            }
            &_icon {
                width: 16px;
                height: 16px;
            }
        }
        &_image {
            overflow: hidden;
            border-radius: $radius $radius 0 0;
            &-block {
                position: relative;
                background-image: cover;
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