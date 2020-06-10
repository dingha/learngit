<!--  -->
<template>
  <div class="editor">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <div class="editor-checkbox-content" v-for="(data, index) in datalist" :key="index">
        <p class="editor-title">
          <van-checkbox :name="index">{{data.title}}</van-checkbox>
        </p>
        <van-checkbox class="van-checkbox-content" :name="index">
          <template #default>
            <van-cell-group>
              <van-cell center>
                <template #title>
                  <img v-lazy="data.image" />
                </template>
                <template #default>
                  <van-stepper integer />
                </template>
              </van-cell>
              <div class="van-checkbox-content-bottom">
                <span>的暂未编辑语言</span>
                <span>留言</span>
              </div>
            </van-cell-group>
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
.editor {
  width: 100%;
  height: 100%;
  position: relative;
  .van-checkbox-group {
    overflow-y: auto;
    width: 100%;
    height: 92%;
    .editor-checkbox-content {
      margin: 0.2rem 0rem;
      height: 35%;
      background: #fff;
      .editor-title {
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
            height: 90%;
            width: 100%;
            .van-cell-group {
              width: 100%;
              height: 100%;
              .van-cell {
                width: 100%;
                height: 80%;
                display: flex;
                .van-cell__title {
                  flex: 3;
                  width: 100%;
                  height: 100%;
                  align-items: center;
                  display: flex;
                  img {
                    width: 100%;
                    height: 60%;
                  }
                }
                .van-cell__value {
                  flex: 5;
                  text-align: center;
                  background-color: #fff;
                  .van-stepper__input {
                    margin: 0rem;
                    background-color: #fff;
                    width: 40%;
                    border-top: 0.1rem;
                    border-top: 1px solid rgba(0, 0, 0, 0.2);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                  }
                  .van-stepper__minus,
                  .van-stepper__plus {
                    background-color: #fff;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    border-radius: 0;
                  }
                  .van-stepper__plus {
                    color: #d52321;
                  }
                }
              }
              .van-checkbox-content-bottom {
                height: 20%;
                width: calc(100% - 0.4rem);
                display: flex;
                padding: 0rem 0.2rem;
                justify-content: space-between;
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