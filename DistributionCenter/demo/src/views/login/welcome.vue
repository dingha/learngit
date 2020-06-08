<!--  -->
<template>
  <div class="login-welcome">
    <div class="login-welcome-top">
      <div class="login-welcome-top-img">
        <van-image
          width="30%"
          height="30%"
          fit="contain"
          :src="require('../../assets/png/login/piccircle@3x.png')"
        />
      </div>

      <div class="login-welcome-top-name">
        <p>欢迎登录</p>
      </div>
    </div>
    <div class="login-welcome-bottom">
      <div class="login-welcome-bottom-img">
        <van-image
          width="40%"
          height="40%"
          fit="contain"
          :src="require('../../assets/png/login/wellogo@3x.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>
<style lang='scss' scoped>
.login-welcome {
  width: 100%;
  height: 100%;
  .login-welcome-top {
    width: 100%;
    height: 50%;
    top: 30%;
    text-align: center;
    .login-welcome-top-img {
      padding-top: 35%;
    }
    .login-welcome-top-name {
      padding-top: 5%;
    }
  }
  .login-welcome-bottom {
    bottom: 0rem;
    width: 100%;
    height: 50%;
    text-align: center;
    position: relative;
    .login-welcome-bottom-img {
      bottom: 10%;
      position: absolute;
    }
  }
}
</style>