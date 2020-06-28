<!--  -->
<template>
  <div class="d-home-positioning">
    <form action="/">
      <van-search
        v-model="searchtext.name"
        @input="oninput"
        @search="onSearch"
        show-action
        placeholder="请输入关键字"
        left-icon="arrow-down"
        label="商品"
      >
        <template #left>
          <van-icon @click="backHistory" size=".40rem" name="arrow-left" />
        </template>
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </form>
    <div class="addressshow" v-if="addressshow">
      <div
        class="addressshow-text"
        @click="cikaddressshow(datas)"
        v-for="(datas, index) in searchdatalist"
        :key="index"
      >{{datas.name}}</div>
    </div>
    <div class="d-home-positioning-content">
      <div class="d-home-positioning-hot">
        <div class="d-home-positioning-hot-title">大家都在搜索</div>
        <div class="d-home-positioning-hot-content">
          <lazy-component>
            <span v-for="hot in hotList" v-lazy="hot" :key="hot">{{hot}}</span>
          </lazy-component>
        </div>
      </div>
      <div class="d-home-positioning-history">
        <van-cell title="历史记录" />
        <van-cell icon="underway-o" title="原木茶几" />
        <van-cell icon="underway-o" title="北欧沙发床" />
        <van-cell icon="underway-o" title="南欧床沙发" />
      </div>
      <div class="d-home-positioning-delete">
        <van-button icon="delete" plain hairline type="default" color="rgba(0, 0, 0, 0.7)">清除历史记录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { postHomeGoodsSearchData } from "../../../api/home";
export default {
  name: "",

  methods: {
    onSearch() {
      const goodsId = this.searchtext.id;

      if (goodsId !== "") {
        this.$router.push({
          path: "/home/parameter",
          query: { goodsId: goodsId }
        });
      }
    },
    oninput() {
      this.addressshow = true;
      postHomeGoodsSearchData(this.searchtext.name).then(data => {
        this.searchdatalist = data.data;
      });
    },
    cikaddressshow(e) {
      this.addressshow = false;
      this.searchtext.name = e.name;
      this.searchtext.id = e.categoryFid;
    },
    backHistory() {
      //点击跳转至上次浏览页面
      this.$router.go(-1);
    }
  },
  data() {
    return {
      searchtext: { name: "", id: "" },
      addressshow: false,
      searchdatalist: {},
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      hotList: [
        "床头柜",
        "简洁双开门衣柜",
        "可爱冰箱曦",
        "现代文艺吊灯",
        "小清晰客厅绿植",
        "儿童床"
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-positioning {
  height: 100%;
  background: rgba(241, 241, 241, 1);
  form {
    height: 1rem;
    .van-search {
    }
  }
  .addressshow {
    z-index: 2;
    background: rgba(241, 241, 241, 1);
    position: absolute;
    background: transparent;
    .addressshow-text {
      width: 5.8rem;
      height: 0.3rem;
      background: #fff;
      padding: 0.2rem 0rem;
      margin: 0rem 0.8rem;
    }
  }
  .d-home-positioning-content {
    height: calc(100%);
    overflow-y: auto;
    .d-home-positioning-hot {
      .d-home-positioning-hot-title {
        background: #fff;
        color: rgba(0, 0, 0, 0.5);
        width: 100%;
        padding: 0.2rem 0.3rem;
        font-size: 0.3rem;
      }

      .d-home-positioning-hot-content {
        background: #fff;
        div {
          padding: 0.2rem 0.4rem;
          display: flex;
          flex-flow: row wrap;
          span {
            background: #fff;
            margin: 1.5% 2.5%;
            padding: 0.2rem 0.2rem;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  .d-home-positioning-history {
    padding: 0.2rem 0rem 0rem 0rem;
  }
  .d-home-positioning-delete {
    padding-top: 1rem;
    background: #fff;
    text-align: center;
    height: 35%;
  }
}
</style>