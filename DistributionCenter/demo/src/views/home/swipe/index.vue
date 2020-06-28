<!--  -->
<template>
  <div class="d-home-swipe">
    <van-swipe :autoplay="3110" style="height:4.0rem;" indicator-color="red">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img @click="gotoparameter" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  methods: { 
    gotoparameter() {
      this.$router.push({
        path: "/home/parameter",
        query: { goodsId: "4" }
      });
    }
  },
  data() {
    return {
      images: [
        require("../../../assets/png/home_banner1.png"),
        require("../../../assets/png/home_banner2.png"),
        require("../../../assets/png/home_banner3.png")
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.d-home-swipe {
  padding: 0.1rem 0rem;
  /deep/ {
    .van-swipe__indicators {
      left: 90%;
      bottom: 15%;
    }
  }
}
.van-swipe-item {
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
