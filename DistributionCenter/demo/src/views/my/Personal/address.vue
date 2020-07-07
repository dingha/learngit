<!--  -->
<template>
  <div class="container">
    <NavBar Navbartitle="地址" refresh="-1" righticon="plus" rightpath="/my/newaddress" />
    <!-- 未添加地址状态 -->
    <div class="bottom" v-if="addressshow1">
      <div class="bottom-img">
        <img src="../../../assets/my/nulllocate@3x.png" />
      </div>
      <span>你还未添加常用地址</span>
      <span>点击右上角“+”，添加常用地址</span>
    </div>

    <!-- 添加地址状态 -->
    <div class="bottom1" v-if="addressshow2">
      <van-cell title="张三" label="地址：北京市张家口市区">
        <div slot="title">
          <div class="van-cell-span">张三</div>
          <div class="van-cell-span">13858548787</div>
        </div>
      </van-cell>
      <van-cell value="编辑 删除">
        <div slot="title">
          <van-checkbox v-model="checked" @change="onChange">设为默认</van-checkbox>
        </div>
      </van-cell>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/index";
export default {
  name: "",
  components: { NavBar },
  data() {
    return {
      addressshow1: false,
      addressshow2: true,
      checked: true
    };
  },
  methods: {
    onChange() {}
  }
};
</script>
<style lang='scss' scoped>
.container {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background: rgba(241, 241, 241, 1);
} /* 头部导航 navbar */

.bottom {
  width: 100%;
  height: 12rem;
  font-size: 0.33rem;
}
.bottom-img {
  width: 100%;
  height: 26%;
  padding: 2rem 0rem 1.33rem 0rem;
  text-align: center;
}
.bottom-img img {
  width: 30%;
  height: 100%;
}
.bottom span {
  text-align: center;
  width: 100%;
  display: block;
  color: slategrey;
} /* 底部地址 */
.bottom1 {
  width: 100%;
  height: 30%;
  padding-top: 5%;
}
.bottom1 .van-cell {
  width: 100%;
  height: 33%;
}
</style>