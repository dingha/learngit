<!--  -->
<template>
  <div class="container">
    <NavBar Navbartitle="实名认证" refresh="-1" />
    <!-- 内容 content -->
    <div class="content" v-if="contentshow">
      <span>姓名</span>
      <input />
      <span>身份证号</span>
      <input />
      <div class="content-button">
        <van-button type="danger">提交审核</van-button>
      </div>
    </div>
    <!-- 审核中 audit -->
    <div class="audit" v-if="auditshow">
      <div class="logo" v-if="audit.show1">
        <img :src="require('../../../assets/my/loading@3x.png' )" />
        <span>审核</span>
      </div>
      <div class="logo" v-if="audit.show2">
        <img :src="require('../../../assets/my/mo@3x.png' )" />
        <span>认证成功</span>
      </div>
      <van-cell title="姓名" value="张三" />
      <van-cell title="身份证号" value="3411525525425" />
    </div>
  </div>
</template>
 
<script>
import NavBar from "../../../components/NavBar/index";
export default {
  data() {
    return {
      contentshow: true,
      auditshow: false,
      audit: { show1: false, show2: true }
    };
  },
  name: "",
  components: { NavBar },
  methods: {}
};
</script>
<style lang='scss' scoped>
.container {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
} /* 内容 content */
.content {
  width: 80%;
  height: 40%;
  padding: 0px 10%;
}
.content input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 0.93rem;
  width: 100%;
  border-radius: 0.13rem;
}
.content span {
  display: block;
  height: 0.93rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.content-button {
  padding: 10%;
}
.content-button .van-button {
  width: 4.8rem;
  height: 0.99rem;
  display: flex;
  justify-content: center;
  align-items: center;
} /* 审核中 audit */
.audit {
  width: 100%;
  height: 40%;
}
.audit .van-cell {
  height: 1.2rem;
  width: 100%;
}
.logo {
  height: 3.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 0.67rem;
  height: 0.67rem;
}
</style>