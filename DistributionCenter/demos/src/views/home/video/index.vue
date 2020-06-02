<!--  -->
<template>
  <div class="d-home-recommend-video">
    <p class="d-home-recommend-video-title">
      <img src="../../../assets/png/home/视频@3x.png" alt />
      <span class="d-home-recommend-video-title-title">主题推荐</span>
      <span class="d-home-recommend-video-title-all">全部></span>
    </p>

    <van-grid :column-num="2" :gutter="10">
      <van-grid-item v-for="(image, index) in images" :key="index" text="艺高家居宣传片">
        <img v-lazy="image" />
        <label>{{ videotext[index] }}</label>
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
        require("../../../assets/png/home/视频1@3x.png"),
        require("../../../assets/png/home/视频2@3x.png"),
        require("../../../assets/png/home/视频3@3x.png"),
        require("../../../assets/png/home/视频4@3x.png")
      ],
      videotext: [
        "艺高家居宣传片",
        "艺高家居宣传片",
        "艺高家居宣传片",
        "艺高家居宣传片"
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-recommend-video {
  margin: 0.2rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-video-title {
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-video-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-video-title-all {
      margin-left: auto;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .van-grid {
    .van-grid-item {
      /deep/ {
        .van-grid-item__content {
          padding: 0rem 0rem;
        }
      }
      img {
        width: 100%;
      }
      label {
        padding: 0.1rem 0rem;
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>