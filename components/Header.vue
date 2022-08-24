<template>
    <nav class="header">
        <div class="header_title">
            <h1>Добавление товара</h1>
        </div>
        <div style="display: flex; flex-direction:column;">
            <div :class="{ header_select : true, header_select_open : show }" @click="selectAction()">
                <div class="header_select_wrapper">
                    <div class="header_select_wrapper_value">По умолчанию</div>
                    <div :class="{ header_select_wrapper_icon : true, header_select_wrapper_icon_open : show }"></div>
                </div>
                <div v-show="show" class="header_select_options">
                    <div
                        v-for="option in options"
                        class="header_select_options_item"
                        @click="sortProducts(option.value)"
                    >
                        <span>{{option.label}}</span>
                    </div>
                </div>
            </div> 
        </div>
    </nav>
</template>

<script> 
export default {
    name: "Header",
    data() {
        return {
            show: false,
            options: [
                {label: "По умолчанию", value: "default"},
                {label: "По убыванию", value: "min"},
                {label: "По возрастанию", value: "max"},
            ]
        }
    },
    methods: {
        selectAction() {
            this.show = !this.show;
        },
        parsePrice (value) {
            return Number(value.replace(/\s+/g, ''));
        },
        sortProducts(option) {
            switch (option) {
                case "max": 
                    this.$store.state.products = this.$store.state.products.sort((a, b) => {
                        return this.parsePrice(a.price) - this.parsePrice(b.price);
                    })
                    break;
                case "min":
                    this.$store.state.products = this.$store.state.products.sort((a, b) => {
                        return this.parsePrice(b.price) - this.parsePrice(a.price);
                    })
                    break;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .header {
        display: $flex;     
        width: 100%;
        justify-content: space-between;
        height: 100%;
        &_title h1 {
            width: 247px;
            height: 100%;
            font-family: $font;
            font-weight: 600;
            font-size: 28px;
            color: #3F3F3F;
        }
        &_select {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 121px;
            min-height: 100%;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: $radius;
            box-sizing: border-box; 
            &:hover {
                cursor: pointer;
            }
            &_open {
                border-radius: 4px 4px 0 0;
            }
            &_wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 90px;
                height: $line-height;
                &_value {
                    font-family: $font;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: $line-height;
                    color: $font-color;
                    border: none;
                }
                &_icon {
                    display: $flex;
                    align-items: $block-center;
                    width: 5px;
                    height: 5px;
                    border-bottom: $select-icon;
                    border-right: $select-icon;
                    transform: rotate(45deg);
                    box-sizing: border-box;
                    transition: 0.5s;
                    &_open {
                        transform: rotate(-135deg);
                    }
                }
            }
            &_options {
                position: absolute;
                z-index: 1000;
                top: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                background: #FFFEFB;
                box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
                border-radius: 0 0 4px 4px;
                transition: all 0.3s ease-out;
                &_item {
                    width: 100px;
                    text-align: center;
                    font-family: $font;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 35px;
                    color: $font-color;
                    border: none;
                    border-bottom: 1px solid rgba(0, 0, 0, 0);
                    &:hover {
                        width: 100%;
                        background-color: #EEEEEE;
                        color: #5b8d53;
                        border-bottom: 1px solid #5b8d53;
                    }
                }
            }
        }
    }
</style>