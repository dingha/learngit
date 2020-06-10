<!--  -->
<template>
  <div class="d-home-recommend-house">
    <p class="d-home-recommend-house-title">
      <img src="../../../assets/png/home/商品分类@3x.png" alt />
      <span>商品分类</span>
      <span class="d-home-recommend-house-title-all">全部></span>
    </p>
    <div class="d-home-recommend-house-content">
      <van-grid direction="horizontal" :gutter="0" :column-num="1">
        <van-grid-item v-for="(image, index) in datalist" :key="index">
          <div class="d-home-recommend-house-content-content">
            <p>客厅</p>
            <img v-lazy="image[0].imagetop" />
            <p>三抽屉欧式电视机柜</p>
            <label>288￥</label>
            <van-grid direction="vertical" :gutter="0" :column-num="2">
              <van-grid-item v-for="(images, index) in image[1].imagebottom" :key="index">
                <img v-lazy="images" />
                <p>三抽屉欧式电视机柜</p>
                <label>288￥</label>
              </van-grid-item>
            </van-grid>
            <van-button type="default" size="small">查看更多</van-button>
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
      datalist: [
        [
          { imagetop: require("../../../assets/png/home/goods/1@3x.png") },
          {
            imagebottom: [
              require("../../../assets/png/home/goods/2@3x.png"),
              require("../../../assets/png/home/goods/3@3x.png"),
              require("../../../assets/png/home/goods/4@3x.png"),
              require("../../../assets/png/home/goods/5@3x.png")
            ]
          }
        ],
        [
          { imagetop: require("../../../assets/png/home/goods/6@3x.png") },
          {
            imagebottom: [
              require("../../../assets/png/home/goods/7@3x.png"),
              require("../../../assets/png/home/goods/8@3x.png"),
              require("../../../assets/png/home/goods/9@3x.png"),
              require("../../../assets/png/home/goods/10@3x.png")
            ]
          }
        ],
        [
          { imagetop: require("../../../assets/png/home/goods/11@3x.png") },
          {
            imagebottom: [
              require("../../../assets/png/home/goods/12@3x.png"),
              require("../../../assets/png/home/goods/13@3x.png"),
              require("../../../assets/png/home/goods/4@3x.png"),
              require("../../../assets/png/home/goods/15@3x.png")
            ]
          }
        ],
        [
          { imagetop: require("../../../assets/png/home/goods/16@3x.png") },
          {
            imagebottom: [
              require("../../../assets/png/home/goods/17@3x.png"),
              require("../../../assets/png/home/goods/18@3x.png"),
              require("../../../assets/png/home/goods/19@3x.png"),
              require("../../../assets/png/home/goods/20@3x.png")
            ]
          }
        ]
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.d-home-recommend-house {
  .d-home-recommend-house-title {
    margin: 0.1rem 0rem;
    padding: 0.1rem 0rem;
    background: #fff;
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
  .van-grid-item {
    margin: 0.1rem 0rem;
  }
  .d-home-recommend-house-content-content {
    text-align: center;
    p {
      text-align: center;
    }
    label {
      text-align: center;
    }
    img {
      width: 100%;
    }
    .van-grid-item {
      flex-basis: 50%;
      img {
        width: 100%;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
