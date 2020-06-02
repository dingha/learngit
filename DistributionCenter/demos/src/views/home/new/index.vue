<!--  -->
<template>
  <div class="d-home-recommend-new">
    <p class="d-home-recommend-new-title">
      <img src="../../../assets/png/home/新品@3x.png" alt />
      <span>新品推荐</span>
    </p>
    <van-grid direction="horizontal" :column-num="2" :gutter="0">
      <van-grid-item v-for="(image, index) in images" :key="index" text="文2字">
        <label>
          <p class="d-home-recommend-new-content-title">推荐理由</p>
          <p class="d-home-recommend-new-content-content">{{ titles1[index] }}</p>
          <p class="d-home-recommend-new-content-content">{{ titles2[index] }}</p>
        </label>
        <img v-lazy="image" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      images: [
        require("../../../assets/png/home/新品1、4@3x.png"),
        require("../../../assets/png/home/新品2@3x.png"),
        require("../../../assets/png/home/新品3@3x.png"),
        require("../../../assets/png/home/新品1、4@3x.png")
      ],
      titles1: ["一物两用", "一物两用", "一物两用", "一物两用"],
      titles2: ["小户型必备", "小户型必备", "小户型必备", "小户型必备"]
    };
  }
};
</script>
<style lang="scss" scoped>
// 新品推荐样式
.d-home-recommend-new {
  margin: 0.1rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-new-title {
    padding: 0.1rem 0rem;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    span {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
  }
  .van-grid {
    justify-content: space-between;
    .van-grid-item {
      /deep/ {
        .van-grid-item__content {
          background: url(../../../assets/png/home/新品底纹@3x.png) no-repeat;
          background-size: cover;
        }
      }
      padding: 0.1rem 0.15rem;
      img {
        flex: 1;
        height: 0.8rem;
      }
      label {
        flex: 3;
        .d-home-recommend-new-content-content {
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
}
</style>
