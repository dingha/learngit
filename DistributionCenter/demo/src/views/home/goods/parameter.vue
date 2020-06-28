<!--  -->
<template>
  <div class="d-home-parameter">
    <div class="d-home-parameter-top" v-for="(data, index) in datalist" :key="index">
      <div class="d-home-parameter-navbar">
        <van-icon @click="backHistory" name="arrow-left" />
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang2" />
        </svg>
      </div>
      <img v-lazy="data.img" />
      <p>{{data.name}}</p>
      <div>
        <span class="d-home-parameter-top-price">￥{{data.price}}</span>
        <span>已售 {{data.sale}}</span>
      </div>
      <van-row>
        <van-col span="9" gutter="20">
          <van-icon name="passed" color="red" />品牌制造商直供
        </van-col>
        <van-col span="9">
          <van-icon name="passed" color="red" />品牌制造商直供
        </van-col>
        <van-col span="9">
          <van-icon name="passed" color="red" />品牌制造商直供
          <van-icon name="arrow" />
        </van-col>
      </van-row>
    </div>
    <div class="d-home-parameter-content">
      <van-cell-group>
        <van-cell title="用户评价" is-link @click="gotoevaluation" />
        <van-cell title="那些花儿" :value="(datalist[0].evaluation.time||'').split(' ')[0]">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #icon>
            <van-image
              width="15%"
              height="15%"
              :src="require('../../../assets/png/home/设计师1@3x.png')"
            />
          </template>
          <template #label>1.5米 白橡木 胡桃色</template>
        </van-cell>
        <p>{{datalist[0].evaluation.context}}</p>
        <van-row type="flex">
          <van-col span="9" width="100%">
            <van-image
              width="100"
              height="100"
              :src="require('../../../assets/png/home/主题1@3x.png')"
            />
          </van-col>
          <van-col span="9">
            <van-image
              width="100"
              height="100"
              :src="require('../../../assets/png/home/主题1@3x.png')"
            />
          </van-col>
          <van-col span="9">
            <van-image
              width="100"
              height="100"
              :src="require('../../../assets/png/home/主题1@3x.png')"
            />
          </van-col>
        </van-row>
      </van-cell-group>

      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
            <van-cell v-for="item in list" :key="item">
              <template #title>
                <van-image width="100%" height="5rem" :src="item" />
              </template>
            </van-cell>
          </van-list>
        </van-tab>
        <van-tab class="van-tab__pane2" title="商品参数">
          <van-cell title="商品风格" value="现代"></van-cell>
          <van-cell title="主要材料" value="白橡木" />
          <van-cell title="产地" value="江苏苏州" />
          <van-cell title="油漆工艺" value="环保漆" />
          <van-cell title="商品毛重" value="30kg" />
          <van-cell title="组装情况" value="组装" />
        </van-tab>
      </van-tabs>
    </div>

    <div class="d-home-parameter-bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" />
        <van-goods-action-button type="default" text="加入购物车" />
        <van-goods-action-button type="danger" @click="buy" text="立即购买"></van-goods-action-button>
      </van-goods-action>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        @add-cart="onAddCartClicked"
        @buy-clicked="onBuyClicked"
      />
    </div>
  </div>
</template>

<script>
import {
  postHomeParameterData,
  postHomeEvaluationData,
  postHomeCarData
} from "../../../api/home";
import { Toast } from "vant";
export default {
  name: "",

  methods: {
    gotoevaluation() {
      this.$router.push({ path: "/home/evaluation" });
    },
    backHistory() {
      // 点击跳转至上次浏览页面
      this.$router.go(-1); //
    },
    buy() {
      this.show = this.show == true || this.show == false;
      console.log(this.show);
    },
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
    // 添加购物车事件
    onAddCartClicked() {
      console.log(1);
    },
    onBuyClicked(e) {
      console.log(e);
    }
  },
  created() {
    // 商品信息
    const goodsId = this.$route.query.goodsId;
    const post = postHomeParameterData(goodsId);
    post
      .then(data => {
        data.data.forEach((item, i) => {
          this.datalist[i] = Object.assign(this.datalist[i], item);
        });
      })
      .catch(err => {
        return err;
      });
    // 商品购物车信息
    const post3 = postHomeCarData("1");
    post3
      .then(data => {
        console.log(data);
        // data.data.forEach((item, i) => {
        //   this.datalist[i] = Object.assign(this.datalist[i], item);
        // });
      })
      .catch(err => {
        return err;
      });
    // 用户评价信息
    const post2 = postHomeEvaluationData(goodsId);
    post2
      .then(data => {
        this.datalist[0].evaluation = data.data[0];
      })
      .catch(err => {
        return err;
      });
  },
  data() {
    return {
      show: false,
      postdata: "121",
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "尺寸", // skuKeyName：规格类目名称
            v: [
              {
                id: "1111", // skuValueId：规格值 id
                name: "150*40*45cm", // skuValueName：规格值名称
                // imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593349679787&di=9fd833e9cfe40a2a9df74003ac9a4bee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1122",
                name: "150*40*65cm",
                previewImgUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593349679787&di=9fd833e9cfe40a2a9df74003ac9a4bee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "材质", // skuKeyName：规格类目名称
            v: [
              {
                id: "2211", // skuValueId：规格值 id
                name: "白橡木", // skuValueName：规格值名称
                previewImgUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593349679787&di=9fd833e9cfe40a2a9df74003ac9a4bee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" // 用于预览显示的规格类目图片
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "3311", // skuValueId：规格值 id
                name: "胡桃色", // skuValueName：规格值名称
                previewImgUrl:
                  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593349679787&di=9fd833e9cfe40a2a9df74003ac9a4bee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "3322",
                name: "红木色",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s3" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1111", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2211", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "3311", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 112 // 当前 sku 组合对应的库存
          },
          {
            id: 2211, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1111", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2211", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "3322", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 112 // 当前 sku 组合对应的库存
          },
          {
            id: 2222, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1122", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2211", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "3311", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 112 // 当前 sku 组合对应的库存
          },
          {
            id: 2233, // skuId，下单时后端需要
            price: 1200, // 价格（单位分）
            s1: "1122", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2211", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "3322", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 112 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593349679787&di=9fd833e9cfe40a2a9df74003ac9a4bee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx"
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息"
        }
      },
      active: 2,
      list: [
        require("../../../assets/png/home/goods/1@3x.png"),
        require("../../../assets/png/home/goods/2@3x.png"),
        require("../../../assets/png/home/goods/3@3x.png"),
        require("../../../assets/png/home/goods/4@3x.png"),
        require("../../../assets/png/home/goods/5@3x.png"),
        require("../../../assets/png/home/goods/6@3x.png"),
        require("../../../assets/png/home/goods/7@3x.png"),
        require("../../../assets/png/home/goods/8@3x.png"),
        require("../../../assets/png/home/goods/9@3x.png"),
        require("../../../assets/png/home/goods/10@3x.png")
      ],
      loading: false,
      finished: false,
      datalist: [
        {
          evaluation: "",
          img: require("../../../assets/png/home/canshu-@3x.png"),
          name: "现代风格实木圆角餐桌",
          price: "6000",
          imagebottom: [
            require("../../../assets/png/home/goods/2@3x.png"),
            require("../../../assets/png/home/goods/3@3x.png"),
            require("../../../assets/png/home/goods/4@3x.png"),
            require("../../../assets/png/home/goods/5@3x.png")
          ]
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-parameter {
  width: 100%;
  height: calc(100% - 50px);
  overflow: auto;
  background: rgba(241, 241, 241, 1);
  .d-home-parameter-top {
    background: #fff;
    padding-bottom: 0.2rem;
    position: relative;
    .d-home-parameter-navbar {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: absolute;
      svg,
      .van-icon {
        padding: 0.1rem 0.2rem;
      }
    }
    img {
      width: 100%;
      height: 7rem;
    }
    p {
      padding: 0.1rem 0.1rem;
    }
    div {
      display: flex;
      justify-content: space-between;
      padding: 0.1rem 0rem;
      .d-home-parameter-top-price {
        color: red;
        font-size: 0.35rem;
      }
    }
    /deep/ {
      .van-row {
        padding: 0rem 0rem;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.23rem;
        left: 0rem;
        .van-col {
          float: left;
        }
        .van-icon {
          top: 10%;
        }
      }
    }
  }
  .d-home-parameter-content {
    margin-top: 0.2rem;
    background: #fff;
    /deep/ {
      .van-image {
      }
    }
    .van-cell-group {
      p {
        padding: 0.1rem 0.3rem;
      }
      .van-row {
        text-align: center;
      }
    }
    .van-tabs {
      .van-tabs__content {
        .van-tab__pane2 {
          .van-cell {
            position: relative;
            .van-cell__title {
              color: #969799;
            }
            .van-cell__value {
              flex: 3;
              text-align: left;
            }
          }
          .van-cell::after {
            border-top-width: 1px;
          }
        }
      }
    }
  }

  .d-home-parameter-bottom {
    width: 100%;
    height: 50px;
  }
}
</style>
