<!--  -->
<template>
  <div class="login-Setforgotten">
    <van-nav-bar title="设置密码" color="#1989fa" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" placeholder="请输入新密码" />
      <van-field v-model="password" type="password" name="密码" placeholder="请再次输入新密码">
        <template #extra>
          <label style="color:red ;display:none; ">发送验证码</label>
        </template>
      </van-field>
      <div class="login-loginbut">
        <van-button type="danger">确认修改</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0,
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
.login-Setforgotten {
  height: 100%;
  width: 100%;
  .van-nav-bar {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    /deep/ {
      .van-icon {
        color: black;
      }
    }
  }
  .van-form {
    padding: 0rem 1rem;
    .van-field {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
      margin: 0.4rem 0rem;
    }
    .login-loginbut {
      padding-top: 0.2rem;
      text-align: center;
      .van-button {
        width: 80%;
      }
    }
  }
}
</style>