<template>
    <div class="container-list">
        <VSkeletonCart />
        <VSkeletonCart />
        <VSkeletonCart />
        <VSkeletonCart />
        <VSkeletonCart />
        <VSkeletonCart />
    </div>
</template>
<script>

export default {
    name: "SkeletonList",
}
</script>

<style lang="scss" scoped>
.container-list {
    @include container_list;
}

@media (max-width: 1400px) {
    .container-list {
        grid-template-columns: repeat(3, 31.3%);

    }
}

@media (max-width: 1200px) {
    .container-list {
        grid-template-columns: repeat(2, min(46%));
        justify-content: space-around;
    }
}

@media (max-width: 600px) {
    .container-list {
        grid-template-columns: 70%;
        justify-content: center;
    }
}
</style>