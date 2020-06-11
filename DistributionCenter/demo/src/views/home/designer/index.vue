<!--  -->
<template>
  <div class="d-home-recommend-designer">
    <p class="d-home-recommend-designer-title">
      <img src="../../../assets/png/home/预约设计师@3x.png" alt />
      <span>预约设计师</span>
      <span class="d-home-recommend-designer-title-all">全部></span>
    </p>
    <van-grid :column-num="4">
      <van-grid-item v-for="(data, index) in datalist" :key="index">
        <img width="100%" v-lazy="data.image" />
        {{ data.name }}
      </van-grid-item>
    </van-grid>
    <!-- <van-grid-item v-for="(image, index) in imagestop" :key="index"></van-grid-item> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      datalist: [
        {
          image: require("../../../assets/png/home/设计师1@3x.png"),
          name: "张伟",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师2@3x.png"),
          name: "许青云",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师3@3x.png"),
          name: "陈迪",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师4@3x.png"),
          name: "何丽",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师1@3x.png"),
          name: "张伟",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师2@3x.png"),
          name: "许青云",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师3@3x.png"),
          name: "陈迪",
          path: ""
        },
        {
          image: require("../../../assets/png/home/设计师4@3x.png"),
          name: "何丽",
          path: ""
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-recommend-designer {
  margin: 0.2rem 0rem;
  padding: 0rem 0.2rem;
  background: #fff;
  .d-home-recommend-designer-title {
    padding: 0.1rem 0rem;
    display: flex;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
    .d-home-recommend-designer-title-title {
      padding-left: 0.1rem;
      font-weight: bold;
      font-size: 0.32rem;
    }
    .d-home-recommend-designer-title-all {
      margin-left: auto;
      color: rgba(162, 162, 162, 1);
    }
  }
}
</style>
