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
          <img v-lazy="data.image" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      datalist: [
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/3@3x.png"),
          name: "席梦思",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
          name: "沙发",
          English: "The sofa"
        },
        {
          image: require("../../assets/png/home/goods/2@3x.png"),
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