<!--  -->
<template>
  <div class="car">
    <div class="thereare" v-if="thereareshow">
      <van-checkbox-group v-model="results" ref="checkboxGroup">
        <div class="thereare-checkbox-content" v-for="(data, index) in datalist" :key="index">
          <p class="thereare-title">
            <van-checkbox label-disabled @click="oncheckbox" :name="data">家居 Design</van-checkbox>
          </p>
          <van-checkbox
            :v-model="true"
            label-disabled
            @click="oncheckbox"
            class="van-checkbox-content"
            :name="data"
          >
            <template #default>
              <van-card
                :num="data.num"
                :price="data.price"
                :title="data.name"
                desc="400*400*56cm;黑虎桃木"
                :thumb="data.img"
              >
                <template #tags>
                  <p>胡桃木色</p>
                </template>
                <template #footer>
                  <span>{{messages[index].name}}</span>
                  <button v-if="onmessages" @click.stop="onmessages(index)">留言</button>
                </template>
              </van-card>
            </template>
          </van-checkbox>
        </div>
      </van-checkbox-group>
      <div class="car-footer">
        <van-submit-bar :price="totalprice" @submit="onSubmit" type="warning" button-text="去结算">
          <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
    <div class="car-empty" v-if="emptyshow">
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
        <van-submit-bar :price="0" type="warning" button-text="去结算">
          <van-checkbox @click="checkAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import { postCarOrderData } from "../../api/car";
export const messagesss = [
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" },
  { name: "我要圆通快递发货啊1" }
]; // 临时的messages
export default {
  name: "",
  created() {
    this.messages = messagesss;
    // 商品信息
    const post = postCarOrderData();
    post
      .then(data => {
        data.data.data.forEach((item, i) => {
          if (i < this.datalist.length) {
            this.datalist[i] = Object.assign(this.datalist[i], item);
          } else {
            this.datalist.push(item);
          }
        });
        if (data.data.count >= 0) {
          this.thereareshow = true;
          this.emptyshow = false;
        } else {
          this.thereareshow = false;
          this.emptyshow = true;
        }
      })
      .catch(err => {
        return err;
      });
  },
  methods: {
    onmessages(index) {
      this.$router.push({
        path: "/car/messageboard",
        query: { data2: index }
      });
    },
    oncheckbox() {
      this.totalprice = 0;
      this.results.forEach(item => {
        this.totalprice += item.num * item.price * 100;
      });
    },
    // 去结算
    onSubmit() {
      if (this.results.length > 0) {
        this.$router.push({
          path: "/car/confirm",
          query: { id: "/car/confirm", data: this.results }
        });
      }
    },
    checkAll() {
      this.results = this.datalist;
      this.checked ? (this.results = this.datalist) : (this.results = []);
      this.totalprice = 0;
      this.results.forEach(item => {
        this.totalprice += item.num * item.price * 100;
      });
    }
  },
  data() {
    return {
      checkeds: true,
      totalprice: 0,
      results: [],
      thereareshow: false,
      emptyshow: true,
      checked: false,
      result: "",
      messages: [
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" },
        { name: "我要圆通快递发货啊" }
      ],
      datalist: [
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          title: "家居 Design",
          name: "木质设计感茶几",
          specifications: "400*400*56cm;黑虎桃木",
          color: "胡桃木色",
          num: 5,
          price: 10
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.car {
  width: 100%;
  height: 100%;
}
.thereare {
  width: 100%;
  height: 100%;
  position: relative;
  .van-checkbox-group {
    overflow-y: auto;
    width: 100%;
    height: 92%;
    .thereare-checkbox-content {
      margin: 0.2rem 0rem;
      height: 35%;
      background: #fff;
      .thereare-title {
        height: 20%;
        width: 100%;
        padding: 1% 0%;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
        .van-checkbox {
          padding: 0rem 0.2rem;
          height: 100%;
          width: 100%;
          align-items: center;
          display: flex;
        }
      }
      /deep/ {
        .van-checkbox-content {
          padding: 0.1rem 0.2rem;
          height: 80%;
          width: 100%;
          width: calc(100% - 0.4rem);
          align-items: end;
          .van-checkbox__icon {
            height: 50%;
            -webkit-align-items: center;
            align-items: center;
            display: flex;
          }
          .van-checkbox__label {
            height: 100%;
            width: 100%;
            .van-card {
              padding: 0px 0px;
              background: #fff;
            }
            .van-card__footer {
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 0.2rem 0rem;
              span {
                color: rgba(0, 0, 0, 0.5);
              }
              span + span {
                color: black;
                font-size: 0.28rem;
              }
            }
          }
        }
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