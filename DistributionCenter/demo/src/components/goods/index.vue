<!--  -->
<template>
  <div class="goods">
    <van-card :num="goodsdata.num" :price="goodsdata.price" :title="goodsdata.name">
      <div slot="desc" class="desc">
        <div>碳化木色</div>
        <div>红木</div>
      </div>
      <template #thumb>
        <img :src="require('../../assets/my/pingjiapic@3x.png')" />
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    Navbartitle: {
      type: String,
      default: "按钮"
    },
    goodsdata: {
      type: Object,
      default() {
        return {
          name: "檀木家具",
          num: 5,
          price: 10
        };
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.goods {
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  border-top: 0.01rem solid rgba(0, 0, 0, 0.1);
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
}
.goods .van-card {
  background: #fff;
  height: 98%;
  padding: 0.13rem 0.2rem;
  width: 100%;
}
.goods img {
  width: 2rem;
  height: 2rem;
}
.goods .van-card__title {
  color: rgba(0, 0, 0, 0.7);
  padding-top: 0.27rem;
  padding-bottom: 0.07rem;
}
.desc > view {
  padding: 0.07rem 0px;
  color: rgba(0, 0, 0, 0.7);
}
.goods .van-card__price {
  color: rgba(0, 0, 0, 0.8);
}
</style>