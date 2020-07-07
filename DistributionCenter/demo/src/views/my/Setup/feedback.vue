<!-- 
    
 -->
<template>
  <div class="container">
    <NavBar Navbartitle="留言" refresh="-1" />
    <!-- 留言栏 leave -->
    <div class="leave">
      <textarea value="leave " placeholder="写意见" border="false" @click="leaveChange"></textarea>
    </div>
    <!-- 联系方式 tel -->

    <div class="tel">
      <van-field
        class="telinput"
        :value="tel"
        placeholder="请输入电话/QQ号"
        :border="false"
        label="联系方式"
        lable="联系方式"
        bind:change="onChange"
      />
    </div>
    <div class="submitbtn">
      <van-button type="danger">提交反馈</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/index";
export default {
  data() {
    return {
      leave: "",
      tel: "",
      totallist: [
        { name: "功能介绍" },
        { name: "公司介绍" },
        { name: "新版本检查" }
      ]
    };
  },
  name: "",
  components: { NavBar },
  methods: {
    leaveChange() {
      console.log(1);
    }
  }
};
</script>
<style lang='scss' scoped>
.container {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background-color: #fff;
}
.van-nav-bar {
  padding-top: 0rpx !important;
  height: 60rpx !important ;
  line-height: 50rpx !important;
}

/* 写留言 leave */
.leave {
  background-color: white;
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 90%;
    height: 90%;
    margin: 0.1rem;
    background-size: cover;
  }
}

/* 联系方式 tel */
.tel {
  width: 100%;
  height: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.telinput {
  width: 90%;
  height: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  /deep/ {
    .van-field__label {
      width: 1.5rem;
    }
  }
}

/* 按钮 button  */
.submitbtn {
  width: 100%;
  height: 1rem;
  text-align: center;
  padding-top: 1rem;
}
.submitbtn .van-button {
  width: 50%;
  height: 100rpx;
}
</style>