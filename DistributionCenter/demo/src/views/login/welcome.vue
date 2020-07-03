<!--  -->
<template>
  <div class="login-welcome">
    <div class="login-welcome-top">
      <div class="login-welcome-top-img">
        <van-circle
          :stroke-width="20"
          size="2.7rem"
          v-model="currentRate"
          :rate="currentRates"
          :speed="33"
          :text="text"
        >
          <template slot="default">
            <van-image
              @click="gotomy"
              width="96%"
              height="96%"
              fit="contain"
              :src="require('../../assets/png/login/piccircle@3x.png')"
            />
          </template>
        </van-circle>
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
  name: "",
  data() {
    return {
      currentRate: 1,
      currentRates: 100
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  created() {
    setTimeout(() => {
      this.$router.push({
        path: "/home",
        query: { id: "/home" }
      });
    }, 3000);
  },
  methods: {
    gotomy() {
      this.$router.push({
        path: "/home",
        query: { id: "/home" }
      });
    }
  }
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
      .van-image {
        padding: 3px 0 0 0px;
      }
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