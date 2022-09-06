<template>
    <div class="skeleton">
        <div class="skeleton_image"></div>
        <div class="skeleton_info">
            <div class="skeleton_info_name"></div>
            <div class="skeleton_info_description"></div>
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
        animation: skeleton-loading 1s linear infinite alternate;

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
            animation: skeleton-loading 1s linear infinite alternate;
            @include info_product(600, 20px, 25px);
        }

        &_description {
            @include info_product(400, 16px, 20px);
            margin-bottom: 16px;
            animation: skeleton-loading 1s linear infinite alternate;
        }

        &_price {
            @include info_product(600, 24px, 30px);
            margin-top: auto;
            animation: skeleton-loading 1s linear infinite alternate;
        }
    }
}
</style>