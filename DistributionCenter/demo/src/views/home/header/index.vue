<!--  -->
<template>
  <div class="d-home-heade">
    <div @click="gotolink" class="d-home-heade-city">
      <label>杭州</label>
      <van-icon name="arrow-down" />
    </div>
    <van-search
      shape="round"
      label="商品"
      maxlength="15"
      left-icon="arrow-down"
      right-icon="search"
      placeholder="请输入搜索关键词"
    ></van-search>
    <div class="d-home-heade-car">
      <van-icon name="shopping-cart-o" size=".45rem" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    gotolink() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      this.$router.push({ path: "/home/positioning" });
      // this.$router.replace("./positioning");
    }
  }
};
</script>
<style lang='scss' scoped>
.d-home-heade {
  display: flex;
  height: 1rem;
}
.d-home-heade-city {
  padding-top: 0.36rem;
  text-align: center;
  flex: 3;
}
.van-search {
  flex: 9;
}
.d-home-heade-car {
  flex: 3;
  padding-top: 0.3rem;
  text-align: center;
}
</style>