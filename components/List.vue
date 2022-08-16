<template>
    <div class="container-list">
        <div class="container-list_item">
            <div class="container-list_item_image">
                <nuxt-img
                    width="332px"
                    provider="cloudinary"
                    class="container-list_item_image-block"
                    alt="Product image"
                    :src="`/images/image_lqkyvb.jpg`"
                    fit="cover"
                />
            </div>
            <div>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
                <p>adssssssssssssssssssss</p>
            </div>
            
        </div>     
    </div>
</template>
<script>
export default {
    name: "List"
}
</script>
<style lang="scss" scoped>
    .container-list {
        display: grid;
        grid-template-columns: repeat(3, 332px);
        grid-template-rows: min(423px);
        grid-gap: $gap;
        border: 1px solid black;
        &_item {
            display: grid;
            grid-template-rows: 200px min(223px);
            min-height: 423px;
            background: #FFFEFB;
            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
            border-radius: 4px;
            &_image {
                height: 200px;
                position: relative;
                overflow: hidden;
                &-block {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    max-width: 100%;
                    max-height: 100%;
                    margin: auto;
                }
            }
        }
        
    }
</style>