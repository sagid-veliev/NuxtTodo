<template>
    <TheContainer>
        <template #form>
            <div class="form">
                <TheForm />
            </div>
        </template>
        <template #list>
            <div class="list">
                <VSkeletonList v-if="showSkeleton" />
                <VList v-else/>
            </div>
        </template>
    </TheContainer>
</template>

<script>
export default {
    name: "IndexPage",
    mounted() {
        this.showSkeleton = false;
    },
    data() {
        return {
            showSkeleton: true
        }
    },
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    width: 100%;
    height: 440px;
    background: $theme-color;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}

.list {
    display: flex;
    width: 100%;
    height: auto;
    gap: 16px;
}
</style>
