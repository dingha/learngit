<!--  -->
<template>
  <div class="class-space">
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item :name="index" v-for="(data, index) in datalist" :key="index">
        <template #right-icon>
          <img v-lazy="data.img" />
          <p>{{data.name}}</p>
          <p>{{data.English}}</p>
        </template>
        <template #default>
          <van-cell-group>
            <van-cell
              @click="gotoparameter(datas)"
              :van-tag="12213"
              v-for="(datas, index) in data.content"
              :key="index"
            >
              <template #title>
                <span class="custom-title">{{datas.name}}</span>
                <span class="custom-title">{{datas.ename}}</span>
              </template>
            </van-cell>
          </van-cell-group>
        </template>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { postClassData, postClassData2 } from "../../api/class";
export default {
  name: "",
  methods: {
    gotoparameter(datas) {
      console.log(datas);
      const goodsId = datas.id;
      this.$router.push({
        path: "/home/parameter",
        query: { goodsId: goodsId }
      });
    }
  },
  created() {
    // 获取数据并合并到本地中
    const post1 = postClassData("1");
    const post2 = postClassData2("2");
    post1.then(data => {
      data.data.forEach((item, i) => {
        this.datalist[i] = Object.assign(this.datalist[i], item);
      });
    });
    post2.then(data => {
      data.data.forEach((item, i) => {
        this.datalist[i].content = data.data;
      });
    });
  },
  data() {
    return {
      activeNames: [""],
      datalist: [
        {
          img: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/piceur@3x.png"),
          name: "沙发",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        },
        {
          img: require("../../assets/png/class/picli@3x.png"),
          name: "席梦思",
          English: "The sofa",
          content: [{ name: "沙发", ename: "saear" }]
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.class-space {
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
          width: 100%;
          img {
            width: 100%;
            height: 1.8rem;
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