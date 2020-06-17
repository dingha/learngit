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
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :title="data.name"
            :to="{ path: data.push,query: {id:data.querys}}"
            v-for="(data, index) in datalist"
            :key="index"
          />
        </van-sidebar>
      </div>
      <div class="class-content-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { postClassData } from "../../api/class";
export default {
  name: "",
  created() {
    // 获取数据并合并到本地中
    
    const post = postClassData("0");
    post.then(data => {
      data.data.forEach((item, i) => {
        this.datalist[i] = Object.assign(this.datalist[i], item);
        this.datalist[i].querys = item.id;
      });
    });
  },
  data() {
    return {
      datalist: [
        {
          push: "/class/category",
          name: "品类",
          querys: ""
        },
        {
          push: "/class/space",
          name: "空间",
          querys: ""
        },
        {
          push: "/class/style",
          name: "风格",
          querys: ""
        },
        {
          push: "/class/style",
          name: "风格",
          querys: ""
        },
        {
          push: "/class/style",
          name: "风格",
          querys: ""
        }
      ],
      activeKey: 0
    };
  },
  methods: {
    gotocar() {
      this.$router.push({
        path: "/car",
        query: { id: "/car", name: "/car/Thereare" }
      });
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