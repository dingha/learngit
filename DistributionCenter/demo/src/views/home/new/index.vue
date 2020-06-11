<!--  -->
<template>
  <div class="d-home-recommend-new">
    <p class="d-home-recommend-new-title">
      <img src="../../../assets/png/home/新品@3x.png" alt />
      <span>新品推荐</span>
    </p>
    <van-grid direction="horizontal" :column-num="2" :gutter="0">
      <van-grid-item
        @click="gotoparameter"
        v-for="(data, index) in datalist"
        :key="index"
        text="文2字"
      >
        <label>
          <p>推荐理由</p>
          <p>{{ data.titles1 }}</p>
          <p>{{ data.titles2 }}</p>
        </label>
        <div class="img">
          <img v-lazy="data.image" />
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    gotoparameter() {
      this.$router.push({ path: "/home/parameter" });
    }
  },
  data() {
    return {
      datalist: [
        {
          image: require("../../../assets/png/home/新品1、4@3x.png"),
          titles1: "一物两用",
          titles2: "小户型必备"
        },
        {
          image: require("../../../assets/png/home/新品2@3x.png"),
          titles1: "一物两用",
          titles2: "小户型必备"
        },
        {
          image: require("../../../assets/png/home/新品3@3x.png"),
          titles1: "一物两用",
          titles2: "小户型必备"
        },
        {
          image: require("../../../assets/png/home/新品1、4@3x.png"),
          titles1: "一物两用",
          titles2: "小户型必备"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
// 新品推荐样式
.d-home-recommend-new {
  width: calc(100% - 0.4rem);
  height: 35%;
  margin: 0.1rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-new-title {
    padding: 2.5% 0rem;
    height: 10%;
    width: 100%;
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
  /deep/ {
    .van-hairline--top::after {
      border-top-width: 0px;
    }
    .van-grid {
      height: calc(85% - 0.4rem);
      width: 100%;
      justify-content: space-between;

      .van-grid-item {
        .van-grid-item__content {
          padding: 1px 1px;
          background: url(../../../assets/png/home/新品底纹@3x.png) no-repeat;
          background-size: cover;
        }
        padding: 0.1rem 0.15rem;
        .img {
          flex: 1;
          text-align: center;
          img {
            height: 0.8rem;
          }
        }
        label {
          text-align: center;
          flex: 1;
          p + p {
            color: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }
  }
}
</style>
