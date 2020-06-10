<!--  -->
<template>
  <div class="d-home-positioning">
    <form action="/">
      <van-search show-action left-icon left placeholder="请输入城市/拼音">
        <template #left>
          <van-icon @click="backHistory" size=".40rem" name="arrow-left" />
        </template>
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </form>
    <div class="d-home-positioning-current">当前定位：杭州市</div>
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
        <van-index-anchor index="1">标题1</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="2">标题2</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="3">标题3</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="4">标题4</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="5">标题5</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="6">标题6</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  methods: {
    backHistory() {
      //点击跳转至上次浏览页面
      this.$router.go(-1);
    }
  },
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    .van-search {
    }
  }
  .d-home-positioning-current {
    background: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    width: 100%;
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
    .van-index-anchor {
    }
    .van-cell {
      .van-cell__title {
      }
    }
  }
}
</style>