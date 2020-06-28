<!--  -->
<template>
  <div class="d-home-positioning">
    <form action="/">
      <van-search
        v-model="searchtext"
        @input="oninput"
        @search="onSearch"
        show-action
        placeholder="请输入城市/拼音"
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
        @click="cikaddressshow($event)"
        v-for="(datas, index) in searchdatalist"
        :key="index"
      >{{datas.name}}</div>
    </div>
    <div class="d-home-positioning-current">当前定位：{{addressstext}}</div>
    <div class="d-home-positioning-content">
      <div class="d-home-positioning-hot">
        <div class="d-home-positioning-hot-title">热门城市</div>
        <div class="d-home-positioning-hot-content">
          <lazy-component>
            <span v-for="hot in hotList" v-lazy="hot" :key="hot">{{hot}}</span>
          </lazy-component>
        </div>
      </div>
      <van-index-bar :index-list="indexList">
        <div v-for="(data, index) in address" :key="index">
          <van-index-anchor :index="data.title">{{data.title}}</van-index-anchor>
          <van-cell
            @click="onSearchs(data)"
            :title="data"
            v-for="(data, index) in data.addresslist"
            :key="index"
          />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import { postHomePositioningData } from "../../../api/home";
export default {
  name: "",
  methods: {
    onSearch() {
      this.addressstext = this.searchtext;
    },
    onSearchs(data) {
      this.addressstext = data;
    },
    oninput() {
      this.addressshow = true;
      postHomePositioningData(this.searchtext).then(data => {
        this.searchdatalist = data.data.data;
      });
    },
    backHistory() {
      //点击跳转至上次浏览页面
      this.$router.go(-1);
    },
    cikaddressshow(e) {
      this.addressshow = false;
      this.searchtext = e.target.innerHTML;
    }
  },
  data() {
    return {
      addressstext: "杭州市",
      addressshow: true,
      searchtext: "",
      searchdatalist: {},
      indexList: [
        "A",
        "B",
        "C",
        "F",
        "G",
        "H",
        "J",
        "L",
        "M",
        "N",
        "Q",
        "S",
        "T",
        "X",
        "Z"
      ],
      hotList: [
        "北京市",
        "天津市",
        "上海市",
        "成都市",
        "广州市",
        "南京市",
        "武汉市",
        "厦门市",
        "重庆市",
        "长沙市"
      ],
      address: [
        { title: "A", addresslist: ["安徽"] },
        { title: "B", addresslist: ["北京市"] },
        { title: "C", addresslist: ["重庆市"] },
        { title: "F", addresslist: ["福建"] },
        { title: "G", addresslist: ["甘肃", "贵阳市"] },
        {
          title: "H",
          addresslist: [
            "海南市",
            "河北市",
            "黑龙江市",
            "河南",
            "香港",
            "湖北",
            "湖南"
          ]
        },
        { title: "J", addresslist: ["江苏", "江西", "吉林"] },
        { title: "L", addresslist: ["辽宁"] },
        { title: "M", addresslist: ["澳门"] },
        { title: "N", addresslist: ["蒙古", "宁夏"] },
        { title: "Q", addresslist: ["青海"] },
        { title: "S", addresslist: ["山东", "上海", "山西", "陕西", "四川"] },
        { title: "T", addresslist: ["天津", "台湾"] },
        { title: "X", addresslist: ["新疆", "西藏"] },
        { title: "Y", addresslist: ["云南"] },
        { title: "Z", addresslist: ["浙江"] }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.d-home-positioning {
  height: 100%;
  overflow: auto;
  background: rgba(241, 241, 241, 1);
  form {
    height: 1rem;
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
      padding: 0.1rem 0rem;
      margin: 0rem 0.8rem;
    }
  }
  .d-home-positioning-current {
    background: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    padding: 0.2rem 0.2rem;
  }
  .d-home-positioning-content {
    height: calc(100% - 1.66rem);
    overflow-y: auto;
    .d-home-positioning-hot {
      .d-home-positioning-hot-title {
        font-weight: bold;
        width: 100%;
        padding: 0.2rem 0.2rem;
        font-size: 0.3rem;
      }

      .d-home-positioning-hot-content {
        background: #fff;
        div {
          padding: 0.2rem 0.4rem;
          display: flex;
          flex-flow: row wrap;
          span {
            flex: 0 0 20%;
            background: rgba(241, 241, 241, 1);
            margin: 1.5% 2.5%;
            padding: 0.1rem 0rem;
            text-align: center;
          }
        }
      }
    }
  }
  .van-index-bar {
    /deep/ {
      .van-index-bar__sidebar {
        right: 0.2rem;
        color: red;
        .van-index-bar__index {
          font-size: 0.26rem;
          height: 0.4rem;
        }
      }
    }
  }
}
</style>