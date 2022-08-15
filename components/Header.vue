<template>
    <nav class="header">
        <div class="header_title">
            <h1>Добавление товара</h1>
        </div>
        <div class="header_select-wrapper">
            <div class="header_select-wrapper_select">
                <div class="header_select-wrapper_select_text">
                    <p>По умолчанию</p>
                </div>
                <div class="header_select-wrapper_select_icon"></div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style lang="scss" scoped>
    .header {
        display: $flex;        
        justify-content: space-between;
        height: 100%;
        border: 1px solid black;
        &_title h1 {
            width: 247px;
            height: 100%;
            font-family: $font;
            font-weight: 600;
            font-size: 28px;
            color: #3F3F3F;
        }
        &_select-wrapper {
            display: $flex;
            justify-content: $block-center;
            align-items: $block-center;
            width: 121px;
            height: 100%;
            background: #FFFEFB;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            &_select {
                display: $flex;
                flex-direction: row;
                align-items: $block-center;
                justify-content: space-between;
                width: 90px;
                height: $line-height;
                &_text {
                    font-family: $font;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: $line-height;
                    color: $font-color;
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
                }
            }
        }
    }
</style>