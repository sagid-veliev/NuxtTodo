<template>
    <form class="container-form">
        <div class="container-form_name">
            <label class="container-form_name_label" for="name">Наименование товара</label>
            <input class="container-form_name_input" type="text" id="name" name="product-name" placeholder="Введите наименование товара">
        </div>
        <div class="container-form_description">
            <label class="container-form_description_label" for="description">Описание товара</label>
            <textarea class="container-form_description_input" type="text" id="description" name="product-description" placeholder="Введите описание товара"></textarea>
        </div>
        <div class="container-form_image">
            <label class="container-form_image_label" for="image">Ссылка на изображение товара</label>
            <input class="container-form_image_input" type="text" id="image" name="product-image" placeholder="Введите ссылку">
        </div>
        <div class="container-form_price">
            <label class="container-form_price_label" for="name">Цена товара</label>
            <input class="container-form_price_input" type="text" id="name" name="product-price" placeholder="Введите цену">
        </div>
        <button class="container-form_button">Добавить товар</button>
    </form>
</template>
<script>
export default {
    name: "Form"
}
</script>
<style lang="scss" scoped>
    .container-form {
        display: grid;
        grid-template-rows: 53px 125px repeat(2, 53px);
        grid-gap: 16px;
        width: 100%;
        margin: 24px;
        &_name {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_label {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                letter-spacing: -0.02em;
                color: #49485E;
            }
            &_input {
                height: 36px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                border: none;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                padding: 10px 16px;
                color: #B4B4B4;
                &::placeholder {
                    color: #B4B4B4;
                }
            }
        }
        &_description {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_label {
                 color:red;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                letter-spacing: -0.02em;
                color: #49485E;
            }
            &_input {
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                height: 108px;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                padding: 10px 16px;
                color: #B4B4B4;
                border: none;
                resize: none;
                &::placeholder {
                    color: #B4B4B4;
                }
            }
        }
        &_image {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_label {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                letter-spacing: -0.02em;
                color: #49485E;
            }
            &_input {
                height: 36px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                border: none;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                padding: 10px 16px;
                color: #B4B4B4;
                &::placeholder {
                    color: #B4B4B4;
                }
            }
        }
        &_price {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &_label {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 10px;
                letter-spacing: -0.02em;
                color: #49485E;
            }
            &_input {
                height: 36px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                border: none;
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                padding: 10px 16px;
                color: #B4B4B4;
                &::placeholder {
                    color: #B4B4B4;
                }
            }
        }
        &_button {
            background: #EEEEEE;
            border-radius: 10px;
            border: none;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: -0.02em;
            color: #B4B4B4;
        }
    }    
</style>