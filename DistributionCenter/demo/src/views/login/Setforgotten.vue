<!--  -->
<template>
  <div class="login-Setforgotten">
    <van-nav-bar :title="title" color="#1989fa" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="用户名" :placeholder="placeholdername" />
      <van-field v-model="password" :type="type" name="密码" :placeholder="placeholderpwd">
        <template #extra>
          <label @click="sms" v-if="btnsubmit==='下一步'" style="color:red ;; ">发送验证码</label>
        </template>
      </van-field>
      <div class="login-loginbut">
        <van-button type="danger">{{btnsubmit}}</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { postForgesmstData, postForgetData } from "../../api/login";
export default {
  name: "",
  data() {
    return {
      active: 0,
      title: "忘记密码",
      username: "",
      password: "",
      placeholdername: "请输入手机号",
      placeholderpwd: "请输入验证码",
      btnsubmit: "下一步",
      type: ""
      //password
    };
  },
  methods: {
    sms() {
      const smspost = postForgesmstData(this.username);
      smspost.then(data => {
        console.log(data);
        // Toast(data.data.msg);
      });
    },
    onSubmit(values) {
      if (this.btnsubmit === "下一步") {
        this.btnsubmit = "确认修改";
        this.title = "设置密码";
        this.placeholdername = "请输入新密码";
        this.placeholderpwd = "请再次输入新密码";
        console.log("submit", values);
        const forgepost = postForgetData(this.username, this.password);
        forgepost.then(data => {
          console.log(data);
          // Toast(data.data.msg);
          this.username = this.password = "";
        });
      } else if (this.btnsubmit === "确认修改") {
        const forgepost = postForgetData(this.username, this.password);
        forgepost.then(data => {
          console.log(data);
          // Toast(data.data.msg);
        });
      }
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