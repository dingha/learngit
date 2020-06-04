<!--  -->
<template>
  <div class="login">
    <van-nav-bar left-arrow />
    <div class="login-top">
      <van-image
        width="60%"
        height="100%"
        fit="scale-down"
        :src="require('../../assets/png/login/loglogo@3x.png')"
      />
    </div>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field v-model="value" left-icon="smile-o" placeholder="请输入手机号">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-denglu-shoujihao" />
              </svg>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" left-icon="smile-o" placeholder="请输入密码">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mima" />
              </svg>
            </template>
          </van-field>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">内容 2</van-tab>
    </van-tabs>
    <div class="login-loginbut">
      <van-button type="danger">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 2,
      value: ""
    };
  }
};
</script>
<style lang='scss' scoped>
.login {
  overflow-y: auto;
  height: 100%;
  color: black;
  /deep/ {
    .van-icon {
      color: black;
    }
  }
  .login-top {
    width: 100%;
    height: 18%;
    text-align: center;
  }
  .van-cell-group {
    height: 10%;
    padding-top: 0.6rem;
  }
  .login-loginbut {
    padding-top: 0.6rem;
    text-align: center;
    .van-button {
      width: 50%;
    }
  }
}
</style>