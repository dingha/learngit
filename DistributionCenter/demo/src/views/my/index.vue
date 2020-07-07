<!--  -->
<template>
  <div class="my">
    <NavBar ref="childrenDom" />
    <div class="navbar">
      <van-nav-bar
        fixed
        :title="Navbartitle"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <van-image :src="Navbarleftimg" />
        </template>
        <template #right>
          <van-image :src="Navbarrightimg" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 用户 openid -->
    <div class="userinfo">
      <van-image @click="onGetUserInfo" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="userinfo-text">一不小心闪到腰</div>
    </div>
    <!-- 头部的底部 headerbottom -->
    <div class="headerbottom">
      <van-grid direction="horizontal" :column-num="4">
        <van-grid-item
          icon="photo-t"
          :text="data.name"
          v-for="(data, index) in toplist.bottomdata"
          :key="index"
        >
          <template #icon>
            <van-image :src="data.img" />
          </template>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 我的订单 myorder -->
    <div class="myorder">
      <van-cell title="我的订单" @click="onmyorder" is-link value="查看全部订单" />
      <div class="myorder-bottom">
        <van-grid :column-num="4">
          <van-grid-item
            icon="photo-t"
            :text="data.name"
            v-for="(data, index) in myorder.orderimg"
            :key="index"
          >
            <template #icon>
              <van-image class="myorderimg" lazy-load :src="data.img" />
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 底部列表 bottomlist -->
    <div class="bottomlist1">
      <van-cell
        @click="bottomlist1"
        :title="data.name"
        is-link
        v-for="(data, index) in bottomlist1"
        :key="index"
      >
        <template #title>
          <van-image
            style="width: .4rem; height: .4rem;"
            class="myorderimg"
            lazy-load
            :src="data.img"
          ></van-image>
          {{data.name}}
        </template>
      </van-cell>
    </div>

    <div class="bottomlist2">
      <van-cell
        @click="bottomlist2"
        :title="data.name"
        is-link
        v-for="(data, index) in bottomlist2"
        :key="index"
      >
        <template #title>
          <van-image
            style="width: .4rem; height: .4rem;"
            class="myorderimg"
            lazy-load
            :src="data.img"
          ></van-image>
          {{data.name}}
        </template>
      </van-cell>
    </div>
    <div class="bottomlist3">
      <van-cell
        @click="bottomlist1"
        :title="data.name"
        is-link
        v-for="(data, index) in bottomlist3"
        :key="index"
      >
        <template #title>
          <van-image
            style="width: .4rem; height: .4rem;"
            class="myorderimg"
            lazy-load
            :src="data.img"
          ></van-image>
          {{data.name}}
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/index";

export default {
  data() {
    return {
      Navbartitle: "留言",
      Navbarleftimg: require("../../assets/my/set@3x.png"),
      Navbarrightimg: require("../../assets/my/ring@3x.png"),
      toplist: {
        NavbarLeftimg: "../../images/set@3x.png",
        NavbarRightimg: "../../images/ring@3x.png",
        myname: "一不小心闪到腰",
        bottomdata: [
          { name: "签到", img: require("../../assets/my/qian-@3x.png") },
          { name: "收藏", img: require("../../assets/my/shou@3x.png") },
          { name: "分享", img: require("../../assets/my/sharee@3x.png") },
          { name: "足迹", img: require("../../assets/my/foot@3x.png") }
        ]
      },
      myorder: {
        orderimg: [
          { name: "待付款", img: require("../../assets/my/fu@3x.png") },
          { name: "待发货", img: require("../../assets/my/fa@3x.png") },
          { name: "配送中", img: require("../../assets/my/song@3x.png") },
          { name: "待评价", img: require("../../assets/my/ping@3x.png") }
        ]
      },
      bottomlist1: [
        { name: "会员等级", img: require("../../assets/my/guan@3x.png") },
        { name: "我的积分", img: require("../../assets/my/fen@3x.png") },
        { name: "我的卡券", img: require("../../assets/my/ka@3x.png") }
      ],
      bottomlist2: [
        { name: "我的评价", img: require("../../assets/my/pingp@3x.png") },
        { name: "退款维权", img: require("../../assets/my/tui@3x.png") }
      ],
      bottomlist3: [
        { name: "我的预约体验", img: require("../../assets/my/ti@3x.png") },
        { name: "我的预约设计", img: require("../../assets/my/she@3x.png") }
      ],
      datalist: []
    };
  },
  created() {},
  methods: {
    onmyorder() {
      this.$router.push({
        path: "/my/order"
      });
    },

    onClickLeft() {
      this.$router.push({
        path: "/my/setup"
      });
    },
    onGetUserInfo() {
      this.$router.push({
        path: "/my/information"
      });
    },
    onClickRight() {}
  },
  name: "",
  components: { NavBar }
};
</script>
<style lang="scss" scoped>
.my {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background: rgba(241, 241, 241, 1);
  overflow-y: auto;
  .navbar {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    /deep/ {
      .van-nav-bar__left {
        .van-image__img {
          width: 0.4rem;
          height: 0.4rem;
        }
        .van-icon {
          color: black;
        }
      }
      .van-nav-bar__title {
        font-size: 0.4rem;
      }
      .van-nav-bar__right {
        .van-image__img {
          width: 0.4rem;
          height: 0.4rem;
        }
        .van-nav-bar__text {
          color: black;
        }
      }
    }
  }
  /* 用户头像名称 my */
  .userinfo {
    text-align: center;
    align-items: center;
    display: flex;
    height: 18%;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    .van-image {
      width: 1rem;
      height: 1rem;
    }
    .userinfo-text {
      font-size: 0.3rem;
      padding-top: 0.2rem;
    }
  }
  /* 头部的底部 headerbottom  */
  .headerbottom {
    background-color: #fff;
    width: 90%;
    height: 7%;
    padding: 0% 5%;
    align-items: center;
    display: flex;
    .van-grid {
      width: 100%;
      height: 100%;
      /deep/ {
        .van-grid-item {
          .van-grid-item__content {
            padding: 0;
          }
          .van-image {
            width: 0.4rem;
            height: 0.5rem;
            padding-right: 0.1rem;
          }
        }
      }
    }
  }
  /* 我的订单 myorder */
  .myorder {
    padding: 0.2rem 0;
    width: 100%;
    height: 15%;
    .van-cell {
      padding: 0.2rem 0.2rem !important;
    }
    .myorder-bottom {
      /deep/ {
        padding-bottom: 0.2rem;
        background: #fff;
        .van-grid-item__content {
          padding: 0;
          .van-image__img {
            width: 0.4rem !important;
            height: 0.4rem !important;
          }
        }
      }
    }
  }
  /* 底部列表 bottomlist */
  .bottomlist1,
  .bottomlist2,
  .bottomlist3 {
    width: 100%;
    padding-top: 0.2rem;
    .van-cell {
      padding: 0.2rem 0.3rem !important;
    }
  }
}
</style>
