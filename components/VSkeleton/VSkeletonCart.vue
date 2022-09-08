<template>
    <div class="skeleton">
        <div class="skeleton_image"></div>
        <div class="skeleton_info">
            <div class="skeleton_info_name"></div>
            <div class="skeleton_info_price"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Skeleton"
}
</script>
<style lang="scss" scoped>
@keyframes skeleton-loading {
    0% {
        background-color: hsla(120, 20%, 70%, 0.5);
    }

    100% {
        background-color: hsla(120, 20%, 90%, 0.5);
    }
}

.skeleton {
    @include cart_block();

    &_image {
        overflow: hidden;
        border-radius: 4px 4px 0 0;
        animation: $skeleton;

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
            width: 100%;
            height: 25px;
            animation: $skeleton;
            border-radius: 4px;
        }

        &_price {
            @include info_product(600, 24px, 30px);
            width: 100%;
            height: 30px;
            margin-top: auto;
            border-radius: 4px;
            animation: $skeleton;
        }
    }
}
</style>