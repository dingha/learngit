<!--  -->
<template>
  <van-search
    class="d-home-heade"
    @click="gotogoods"
    shape="round"
    label="商品"
    left-icon="arrow-down"
    right-icon="search"
    show-action
    placeholder="请输入关键字"
  >
    <template #left>
      <div @click="gotolink" ref="navtabbox" class="d-home-heade-address">
        <label>杭州</label>
        <van-icon name="arrow-down" />
      </div>
    </template>
    <template #action>
      <div @click="gotocar">
        <van-icon name="shopping-cart-o" size=".45rem" />
      </div>
    </template>
  </van-search>
</template>

<script>
import { navTabbox } from "../../../components/navTab/index";
export default {
  name: "",
  components: navTabbox,
  methods: {
    gotolink() {
      this.$router.push({ path: "/home/positioning" });
    },
    gotogoods() {
      this.$router.push({ path: "/home/searchgoods" });
    },
    gotocar() {
      this.$router.push({
        path: "/car",
        query: { id: "/car", name: "/car/Thereare" }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.d-home-heade {
  display: flex;
  height: 1rem;
  align-items: center;
  display: flex;
  .d-home-heade-address {
    flex: 2;
    text-align: center;
    right: 10rem;
  }
  .van-search__content {
    flex: 6;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .van-search__action {
    text-align: center;
    line-height: inherit;
    flex: 2;
  }
}
.van-search {
  flex: 9;
}
</style>