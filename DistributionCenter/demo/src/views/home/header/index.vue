<!--  -->
<template>
  <div class="d-home-heade">
    <div class="d-home-heade-city">
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
  name: ""
};
</script>
<style lang='scss' scoped>
.d-home-heade {
  display: flex;
  //   padding: 0rem 0.5rem;
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