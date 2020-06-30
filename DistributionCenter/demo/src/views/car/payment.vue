<!--  -->
<template>
  <div class="payment">
    <div class="payment-top">
      <van-nav-bar title="支付方式" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <div class="payment-countdown">
      <div class="payment-countdown-content">
        <van-count-down :time="time" format="HH: mm" />剩余支付时间
      </div>
    </div>
    <div class="payment-way">
      <div class="payment-title">选择支付方式</div>
      <div class="payment-way-content">
        <van-radio-group v-model="radio">
          <van-cell title="支付宝支付" value="内容">
            <template #icon>
              <van-image
                width="6%"
                height="6%"
                :src="require('../../assets/png/car/anypay@3x.png')"
              />
            </template>
            <template #default>
              <van-radio name="1"></van-radio>
            </template>
          </van-cell>
          <van-cell title="微信支付" value="内容">
            <template #icon>
              <van-image
                width="6%"
                height="6%"
                :src="require('../../assets/png/car/wechaat@3x.png')"
              />
            </template>
            <template #default>
              <van-radio name="2"></van-radio>
            </template>
          </van-cell>
        </van-radio-group>
      </div>
    </div>
    <van-button class="payment-buttom" type="danger">立即支付</van-button>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    onClickLeft() {
      this.$router.go(-2);
    },
    onClickRight() {
      //   Toast("按钮");
    }
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      radio: "1"
    };
  }
};
</script>
<style lang='scss' scoped>
.payment {
  position: relative;
  background: rgba(241, 241, 241, 1);
  width: 100%;
  height: 100%;
  .payment-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    /deep/ {
      .van-nav-bar__left {
        .van-icon {
          color: black;
        }
      }
      .van-nav-bar__title {
        font-size: 0.4rem;
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: black;
        }
      }
    }
  }
  .payment-countdown {
    align-items: center;
    display: flex;
    text-align: center;
    background: #fff;
    width: 100%;
    height: 16%;
    .payment-countdown-content {
      width: 100%;
      height: 46%;
      .van-count-down {
        padding-bottom: 0.26rem;
        font-size: 0.45rem;
      }
    }
  }
  .payment-way {
    width: 100%;
    height: 77%;
    .payment-title {
      width: 100%;
      height: 8%;
      align-items: center;
      display: flex;
      padding-left: 0.26rem;
    }
    .payment-way-content {
      width: 100%;
      height: 16%;
      .van-cell {
        justify-content: space-between;
      }
      .van-cell__title {
        flex: 15;
      }
    }
  }
  .payment-buttom {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 8%;
  }
}
</style>