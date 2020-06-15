<!--  -->
<template>
  <div class="confirm">
    <div class="confirm-top">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <div class="confirm-content">
      <div class="confirm-positioning">
        <van-cell title="单元格" is-link label="浙江省杭州市江干区酱酱大道213号酿酿小区">
          <template #title>
            <div class="title-top">
              <span>张三</span>
              <span>15675519021</span>
            </div>
          </template>
          <template #label>
            <van-icon name="location-o" />
            <span>浙江省杭州市江干区酱酱大道213号酿酿小区</span>
          </template>
        </van-cell>
      </div>

      <van-cell-group v-model="result" class="confirm-content-content">
        <div class="confirm-cell-content" v-for="(data, index) in datalist" :key="index">
          <p class="confirm-title">
            <van-cell :name="index">{{data.title}}</van-cell>
          </p>
          <van-cell class="van-cell-content" :name="index">
            <template #default>
              <van-card
                num="32"
                price="2.00"
                :title="data.name"
                :desc="data.specifications"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              >
                <template #tags>
                  <p>{{data.color}}</p>
                </template>
                <template #num>
                  <van-stepper integer />
                </template>
                <template #footer>
                  <div class="footer-top">
                    <van-field rows="1" autosize label="留言：" type="textarea" placeholder="请输入留言" />
                  </div>
                  <div class="footer-bottom">
                    <span class="footer-bottom-num">共计 1 件商品</span>
                    <span>小计：</span>
                    <span class="footer-bottom-price">￥290</span>
                  </div>
                </template>
              </van-card>
            </template>
          </van-cell>
        </div>
      </van-cell-group>
      <van-cell-group class="confirm-content-bottom">
        <van-cell title="配送方式" is-link value="快递 免邮" />
        <van-cell title="使用积分">
          <template #title>
            <span>使用积分</span>
            <span>可用1000积分抵扣10元</span>
          </template>
          <template #right-icon>
            <van-checkbox v-model="checked" shape="square"></van-checkbox>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="confirm-buttom">
      <van-cell title="单元格" value="内容" label="描述信息">
        <template #title>
          <span>合计：</span>
          <span>￥870</span>
        </template>
        <template #label>
          <span>共3件商品</span>
        </template>
        <template #default>
          <van-button color="rgba(212, 33, 29, 1)" type="danger">提交订单</van-button>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      checked: false,
      result: [true],
      datalist: [
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          title: "家居 Design",
          name: "木质设计感茶几",
          specifications: "400*400*56cm;黑虎桃木",
          color: "胡桃木色"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          title: "家居 Design",
          name: "木质设计感茶几",
          specifications: "400*400*56cm;黑虎桃木",
          color: "胡桃木色"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          title: "家居 Design",
          name: "木质设计感茶几",
          specifications: "400*400*56cm;黑虎桃木",
          color: "胡桃木色"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //   Toast("按钮");
    }
  }
};
</script>
<style lang='scss' scoped>
.confirm {
  background: rgba(241, 241, 241, 1);
  position: relative;
  width: 100%;
  height: 100%;
  .confirm-top {
    width: 100%;
    height: 6.9%;
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
    }
  }
  .confirm-content {
    overflow-y: auto;
    width: 100%;
    height: 87%;
    .confirm-positioning {
      padding: 0.2rem 0rem;
      .van-cell {
        align-items: center;
        display: flex;
        .title-top {
          padding-left: 0.3rem;
        }
        .van-cell__title {
          .van-cell__label {
            font-size: 0.28rem;
          }
        }
      }
    }

    .confirm-content-content {
      background: rgba(241, 241, 241, 1);
      .confirm-title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
      .confirm-cell-content {
        margin: 0.2rem 0rem;
        .van-cell-content {
          padding: 0 0;
          .van-cell__value {
            .van-card {
              background-color: #fff;
              padding: 0 0;
              .van-card__header {
                padding: 0.2rem 0rem;
                .van-card__num {
                  padding: 0 0.2rem;
                  .van-stepper {
                    /deep/ {
                      border: 1px solid rgba(0, 0, 0, 0.2);
                      .van-stepper__minus,
                      .van-stepper__plus {
                        background-color: #fff;
                      }
                      .van-stepper__plus {
                        color: rgba(212, 33, 29, 1);
                      }

                      .van-stepper__input {
                        background-color: #fff;
                        margin: 0;
                        border-left: 1px solid rgba(0, 0, 0, 0.2);
                        border-right: 1px solid rgba(0, 0, 0, 0.2);
                      }
                    }
                  }
                }
              }
              .van-card__footer {
                /deep/ {
                  .footer-top {
                    .van-cell {
                      border-top: 1px solid rgba(0, 0, 0, 0.1);
                      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                      padding: 8px 0px;
                      .van-field__label {
                        width: 16%;
                      }
                    }
                  }
                  .footer-bottom {
                    padding: 0.1rem 0rem;
                    padding-right: 0.2rem;
                    .footer-bottom-num {
                      padding-right: 0.2rem;
                    }
                    .footer-bottom-price {
                      color: rgba(212, 33, 29, 1);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .confirm-content-bottom {
      margin: 0.2rem 0rem;
      .van-cell {
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        .van-cell__title {
          flex: 4;
        }
        .van-cell__value {
          color: unset;
        }
      }
      .van-cell + .van-cell {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
  .confirm-buttom {
    width: 100%;
    height: 6.1%;
    .van-cell {
      padding: 0 0;
      line-height: inherit;
      height: 100%;
      align-items: center;
      display: flex;
      .van-cell__title {
        padding-left: 0.2rem;
        span + span {
          color: rgba(212, 33, 29, 1);
        }
      }
    }
  }
}
</style>