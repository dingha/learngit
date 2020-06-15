<!--  -->
<template>
  <div class="d-home-evaluation">
    <van-nav-bar title="用户评价" color="#1989fa" left-arrow @click-left="onClickLeft" />
    <van-cell-group v-for="(datal, index)  in datalist" :key="index">
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>{{datal.name}}</template>
        <template #icon>
          <img width="15%" height="15%" v-lazy="datal.Headimage" />
        </template>
        <template #label>{{datal.parameter}}</template>
      </van-cell>
      <p>{{datal.speak}}</p>
      <van-row>
        <van-col
          span="8"
          width="100%"
          type="flex"
          v-for="(image, index) in datal.images"
          :key="index"
        >
          <van-image width="100" height="100" :src="image" />
        </van-col>
      </van-row>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      datalist: [
        {
          Headimage: require("../../../assets/png/home/设计师1@3x.png"),
          name: "那些花儿",
          date: "2017-05-26",
          parameter: "1.5米 白橡木 胡桃色",
          speak: "颜色淡雅，非常漂亮",
          images: [
            require("../../../assets/png/home/主题1@3x.png"),
            require("../../../assets/png/home/goods/2@3x.png"),
            require("../../../assets/png/home/主题1@3x.png")
          ]
        },
        {
          Headimage: require("../../../assets/png/home/设计师1@3x.png"),
          name: "那些花儿",
          date: "2017-05-26",
          parameter: "1.5米 白橡木 胡桃色",
          speak: "颜色淡雅，非常漂亮",
          images: [
            require("../../../assets/png/home/主题1@3x.png"),
            require("../../../assets/png/home/主题1@3x.png"),
            require("../../../assets/png/home/主题1@3x.png")
          ]
        },
        {
          Headimage: require("../../../assets/png/home/设计师1@3x.png"),
          name: "那些花儿",
          date: "2017-05-26",
          parameter: "1.5米 白橡木 胡桃色",
          speak: "颜色淡雅，非常漂亮",
          images: [
            require("../../../assets/png/home/主题1@3x.png"),
            require("../../../assets/png/home/主题1@3x.png"),
            require("../../../assets/png/home/主题1@3x.png")
          ]
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-evaluation {
  overflow-y: auto;
  height: 100%;
  color: black;
  /deep/ {
    .van-nav-bar__left {
      .van-icon {
        color: black;
      }
    }
  }
  .van-cell-group {
    p {
      padding: 0.1rem 0.3rem;
    }
    .van-row {
      padding: 0.1rem 0.3rem;
    }
  }
}
</style>