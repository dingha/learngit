<!--  -->
<template>
  <div class="class-style">
    <van-collapse v-model="activeNames">
      <van-collapse-item :name="index" v-for="(data, index) in datalist" :key="index">
        <template #right-icon>
          <img v-lazy="data.image" />
          <p>124</p>
          <p>124</p>
        </template>
        <template #default>
          <van-cell-group>
            <van-cell :van-tag="12213" is-link>
              <template #title>
                <span class="custom-title">单元格</span>
                <span class="custom-title">单元格</span>
              </template>
            </van-cell>
            <van-cell :van-tag="12213" is-link>
              <template #title>
                <span class="custom-title">单元格</span>
                <span class="custom-title">单元格</span>
              </template>
            </van-cell>
          </van-cell-group>
        </template>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeNames: [""],
      datalist: [
        {
          image: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.class-style {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  .van-collapse {
    .van-collapse-item {
      margin: 0.1rem 0rem;
      position: relative;
      /deep/ {
        .van-cell {
          padding: 0rem 0rem;
          img {
            width: 100%;
            height: 100%;
          }
          p {
            position: absolute;
            width: 100%;
            text-align: center;
            padding: 0.1rem 0rem;
            font-size: 0.36rem;
            color: #fff;
            top: 35%;
          }
          p + p {
            position: absolute;
            width: 100%;
            text-align: center;
            padding: 0.1rem 0rem;
            font-size: 0.26rem;
            color: rgba(#fff, 0.8);
            top: 50%;
          }
        }
      }
    }
  }
}
</style>