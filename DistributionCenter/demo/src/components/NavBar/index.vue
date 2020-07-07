<!-- 头部导航栏 -->
<!-- 可传righticon：右侧图片 -->
<!-- 可传Navbartitle：标题名称 -->
<!-- 可传refresh：返回上一层值 -->
<template>
  <div class="navbar">
    <van-nav-bar
      fixed
      :title="Navbartitle"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        {{righttext}}
        <van-icon :name="righticon" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "",
  created() {},
  change(text) {
    console.log(1, text);
  },
  props: {
    Navbartitle: {
      type: String,
      default: "按钮"
    },
    refresh: {
      type: String,
      default: "1"
    },
    righticon: {
      type: String,
      default: ""
    },
    rightpath: {
      type: String,
      default: ""
    },
    righttext: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      if (this.refresh === "0") {
        this.$router.go(0);
      } else {
        this.$router.go(-1);
      }
    },
    onClickRight() {
      if (this.rightpath != "")
        this.$router.push({
          path: this.rightpath
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.navbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /deep/ {
    .van-nav-bar__left {
      .van-image__img {
        width: 0.4rem;
        height: 0.4rem;
      }
      .van-icon {
        color: black;
      }
    }
    .van-nav-bar__title {
      font-size: 0.4rem;
    }
    .van-nav-bar__right {
      .van-icon {
        color: black;
      }
    }
  }
}
</style>