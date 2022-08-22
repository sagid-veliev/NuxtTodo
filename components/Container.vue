<template>
    <div class="container-product">
        <div class="container-product_wrapper">
            <button v-if="show" @click="showForm()" class="container-product_wrapper_btn">Открыть форму</button>
        </div>
        <div class="container-product_form">
            <slot сlass="container-product_form_slot" name="form"></slot>
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
        show: true
    }),
    methods: {
        showForm() {
            const form = document.querySelector('.container-product_form');
            form.style.display = 'flex';
            console.log(form);
        }
    }
}
</script>
<style lang="scss">
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
        .container-product {
            &_form {
                display: none;
            }
            &_wrapper {
                display: flex;
                align-items: center;
                justify-content: center; 
                &_btn { 
                    width: 70%;  
                    border: none;
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                    height: 30px;
                    background: #FFFEFB;
                    border-radius: $radius;
                }
            }
        }
    }
</style>