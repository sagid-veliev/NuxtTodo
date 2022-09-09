<template>
    <nav class="header">
        <div class="header_title">
            <h1>Добавление товара</h1>
        </div>
        <div :class="{ header_select: true, header_select_open: show }" @click="toggleOptions">
            <div class="header_select_wrapper">
                <div class="header_select_wrapper_value">{{ selected }}</div>
                <div :class="{ header_select_wrapper_icon: true, header_select_wrapper_icon_open: show }"></div>
            </div>
            <div v-show="show" class="header_select_options">
                <div 
                    class="header_select_options_item"
                    v-for="option in options"  
                    :key="option.value"
                    @click="sortProducts(option)">
                    <span>{{ option.label }}</span>
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
                { label: "По умолчанию", value: "default" },
                { label: "По убыванию", value: "min" },
                { label: "По возрастанию", value: "max" },
                { label: "По наименованию", value: "name" },
            ],
            selected: "По умолчанию",
        }
    },
    methods: {
        toggleOptions() {
            // открытия селекта
            // toggleOptions(Timeout) -> closeOptions(не пройден if) -> toggleOptions(show = true) = селект открылся
            // закрытие селекта
            // toggleOptions(timeout) -> closeOptions(timeout) -> toggleOptions(show = false) -> closeOptions(не пройдет if) = селект закрылся
            setTimeout(() => {
                this.show = !this.show;
            })
        },
        parsePrice(value) {
            return Number(value.replace(/\s+/g, ''));
        },
        sortProducts(option) {
            this.selected = option.label;
            const cartNode = document.querySelectorAll(".cart");
            cartNode.forEach(el => el.classList.add("animate"));
            setTimeout(() => {
                cartNode.forEach(el => el.classList.remove("animate"));
            }, 500)
            this.switchProducts(option.value);
        },
        switchProducts(option) {
            switch (option) {
                case "default":
                    this.$store.state.products = [].concat(this.$store.state.productsDefault);
                    break;
                case "min":
                    this.$store.state.products = [].concat(this.$store.state.products).sort((a, b) => {
                        return this.parsePrice(b.price) - this.parsePrice(a.price);
                    })
                    break;
                case "max":
                    this.$store.state.products = [].concat(this.$store.state.products).sort((a, b) => {
                        return this.parsePrice(a.price) - this.parsePrice(b.price);
                    })
                    break;
                case "name":
                    this.$store.state.products = [].concat(this.$store.state.products).sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        } else if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes select {
    0% {
        line-height: 0px;
        opacity: 0;
    }

    100% {
        opacity: 1;
        line-height: 35px;
    }
}

.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    user-select: none;
    &_title h1 {
        width: 247px;
        height: 100%;
        font-family: $font;
        font-weight: 600;
        font-size: 28px;
        color: #3F3F3F;
        word-break: break-all;
        overflow: hidden;
    }

    &_select {
        position: relative;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 121px;
        min-height: 100%;
        background: $theme-color;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
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
            height: $line-height;
            width: 90px;

            &_value {
                font-family: $font;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: $line-height;
                color: $font-color;
                border: none;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            &_icon {
                display: flex;
                align-items: center;
                width: 5px;
                height: 5px;
                border-bottom: $select-icon;
                border-right: $select-icon;
                transform: rotate(45deg);
                box-sizing: border-box;
                transition: 0.5s ease-in;

                &_open {
                    transform: rotate(-135deg);
                }
            }
        }

        &_options {
            position: absolute;
            top: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: $theme-color;
            box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
            border-radius: 0 0 4px 4px;
            box-sizing: border-box;

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
                animation: select .2s linear;

                &:hover {
                    width: 100%;
                    font-weight: 600;
                    background-color: #f8f8f8;
                    color: #5b8d53;
                }
            }

        }
    }
}

@media (max-width: 450px) {
    .header {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &_adaptive {
            width: 100%;
        }

        &_select {
            width: 100%;
            height: 35px;
        }
    }
}
</style>