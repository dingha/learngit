<!--  -->
<template>
  <div class="car-empty">
    <div class="car-empty-content">
      <van-image
        width="100%"
        height="50%"
        fit="contain"
        :src="require('../../assets/png/car/nullcar@3x.png')"
      />
      <p>购物车还是空的</p>
    </div>
    <div class="car-footer">
      <van-submit-bar :price="3050" type="warning" button-text="去结算">
        <van-checkbox v-model="result" @click="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      result: [true]
    };
  },
  methods: {
    checkAll() {}
  }
};
</script>
<style lang='scss' scoped>
.car-empty {
  width: 100%;
  height: 100%;
  .car-empty-content {
    width: 100%;
    height: 92%;
    /deep/ {
      img {
        padding-top: 2rem;
        width: 95%;
        height: 50%;
      }
      p {
        text-align: center;
        font-size: 0.35rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .car-footer {
    position: absolute;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 8%;
    .van-submit-bar {
      position: absolute;
      .van-button {
        border-radius: 0;
        background: rgba(213, 35, 33, 1);
      }
    }
  }
}
</style>