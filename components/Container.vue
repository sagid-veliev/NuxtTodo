<template>
    <div class="container-product">
        <div class="container-product_wrapper">
            <button @click="showForm()" class="container-product_wrapper_btn">{{ textButton }}</button>
        </div>
        <div class="container-product_form">
            <slot v-if="show" сlass="container-product_form_slot" name="form"></slot>
        </div>
        <div class="container-product-list">
            <slot name="list"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "Container",
    data: () => ({
        show: false,
        textButton: "Открыть форму"
    }),
    methods: {
        showForm() {
            this.show = !this.show;
            if (this.show) {
                this.textButton = "Закрыть форму"
            } else {
                this.textButton = "Открыть форму"
            }
            // const form = document.querySelector('.container-product_form');
            // form.style.display = 'flex';
            // this.textButton = "Закрыть форму"
        }
    }
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
        &_wrapper {
            display: none;
        }    
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
        .container-product_form_slot {
            animation: form_show;   
        }

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
                    background: #FFFEFB;
                    border-radius: $radius;
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