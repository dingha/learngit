<!--  -->
<template>
  <div class="d-home-recommend-experience">
    <p class="d-home-recommend-experience-title">
      <img src="../../../assets/png/home/体验馆小@3x.png" alt />
      <span>体验馆</span>
      <span class="d-home-recommend-experience-title-all">全部></span>
    </p>
    <van-grid direction="vertical" :gutter="0" :column-num="1">
      <van-grid-item v-for="(data, index) in datalist" :key="index">
        <img v-lazy="data.image" />
        <p>{{data.address}}</p>
        <button>发送至手机</button>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      datalist: [
        {
          image: require("../../../assets/png/home/体验馆1@3x.png"),
          address: "地址:浙江省杭州市余杭区酱酱小镇酿酿大道523号"
        },
        {
          image: require("../../../assets/png/home/体验馆2@3x.png"),
          address: "地址:浙江省杭州市余杭区酱酱小镇酿酿大道523号"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.d-home-recommend-experience {
  margin: 0.1rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-experience-title {
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-experience-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-experience-title-all {
      margin-left: auto;
      color: rgba(162, 162, 162, 1);
    }
  }

  .van-grid-item {
    position: relative;
    height: 4.6rem;
    /deep/ {
      .van-grid-item__content {
        padding: 0rem 0rem;
      }
    }
    img {
      width: 100%;
    }
    p {
      color: rgba(0, 0, 0, 0.7);
      text-align: left;
      width: 100%;
    }
    button {
      position: absolute;
      display: block;
      right: 0.2rem;
      bottom: 0px;
      background: rgba(213, 41, 37, 1);
      color: #fff;
      width: 25%;
      height: 8%;
    }
  }
}
</style>
