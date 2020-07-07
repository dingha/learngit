<!-- 设置页面 -->
<template>
  <div class="container">
    <!-- 头部导航栏 -->
    <NavBar :Navbartitle="Navbartitle" :refresh="refresh" />
    <!-- 图标 logo -->
    <div class="logo" v-if="Aboutmy">
      <van-image :src="require('../../../assets/my/setlogo@3x.png')"></van-image>
    </div>

    <!-- 关于我的 total -->
    <div class="total" v-if="Aboutmy">
      <van-cell
        @click="setonclick(data.name)"
        :title="data.name"
        is-link
        v-for="(data, index) in totallist"
        :key="index"
      />
    </div>
    <!-- 底部总目录 set -->
    <div class="total" v-if="set">
      <van-cell
        @click="setonclick(data.name)"
        :title="data.name"
        :value="data.content"
        is-link
        v-for="(data, index) in setlist"
        :key="index"
      />
      <van-cell center title="通知推送">
        <template #right-icon>
          <!-- <van-switch v-model="checked" size="24" /> -->
          <van-switch
            active-color="red"
            inactive-color="#f1f1f1"
            v-model="setchecked"
            @click="setonChange"
            size="24"
          />
        </template>
      </van-cell>

      <div class="out">
        <div>退出当前账号</div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../../components/NavBar/index";
import { Toast } from "vant";
export default {
  name: "",
  components: { NavBar },
  data() {
    return {
      Navbartitle: "设置",
      refresh: "1",
      setchecked: true,
      Aboutmy: false,
      set: true,
      totallist: [
        { name: "功能介绍" },
        { name: "公司介绍" },
        { name: "新版本检查" }
      ],
      setlist: [
        { name: "关于我们", content: "" },
        { name: "意见反馈", content: "" },
        { name: "在线客服", content: "" },
        { name: "清除缓存", content: "0.00kb" }
      ]
    };
  },
  methods: {
    total() {
      console.log(1);
    },

    setonclick(name) {
      switch (name) {
        case "功能介绍":
          Toast(name);
          Toast("提示内容");

          return;
        case "公司介绍":
          Toast(name);
          return;
        case "新版本检查":
          Toast(name);
          return;
        case "关于我们":
          this.Aboutmy = true;
          this.set = false;
          this.refresh = "0";
          return;
        case "意见反馈":
          this.$router.push({
            path: "/my/feedback"
          });
          return;
        case "在线客服":
          Toast(name);
          return "run";
        case "清除缓存":
          // Toast('我是提示文案，建议不超过十五字~');
          Toast("缓存已成功清理");
          return "run";
      }
    },
    // 通知推送开关
    setonChange() {
      // 需要手动对 checked
    }
  }
};
</script>
<style lang='scss' scoped>
.container {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background: #f1f1f1;
  /* 图标 logo */
  .logo {
    display: flex;
    width: 100%;
    height: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
    .van-image {
      width: 60%;
      background-size: cover;
    }
  }
  /* 底部总目录 total */
  .total {
    width: 100%;
    padding-top: 0.2rem;
  }
  .total .van-cell {
    padding: 0.2rem 0.2rem;
  }

  .out {
    padding-top: 0.6rem;
    height: 30%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .out div {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 1rem;
    width: 100%;
    background-color: #fff;
    color: red;
  }
}
</style>