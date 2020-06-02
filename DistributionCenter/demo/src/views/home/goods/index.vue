<!--  -->
<template>
  <div class="d-home-recommend-goods">
    <p class="d-home-recommend-goods-title">
      <img src="../../../assets/png/home/全屋定制小@3x.png" alt />
      <span>全屋定制</span>
      <span class="d-home-recommend-goods-title-all">全部></span>
    </p>
    <van-grid direction="vertical" :gutter="0" :column-num="1">
      <van-grid-item v-for="(image, index) in imagestop" :key="index"></van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>
<style lang="scss" scoped>
.d-home-recommend-goods {
  margin: 0.2rem 0rem;
  padding: 0rem 0.2rem;
  .d-home-recommend-goods-title {
    background: #fff;
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-goods-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-goods-title-all {
      margin-left: auto;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
