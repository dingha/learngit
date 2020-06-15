<!--  -->
<template>
  <div class="class">
    <form action="/">
      <van-search show-action left-icon shape="round" background="#fff" placeholder="请输入关键字">
        <template #right-icon>
          <van-icon name="search" />
        </template>
        <template #action>
          <van-icon @click="gotocar" size=".4rem" name="shopping-cart-o" />
        </template>
      </van-search>
    </form>
    <div class="class-content">
      <div class="class-content-left">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item title="品类" to="/class/category" />
          <van-sidebar-item title="空间" to="/class/space" />
          <van-sidebar-item title="风格" to="/class/style" />
        </van-sidebar>
      </div>
      <div class="class-content-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "",
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    gotocar() {
      this.$router.push({
        path: "/car",
        query: { id: "/car", name:"/car/Thereare"}
      });
    },
    onChange(index) {
      Notify({ type: "primary", message: index });
    }
  }
};
</script>
<style lang="scss" scoped>
.class {
  overflow-y: auto;
  width: 99%;
  height: 100%;
  form {
    width: 100%;
    height: 58px;
    .van-search {
      .van-search__content {
        background-color: #fff;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
      }
      .van-search__action {
        padding-left: 4%;
        padding-top: 2%;
      }
    }
  }
  .class-content {
    width: 100%;
    height: calc(100% - 58px);
    display: flex;
    .class-content-left {
      flex: 2;
      .van-sidebar {
        .van-sidebar-item {
          height: 0.8rem;
          padding: 0.2rem 0.5rem;
        }
        .van-sidebar-item:before {
          height: 100%;
        }
        .van-sidebar-item--select {
          color: red;
        }
      }
    }
    .class-content-right {
      flex: 6;
    }
  }
}
</style>