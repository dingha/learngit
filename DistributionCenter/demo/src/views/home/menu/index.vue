<!--  -->
<template>
  <div class="d-home-menu">
    <van-grid :border="false" :column-num="4">
      <van-grid-item
        @click="gotolocation(data.url) "
        v-for="(data, index) in datalist"
        :key="index"
        text="文2字"
      >
        <img v-lazy="data.image" />
        <label>{{ data.name }}</label>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    gotolocation(url) {
      document.querySelector(url).scrollIntoView(true);
    }
  },
  data() {
    return {
      datalist: [
        {
          image: require("../../../assets/icon/全屋定制@3x.png"),
          url: ".d-home-recommend-house",
          name: "全屋定制"
        },
        {
          image: require("../../../assets/icon/智能家居@3x.png"),
          url: ".d-home-recommend-video",
          name: "智能家居"
        },
        {
          image: require("../../../assets/icon/预约搭配@3x.png"),
          url: ".d-home-recommend-designer",
          name: "预约搭配"
        },
        {
          image: require("../../../assets/icon/体验馆@3x.png"),
          url: ".d-home-recommend-experience",
          name: "体验馆"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.d-home-menu {
  padding: 0.1rem 0rem;
}
.van-grid-item {
  img {
    width: 0.8rem;
  }
}
</style>
