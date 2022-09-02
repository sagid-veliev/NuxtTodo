<template>
    <transition name="cart">
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
                    alt=""
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
    </transition>
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
            this.$emit("delete");
        }
    }
}
</script>
<style lang="scss" scoped>
    
    .cart {
        @include cart_block();
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
            border-radius: 4px 4px 0 0;
            &-block {
                @include image_block();
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