<!--  -->
<template>
  <div class>
    <van-tabbar v-model="active" active-color="red" inactive-color="#000">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.homered : icon.homegrey" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/class">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? icon.classred : icon.classgray" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/car">
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? icon.carred : icon.cargray" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item to="/my">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.myred : icon.mygray" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      active: 0,

      icon: {
        //  require('path/to/image'),
        homered: require("../../assets/icon/homered@3x.png"),
        homegrey: require("../../assets/icon/homegrey@3x.png"),
        classgray: require("../../assets/icon/classgray@2x.png"),
        classred: require("../../assets/icon/classred@3x.png"),
        cargray: require("../../assets/icon/cargray@3x.png"),
        carred: require("../../assets/icon/carred@3x.png"),
        mygray: require("../../assets/icon/mygray@3x.png"),
        myred: require("../../assets/icon/myred@3x.png")
      }
    };
  }
};
</script>
<style lang='scss' scoped>
</style>