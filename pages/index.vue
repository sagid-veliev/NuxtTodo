<template>
    <Container>
      <template #form>
        <div class="form">
          <Form />
        </div>
      </template>
      <template #list>
        <div class="list">
          <List />
        </div>
      </template>
    </Container>
</template>

<script>
export default {
    name: "IndexPage",
    layout: "default"
}
</script>

<style lang="scss" scoped>
  .form {
      display: flex;
      width: 100%;
      height: 440px;
      background: #FFFEFB;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: $radius;
  }
  .list {
      display: flex;
      width: 100%;
      height: auto;
  }
</style>
