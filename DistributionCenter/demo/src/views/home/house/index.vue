<!--  -->
<template>
  <div class="d-home-recommend-house">
    <p class="d-home-recommend-house-title">
      <img src="../../../assets/png/home/全屋定制小@3x.png" alt />
      <span>全屋定制</span>
      <span class="d-home-recommend-house-title-all">全部></span>
    </p>
    <div class="d-home-recommend-house-content">
      <van-grid direction="vertical" :gutter="0" :column-num="1">
        <van-grid-item v-for="(image, index) in imagestop" :key="index">
          <div class="d-home-recommend-house-content-top">
            <img v-lazy="image" />
            <p>北欧风格小屋全屋设计</p>
          </div>
          <div class="d-home-recommend-house-bottom">
            <van-grid direction="horizontal" :column-num="5" :gutter="0">
              <div class="total">
                共
                <span>{{ imagesbom[1].length }}</span>
                件
              </div>
              <van-grid-item v-for="(images, indexs) in imagesbom[index]" :key="indexs">
                <img v-lazy="images" />
              </van-grid-item>
            </van-grid>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imagesbom: [
        [
          require("../../../assets/png/home/全屋小商品4@3x.png"),
          require("../../../assets/png/home/全屋小商品1@3x.png"),
          require("../../../assets/png/home/全屋小商品2@3x.png"),
          require("../../../assets/png/home/全屋小商品3@3x.png"),
          require("../../../assets/png/home/全屋小商品5@3x.png")
        ],
        [
          require("../../../assets/png/home/全屋小商品1@3x.png"),
          require("../../../assets/png/home/全屋小商品4@3x.png"),
          require("../../../assets/png/home/全屋小商品2@3x.png"),
          require("../../../assets/png/home/全屋小商品3@3x.png"),
          require("../../../assets/png/home/全屋小商品5@3x.png")
        ],
        [
          require("../../../assets/png/home/全屋小商品1@3x.png"),
          require("../../../assets/png/home/全屋小商品2@3x.png"),
          require("../../../assets/png/home/全屋小商品3@3x.png"),
          require("../../../assets/png/home/全屋小商品4@3x.png"),
          require("../../../assets/png/home/全屋小商品5@3x.png")
        ]
      ],
      imagestop: [
        require("../../../assets/png/home/全屋定制1@3x.png"),
        require("../../../assets/png/home/全屋2@3x.png"),
        require("../../../assets/png/home/全屋3@3x.png")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.d-home-recommend-house {
  margin: 0.2rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-house-title {
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-house-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-house-title-all {
      margin-left: auto;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

.d-home-recommend-house-content {
  .d-home-recommend-house-content-top {
    img {
      width: 100%;
    }
    position: relative;
    p {
      padding: 0.1rem 0rem;
      height: rem;
      font-size: 0.32rem;
      color: #fff;
      width: 100%;
      bottom: 0.1rem;
      text-align: center;
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .d-home-recommend-house-bottom {
    .van-grid-item {
      padding: 0.1rem 0.1rem;
      /deep/ {
        .van-grid-item__content {
          padding: 0.1rem 0.2rem;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
        }
      }
    }
    .total {
      line-height: 1.2rem;
      text-align: center;
      z-index: 1;
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      width: calc(20% - 0.2rem);
      height: calc(100% - 0.2rem);
      background: rgba(0, 0, 0, 0.4);
      font-size: 0.26rem;
      color: #fff;
      span {
        font-size: 0.4rem;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>
