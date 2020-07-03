<!--  -->
<template>
  <div class="class-category">
    <van-cell-group>
      <van-cell title="data.name" v-for="(data, index) in datalist" :key="index">
        <template #title>
          <div>{{data.name}}</div>
        </template>
        <template #label>
          <div>{{data.English}}</div>
        </template>
        <template #right-icon>
          <img v-lazy="data.img" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { postClassData } from "../../api/class";
export default {
  name: "",
  computed: {},
  created() {
    // 获取数据并合并到本地中
    const post = postClassData("1");
    post.then(data => {
      data.data.forEach((item, i) => {
        this.datalist[i] = Object.assign(this.datalist[i], item);
      });
    });
  },
  data() {
    return {
      postdata: "",
      datalist: [
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/3@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          img: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.class-category {
  overflow-y: auto;
  height: 100%;
  .van-cell-group {
    .van-cell {
      background: rgba(241, 241, 241, 1);
      margin: 0.1rem 0rem;
      img {
        width: 30%;
        height: 20%;
      }
    }
  }
}
</style>