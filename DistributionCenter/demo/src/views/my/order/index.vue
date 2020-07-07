<!--  -->
<template>
  <div class="container">
    <NavBar Navbartitle="我的订单" refresh="-1" />
    <!-- tab标签页 tab -->
    <van-tabs class="tab" v-model="active" @change="ontabChange">
      <van-tab title="全部订单">
        <!-- 空订单 empty -->
        <div class="empty" v-if="emptyshow">
          <img class="img" :src="require('../../../assets/my/nulldan@3x.png')" />
          <div>还没有提交订单</div>
        </div>
        <!-- 全部订单 all -->
        <div class="all" v-for="(item, index) in orderdata" :key="index">
          <div class="all-title">
            <div>
              <van-checkbox
                v-model="item.titlechecked"
                label-disabled
                @:change="titleChange"
              >{{item.title}}</van-checkbox>
            </div>
            <div>{{item.titlevalue}}</div>
          </div>
          <div class="all-goods" v-for="(item, index) in item.goods" :key="index">
            <Mygoods />
          </div>
          <div class="all-price">
            <div>共{{item.comnum}}件商品</div>
            <div>合计：￥{{item.comprice}}</div>
          </div>
          <div class="all-btn">
            <div>
              <van-button size="small" round type="default">查看物流</van-button>
            </div>
            <div>
              <van-button size="small" round color="red" plain>确认收货</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="all" v-for="(item, index) in paymentdata" :key="index">
          <div class="all-title">
            <div>{{item.title}}</div>
            <div>{{item.titlevalue}}</div>
          </div>
          <div class="all-goods" v-for="(item, index) in item.goods" :key="index">
            <Mygoods />
          </div>
          <div class="all-price">
            <div>共{{item.comnum}}件商品</div>
            <div>合计：￥{{item.comprice}}</div>
          </div>
          <div class="all-btn">
            <div>
              <van-button
                catchtap="calloff"
                :data-index="index"
                size="small"
                round
                type="default"
              >取消订单</van-button>
            </div>
            <div>
              <van-button size="small" round color="red" plain>付款</van-button>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货" class="delivery">
        <div class="title">
          <span>家居Design</span>
          <span>等待卖家发货</span>
        </div>
        <Mygoods />
        <div class="price">
          <div>共1件商品</div>
          <div>
            合计:
            <span>￥290</span>
          </div>
        </div>
        <div class="btn">
          <van-button catchtap="ondelivery" round color="red" plain>提醒发货</van-button>
        </div>
        <van-toast id="van-toast" />
      </van-tab>
      <van-tab title="配送中" class="distribution">
        <div class="title">
          <span>家居Design</span>
          <span>等待卖家发货</span>
        </div>
        <Mygoods />
        <div class="price">
          <div>共1件商品</div>
          <div>
            合计:
            <span>￥290</span>
          </div>
        </div>
        <div class="btn">
          <div>
            <van-button size="small" round type="default">查看物流</van-button>
          </div>
          <div>
            <van-button size="small" round color="red" catchtap="onconfirmgoods" plain>确认收货</van-button>
          </div>
          <my-Toast :toastshows="confirmgoodsshow" span="确认已收到商品吗" v-if="confirmgoodsshow"></my-Toast>
        </div>
      </van-tab>
      <van-tab title="配送中" class="evaluation">
        <div class="title">
          <span>家居Design</span>
          <span>等待买家评价</span>
        </div>
        <Mygoods />
        <div class="price">
          <div>共1件商品</div>
          <div>
            合计:
            <span>￥290</span>
          </div>
        </div>
        <div class="btn">
          <div>
            <van-button size="small" round color="red" catchtap="onconfirmgoods" plain>评价</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/index";
import Mygoods from "../../../components/goods/index";

import Toast from "vant";
export default {
  data() {
    return {
      confirmgoodsshow: false,
      img: "../../../images/ring@3x.png",
      //   全部订单开关
      emptyshow: false,
      active: 0,
      orderdata: [
        {
          title: "标题",
          titlechecked: true,
          titlevalue: "卖家已经发货",
          goods: [
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            }
          ],
          comnum: 2,
          comprice: 3
        },
        {
          titlechecked: true,
          titlevalue: "卖家已经发货",
          goods: [
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            },
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            }
          ],
          comnum: 2,
          comprice: 3
        }
      ],
      paymentdata: [
        {
          mytoast: { toastshows: false, text: "确认删除订单吗？" },
          title: "j家居几何",
          titlechecked: false,
          titlevalue: "等待买家付款",
          goods: [
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            }
          ],
          comnum: 2,
          comprice: 3
        },
        {
          title: "j家居几何",
          titlechecked: false,
          titlevalue: "等待买家付款",
          goods: [
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            },
            {
              name: "几何茶几",
              spec1: "核桃木色",
              spec2: "12*55*12",
              goodsimg: "../../../images/pingjiapic@3x.png",
              price: 32,
              num: 3
            }
          ],
          comnum: 2,
          comprice: 3
        }
      ],
      delivery: []
    };
  },
  name: "",
  components: { NavBar, Mygoods },
  methods: {
    titleChange(event) {
      const demo01 = event.currentTarget.dataset.index;
      this.setData({
        [demo01]: event.detail
      });
    },

    // 待付款取消订单
    calloff(event) {
      const index = event.currentTarget.dataset.index;
      const show01 = "paymentdata" + "[" + index + "]" + ".mytoast.toastshows";
      this.setData({
        [show01]: true
      });
    },

    // 提醒发货
    ondelivery() {
      Toast("提醒已发送给卖家");
    },

    // 配送中 确认收货
    onconfirmgoods() {
      this.confirmgoodsshow = true;
    },

    ontabChange() {}
  }
};
</script>
<style lang='scss' scoped>
.container {
  overflow-y: auto;
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background: rgba(241, 241, 241, 1);
} /* tab标签页 tab */
.tab {
  width: 100%;
  height: 1.07rem;
}
.tab .van-tabs__nav {
  width: 100%;
}
.tab .van-ellipsis {
  font-size: 0.4rem;
  flex: 0 0 20% !important;
} /* 全部订单 order */
.empty {
  width: 100%;
  height: 8rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty > img {
  width: 45%;
  height: 4.33rem;
}
.empty > div {
  padding-right: 0.5rem;
  font-size: 0.4rem;
  color: rgba(150, 150, 150, 1);
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.all {
  margin: 0.27rem 0;
  background-color: #fff;
  width: 100%;
}
.all-title {
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0px 5%;
  width: 90%;
  height: 0.8rem;
}
.all-title > view + view {
  color: brown;
}
.all-goods {
  background-color: #fff;
  width: 100%;
}
.all-price {
  padding: 0px 5%;
  height: 0.8rem;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  div + div {
    padding-left: 0.5rem;
  }
}
.all-btn {
  border-top: 1px solid rgba(241, 241, 241, 1);
  padding: 0.1rem 5%;
  width: 90%;
  justify-content: flex-end;
  display: flex;
  .van-button {
    height: 0.6rem;
    width: 1.6rem;
  }
}
/* 待发货 */
.delivery {
  width: 100%;
  height: 8rem;
}
.delivery .title {
  padding: 0px 5%;
  width: 90%;
  height: 0.8rem;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  display: flex;
}
.delivery .title span + span {
  color: brown;
}
.delivery .price {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 0.8rem;
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.delivery .price view + view {
  padding-left: 0.27rem;
}
.delivery .btn {
  align-items: center;
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 0.7rem;
  justify-content: flex-end;
  display: flex;
  .van-button {
    width: 1.93rem;
    height: 0.7rem;
  }
} /* 配送中 */
.distribution {
  width: 100%;
  height: 8rem;
}
.distribution .title {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 1.2rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.distribution .title span + span {
  color: brown;
}
.distribution .price {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 1.2rem;
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.distribution .price view + view {
  padding-left: 0.27rem;
}
.distribution .btn {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 1.07rem;
  justify-content: flex-end;
  display: flex;
}
.distribution .btn .van-button {
  width: 2.93rem;
  height: 1rem;
} /* 待评价 */
.evaluation {
  width: 100%;
  height: 8rem;
}
.evaluation .title {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 0.8rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.evaluation .title span + span {
  color: brown;
}
.evaluation .price {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 0.8rem;
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.evaluation .btn {
  padding: 0px 5%;
  width: 90%;
  background-color: #fff;
  height: 0.7rem;
  justify-content: flex-end;
  display: flex;
}
.evaluation .btn .van-button {
  width: 1.93rem;
  height: 0.6rem;
}
</style>