<!--  -->
<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="login-top">
      <van-image
        width="60%"
        height="100%"
        fit="scale-down"
        :src="require('../../assets/png/login/loglogo@3x.png')"
      />
    </div>
    <van-tabs v-model="active">
      <van-tab class="login-login" title="登录">
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
        <div class="login-loginbut">
          <van-button type="danger" to="/login/welcome">登录</van-button>
        </div>
        <div class="login-forget" @click="gotoSetforgotten">
          <p>忘记密码</p>
        </div>
        <div class="login-other">
          <p>其他登录方式</p>
          <van-row type="flex" justify="space-around" gutter="20">
            <van-col span="6">
              <van-image
                width="100%"
                height="100%"
                fit="contain"
                :src="require('../../assets/png/login/wechat@3x.png')"
              />
            </van-col>
            <van-col span="6">
              <van-image
                width="100%"
                height="100%"
                fit="contain"
                :src="require('../../assets/png/login/tencent@3x.png')"
              />
            </van-col>
            <van-col span="6">
              <van-image
                width="100%"
                height="100%"
                fit="contain"
                :src="require('../../assets/png/login/sina@3x.png')"
              />
            </van-col>
          </van-row>
        </div>
      </van-tab>

      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入手机号">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-denglu-shoujihao" />
              </svg>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入验证码">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yanzhengma-01" />
              </svg>
            </template>
            <template #extra>
              <label style="color:red">发送验证码</label>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入密码">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-renyuan1" />
              </svg>
            </template>
          </van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入推荐码">
            <template #left-icon>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-mima" />
              </svg>
            </template>
          </van-field>
        </van-cell-group>
        <div class="login-loginbut">
          <van-button type="danger" to="/login/welcome">注册</van-button>
        </div>
        <div class="login-agreement">
          <p>点击注册表示您已经同意用户协议</p>
        </div>
      </van-tab>
    </van-tabs>
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
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    gotoSetforgotten() {
      this.$router.push({ path: "/login/Setforgotten" });
    }
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
  .login-forget {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 0.6rem;
    text-align: center;
  }
  .login-other {
    color: rgba(0, 0, 0, 0.7);
    padding-top: 0.6rem;
    text-align: center;
    .van-row {
      padding: 0.4rem 1.3rem;
    }
  }
  .login-agreement {
    font-size: 0.3rem;
    padding-top: 0.6rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>