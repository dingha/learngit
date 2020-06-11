<!--  -->
<template>
  <div class>
    <van-tabbar v-model="active" active-color="red" inactive-color="#000">
      <van-tabbar-item
        :name="data.path"
        :to="{path: data.path, query:$route.query.active}"
        v-for="(data, index) in datalist"
        :key="index"
      >
        <span>{{data.name}}</span>
        <template #icon="props">
          <img :src="props.active ? data.redimage : data.image" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  watch: {
    // 监听数据前后变化
    // active: function(val) {
    //   console.log(val, 2344);
    //   //数据前后变化
    // }
    //如果watch监测的是一个对象的话，直接使用watch是不行的，此时我们可以借助于computed计算属性来完成
    //或者在键路径加上引号
  },
  methods: {},
  updated() {
    if (this.$route.query.id === "/car") {
      this.active = this.$route.query.id;
      this.$route.query.id = null;
    }
  },
  data() {
    return {
      props: ["id", "age"],
      active: "/home",
      datalist: [
        {
          redimage: require("../../assets/icon/homered@3x.png"),
          image: require("../../assets/icon/homegrey@3x.png"),
          name: "首页",
          path: "/home"
        },
        {
          image: require("../../assets/icon/classgray@2x.png"),
          redimage: require("../../assets/icon/classred@3x.png"),
          name: "分类",
          path: "/class"
        },
        {
          image: require("../../assets/icon/cargray@3x.png"),
          redimage: require("../../assets/icon/carred@3x.png"),
          name: "购物车",
          path: "/car"
        },
        {
          image: require("../../assets/icon/mygray@3x.png"),
          redimage: require("../../assets/icon/myred@3x.png"),
          name: "我的",
          path: "/my"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
</style>