<!--  -->
<template>
  <div class="messageboard">
    <div class="messageboard-top">
      <van-nav-bar
        title="留言"
        right-text="提交"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <van-cell title="单元格" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <van-image width="30%" height="50%" :src="datalist.image" />
      </template>
      <template #title>
        <p>{{datalist.name}}</p>
        <p>{{datalist.price}}</p>
      </template>
    </van-cell>
    <textarea v-model="textareas" autofocus :placeholder="messagesss[this.$route.query.data2].name"></textarea>
  </div>
</template>

<script>
import { messagesss } from "./Thereare";
export default {
  name: "",
  created() {
    this.messagesss = messagesss;
  },
  data() {
    return {
      messagesss: [],
      textareas: "",
      datalist: {
        image: require("../../assets/png/home/goods/2@3x.png"),
        title: "家居 Design",
        name: "木质设计感茶几",
        specifications: "400*400*56cm;黑虎桃木",
        price: "￥266"
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      messagesss[this.$route.query.data2].name = this.textareas;
      this.$router.push({
        path: "/car/thereare",
        query: { id: "/car/thereare" }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.messageboard {
  width: 100%;
  height: 100%;
  .messageboard-top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    /deep/ {
      .van-nav-bar__left {
        .van-icon {
          color: black;
        }
      }
      .van-nav-bar__title {
        font-size: 0.4rem;
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: black;
        }
      }
    }
  }
  .van-cell {
    padding: 0.4rem 16px;
  }
  textarea {
    width: 80%;
    height: 25%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 0rem 10%;
  }
}
</style>