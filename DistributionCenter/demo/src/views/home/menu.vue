<!--  -->
<template>
  <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
  <img v-lazy="image" />-->
  <div class="d-home-menu">
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="(image, index) in images" :key="index" text="文2字">
        <img v-lazy="image" />
        <label>{{ names[index] }}</label>
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
        require("../..//assets/icon/全屋定制@3x.png"),
        require("../..//assets/icon/智能家居@3x.png"),
        require("../..//assets/icon/预约搭配@3x.png"),
        require("../..//assets/icon/体验馆@3x.png")
      ],
      names: ["全屋定制", "智能家居", "预约搭配", "体验馆"]
    };
  }
};
</script>
<style lang='scss' scoped>
.van-grid-item {
  img {
    width: 0.8rem;
  }
}
</style>