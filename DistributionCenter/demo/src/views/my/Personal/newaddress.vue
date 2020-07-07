<!--  -->
<template>
  <div class="container">
    <NavBar Navbartitle="新建收货地址" refresh="-1" righttext="保存" />
    <div class="bottom">
      <div class="content" v-for="(item, index) in datalist" :key="index">
        <van-field
          v-model="item.value"
          :label="item.title"
          :placeholder="item.content"
          :border="false"
          @change="onChange"
        >
          <div slot="right-icon" v-if="item.image">
            <img :src="item.image" />
          </div>
        </van-field>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/index";
export default {
  name: "",
  data() {
    return {
      datalist: [
        { value: "", title: "收货人", content: "姓名", image: "" },
        { value: "", title: "手机号", content: "输入11位手机号", image: "" },
        {
          value: "",
          title: "所在区域",
          content: "省市区",
          image: require("../../../assets/my/ding@3x.png")
        },
        { value: "", title: "详细地址", content: "街道门牌号", image: "" },
        {
          value: "",
          title: "设置默认地址",
          content: "",
          image: require("../../../assets/my/success@3x.png")
        }
      ]
    };
  },
  components: { NavBar },
  methods: {
    onChange() {}
  }
};
</script>
<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
} /* 头部导航 navbar */
.navbar {
  width: 100%;
  height: 0.8rem;
}
.van-nav-bar {
  padding-top: 0rem !important;
  height: 0.8rem !important ;
  line-height: 0.67rem !important;
}
.navbarimg {
  width: 0.53rem;
  height: 0.53rem;
} /* 底部内容 bottom */
.bottom {
  margin-top: 5%;
  width: 100%;
  height: 40%;
}
.content {
  width: 90%;
  height: 20%;
  padding: 0% 5%;
}
.content .van-cell {
  width: 100%;
  height: 100%;
}
.content img {
  width: 0.67rem;
  height: 0.67rem;
}
</style>