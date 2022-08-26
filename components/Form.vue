<template>
    <form class="container-form" @submit.prevent="addProduct(name, description, image, price)">
        <div class="container-form_name">
            <div class="invalid-wrapper">
                <label class="container-form_name_label" for="name">Наименование товара</label>
                <div class="invalid-star"></div>
            </div>
            <input 
                v-model.trim="name" 
                class="container-form_name_input"
                :class="{ invalid: $v.name.$dirty && !$v.name.required }"
                type="text" 
                name="product-name" 
                placeholder="Введите наименование товара"
            >
            <small
                class="invalid-text"
                v-if="$v.name.$dirty && !$v.name.required"
            >{{ warning }}</small>
        </div>
        <div class="container-form_description">
            <label class="container-form_description_label" for="description">Описание товара</label>
            <textarea 
                v-model="description" 
                class="container-form_description_input" 
                type="text" 
                name="product-description" 
                placeholder="Введите описание товара"
            ></textarea>
        </div>
        <div class="container-form_image">
            <div class="invalid-wrapper">
                <label class="container-form_image_label" for="image">Ссылка на изображение товара</label>
                <div class="invalid-star"></div>

            </div>
            <input 
                v-model="image" 
                class="container-form_image_input" 
                :class="{ invalid: $v.image.$dirty && !$v.image.required }"
                type="text" 
                name="product-image" 
                placeholder="Введите ссылку"
            >
            <small
                class="invalid-text"
                v-if="$v.image.$dirty && !$v.image.required"
            >{{ warning }}</small>
        </div>
        <div class="container-form_price">
            <div class="invalid-wrapper">
                <label class="container-form_price_label" for="name">Цена товара</label>
                <div class="invalid-star"></div>        
            </div>
            <input 
                v-model="priceMask" 
                class="container-form_price_input" 
                type="text"
                :class="{ invalid: $v.price.$dirty && !$v.price.required}"
                name="product-price" 
                placeholder="Введите цену"
            >
            <small
                class="invalid-text"
                v-if="$v.price.$dirty && !$v.price.required"
            >{{ warning }}</small>
        </div>
        <button type="submit" class="container-form_button" :disabled="$v.$invalid && $v.$error">Добавить товар</button>       
    </form>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
    name: "Form",
    data: () => ({
        name: "",
        description: "",
        image: "",
        price: "",
        warning: "Поле является обязательным"
    }),
    validations: {
        name: {required},
        image: {required},
        price: {required}
    },
    computed: {
       priceMask: {
            get() {
                return this.price;
            },
            set(value) {
                this.price = value.replace(/\s+/g, '').split('').map((num, i, arr) => {
                    return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1 ? num + ' ': num
                })
                .join('');
            }  
        }
    },
    methods: {
        ...mapActions([
            'ADD_PRODUCT'
        ]),
        addProduct(name, description, image, price) {
            this.$v.$touch();
            if (this.$v.$invalid) {
                return
            } else {
                //для корректной сортировки по наименованию
                name = name[0].toUpperCase() + name.slice(1);
                this.ADD_PRODUCT({name, description, image, price});
                console.log({ name, description, image, price });
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @mixin label() {
        font-family: $font;
        font-size: 10px;
        letter-spacing: -0.02em;
        color: #49485E; 
    }
    @mixin input() {
        height: 36px;
        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: $radius;
        border: none;
        font-family: $font;
        font-size: 12px;
        line-height: $line-height;
        padding: 10px 16px;
        outline: none; 
        margin: 4px 0; 
        &:focus {
            border: 1px solid #7BAE73;
        } 
        &::placeholder {
            color: $font-color;
        }
    }
    @mixin block() {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .container-form {
        display: grid;
        grid-template-rows: 53px 125px repeat(2, 53px);
        grid-gap: $gap;
        width: 100%;
        margin: 24px;
        background-color: #FFFEFB;
        &_name {
            @include block();
            &_label {
                @include label();
            }
            &_input {
                @include input();
            }
        }
        &_description {
            @include block();
            &_label {
               @include label();
            }
            &_input {
                background: #FFFEFB;
                overflow: hidden;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: $radius;
                height: 108px;
                font-family: $font;
                font-size: 12px;
                line-height: $line-height;
                padding: 10px $gap;
                border: none;
                outline: none;   
                resize: none;
                border: 1px solid rgba(0, 0, 0, 0);
                &:focus {
                    border: 1px solid #7BAE73;
                } 
                &::placeholder {
                    color: $font-color;
                }
            }
        }
        &_image {
            @include block();
            &_label {
                @include label();
            }
            &_input {
                @include input();
            }
        }
        &_price {
            @include block();
            &_label {
                @include label();
            }
            &_input {
                @include input();
            }
        }
        &_button {
            background: #7BAE73;
            border-radius: 10px;
            border: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: $line-height;
            text-align: center;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            transition: 0.2s;
            &:hover {
                background-color: #5b8d53;
                color: #FFFEFF;
                cursor: pointer;            
            }
            &:disabled {
                background: #EEEEEE;
                color: $font-color;
                cursor: auto;
            }
        }
    }            
    .invalid {
        border: 1px solid #FF8484;
        &-wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
        &-text {
            color: #FF8484;
            font-family: $font;
            font-size: 10px;
        }
        &-star {
            width: 4px;
            height: 4px;
            border-radius: 4px;
            background-color: #FF8484;
        }
    }
</style>