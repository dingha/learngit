<!--  -->
<template>
  <div class="d-home-recommend-theme">
    <p class="d-home-recommend-theme-title">
      <img src="../../../assets/png/home/主题推荐@3x.png" alt />
      <span class="d-home-recommend-theme-title-title">主题推荐</span>
      <span class="d-home-recommend-theme-title-all">全部></span>
    </p>
    <van-swipe :loop="false" :width="150" :show-indicators="false">
      <van-swipe-item @click="gotoparameter" v-for="(data, index) in datalist" :key="index">
        <img v-lazy="data.image" />
        <label>{{ data.name }}</label>
        <div class="d-home-recommend-theme-content-under">
          <div>
            <span>
              <img :src="data.icon1" alt />
            </span>
            <span>5</span>
          </div>
          <div>
            <span>
              <img :src="data.icon2" alt />
            </span>
            <span>3</span>
          </div>
          <div>
            <span>
              <img :src="data.icon3" alt />
            </span>
            <span>3</span>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
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
          image: require("../../../assets/png/home/主题1@3x.png"),
          icon1: require("./../../../assets/png/home/评论@3x.png"),
          icon2: require("./../../../assets/png/home/收藏@3x.png"),
          icon3: require("./../../../assets/png/home/点赞@3x.png"),
          name: "小户型简约北欧风格",
          path: "/home"
        },
        {
          image: require("../../../assets/png/home/主题2-@3x.png"),
          icon1: require("./../../../assets/png/home/评论@3x.png"),
          icon2: require("./../../../assets/png/home/收藏@3x.png"),
          icon3: require("./../../../assets/png/home/点赞@3x.png"),
          name: "小户型简约北欧风格",
          path: "/home"
        },
        {
          image: require("../../../assets/png/home/主题1@3x.png"),
          icon1: require("./../../../assets/png/home/评论@3x.png"),
          icon2: require("./../../../assets/png/home/收藏@3x.png"),
          icon3: require("./../../../assets/png/home/点赞@3x.png"),
          name: "小户型简约北欧风格",
          path: "/home"
        }
      ],
      images: [
        require("../../../assets/png/home/主题1@3x.png"),
        require("../../../assets/png/home/主题2-@3x.png"),
        require("../../../assets/png/home/主题1@3x.png")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
// 主题推荐样式
.d-home-recommend-theme {
  margin: 0.2rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-theme-title {
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-theme-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-theme-title-all {
      margin-left: auto;
      color: rgba(162, 162, 162, 1);
    }
  }
  .van-swipe-item {
    color: rgba(0, 0, 0, 0.8);
    padding: 0.1rem;
    height: 4rem;
    margin-right: 0.3rem;
    flex: 1;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.7); /* 阴影 */
    img {
      width: 100%;
    }
    .d-home-recommend-theme-content-under {
      padding: 0.2rem 0rem;
      text-align: center;
      display: flex;
      div {
        flex: 1;
        span {
          padding-right: 0.1rem;
        }
      }
      img {
        width: 0.3rem;
      }
    }
  }
}
</style>
