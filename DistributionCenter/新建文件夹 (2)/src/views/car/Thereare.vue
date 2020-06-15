<!--  -->
<template>
  <div class="thereare">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div class="thereare-checkbox-content" v-for="(data, index) in datalist" :key="index">
        <p class="thereare-title">
          <van-checkbox :name="index">{{data.title}}</van-checkbox>
        </p>
        <van-checkbox class="van-checkbox-content" :name="index">
          <template #default>
            <van-card
              num="2"
              price="2.00"
              :title="data.name"
              :desc="data.specifications"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
              <template #tags>
                <p>{{data.color}}</p>
              </template>
              <template #footer>
                <span>的暂未编辑语言</span>
                <span>留言</span>
              </template>
            </van-card>
          </template>
        </van-checkbox>
      </div>
    </van-checkbox-group>
    <div class="car-footer">
      <van-submit-bar :price="3050" type="warning" button-text="去结算">
        <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    checkAll() {
      this.checked
        ? this.$refs.checkboxGroup.toggleAll(true)
        : this.$refs.checkboxGroup.toggleAll();
    }
  },
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
  }
};
</script>
<style lang='scss' scoped>
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
</style>