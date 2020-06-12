<!--  -->
<template>
  <div class="car">
    <div class="car-top">
      <van-nav-bar title="购物车" :right-text="rightText" @click-right="onClickRight" />
    </div>
    <div class="car-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    onClickRight() {
      console.log(this.rightText);
      let names = "";
      this.rightText === "编辑"
        ? ((this.rightText = "完成"), (names = "/car/editor"))
        : ((this.rightText = "编辑"), (names = "/car/empty"));
      this.$router.push({
        path: "/car",
        query: { id: "/car", name: names }
      });
    },
    checkAll() {
      this.$emit("my-click", "我很好");
      // this.$refs.checkboxGroup.toggleAll(true);
    }
  },
  data() {
    return {
      rightText: "编辑",
      result: []
    };
  }
};
</script>
<style lang='scss' scoped>
.car {
  background: #f1f1f1;
  width: 100%;
  height: 100%;
  .car-top {
    width: 100%;
    height: 7.5%;
    /deep/ {
      .van-nav-bar__title {
        font-size: 0.4rem;
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: black;
        }
      }
    }
  }
  .car-container {
    width: 100%;
    height: 92.5%;
  }
}
</style>