<!--  -->
<template>
  <div class="container">
    <NavBar Navbartitle="个人信息" refresh="-1" />
    <div class="userinfo">
      <van-image @click="onGetUserInfo" round :src="myimage" />
    </div>
    <!-- 底部列表 bottomlist -->
    <div class="bottomlist1">
      <van-cell
        @click="cikbottomlist(data.name)"
        :title="data.name"
        :is-link="data.show"
        :value="data.content"
        v-for="(data, index) in datalist.bottomdata1"
        :key="index"
      />
    </div>
    <div class="bottomlist2">
      <van-cell
        @click="cikbottomlist(data.name)"
        :title="data.name"
        :is-link="data.show"
        :value="data.content"
        v-for="(data, index) in datalist.bottomdata2"
        :key="index"
      />
    </div>

    <!-- 弹出框 onshow -->
    <van-overlay :show="onshow" @click="onClickHide">
      <div class="wrapper">
        <div class="block">
          <div class="choose">选择照片</div>
          <div class="content">拍摄</div>
          <van-uploader class="content" :after-read="afterRead" multiple>
            <div class="content-content">选择图片</div>
          </van-uploader>
          <div class="cancel">取消</div>
        </div>
      </div>
    </van-overlay>
    <!-- 年月日 -->
    <van-popup v-model="dateshow" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmok"
      />
    </van-popup>
    <!-- 性别 -->
    <van-overlay :show="sexshow" @click="sexClickHide">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="choose">选择性别</div>
          <van-radio-group v-model="radio">
            <van-radio class="content" name="男">男</van-radio>
            <van-radio class="content" name="女">女</van-radio>
          </van-radio-group>
          <div class="cancel" @click="onChange">确定</div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/index";
import { Toast } from "vant";
export default {
  name: "",
  components: { NavBar },
  methods: {
    // 点击头像事件
    onClickHide() {
      this.onshow = false;
    },
    // 时间确认事件
    confirmok(value) {
      var date = new Date(value);
      date =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.datalist.bottomdata1[2].content = date;
      this.dateshow = false;
    },
    sexClickHide() {
      this.sexshow = false;
    },
    onGetUserInfo() {
      this.onshow = true;
    },
    // 年月日
    onInput(event) {
      Toast(event);
    },
    // 性别确认事件
    onChange() {
      this.sexshow = false;
      this.datalist.bottomdata1[1].content = this.radio;
    },
    afterRead(file) {
      this.myimage = file.content;
    },
    cikbottomlist(name) {
      switch (name) {
        case "昵称":
          Toast(name);
          return;
        case "性别":
          this.sexshow = true;
          return;
        case "年龄":
          this.dateshow = true;
          return "run";
        case "地址":
          this.$router.push({
            path: "/my/address"
          });
          return;
        case "实名认证":
          this.$router.push({
            path: "/my/realname"
          });
          return;
      }
    }
  },
  // 页面加载后
  created() {
    this.datalist.bottomdata1.forEach(item => {
      if (item.content != "") {
        item.show = false;
      }
    });
    this.datalist.bottomdata2.forEach(item => {
      if (item.content != "") {
        item.show = false;
      }
    });
  },
  data() {
    return {
      // 年月日
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      radio: "男",
      // 开关
      sexshow: false,
      onshow: false,
      dateshow: false,
      //   头像图片存储
      myimage: "https://img.yzcdn.cn/vant/cat.jpeg",
      //   底部导航栏列表信息
      datalist: {
        bottomdata1: [
          { name: "昵称", content: "一不小心闪到腰", show: true, onshow: true },
          { name: "性别", content: "男", show: true, onshow: false },
          { name: "年龄", content: "2020-03-07", show: true, onshow: false }
        ],
        bottomdata2: [
          { name: "地址", content: "北京市大港湾", show: true, onshow: false },
          {
            name: "实名认证",
            content: "个人实名认证",
            show: true,
            onshow: false
          }
        ]
      }
    };
  }
};
</script>
<style lang='scss' scoped>
.container {
  padding-top: 46px;
  width: 100%;
  height: calc(100% - 46px);
  background: rgba(241, 241, 241, 1);
  /deep/ {
    /* 用户头像名称 my */
    .userinfo {
      height: 30%;
      flex-direction: column;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .van-image {
        width: 2rem;
        height: 2rem;
      }
    }

    /* 底部列表 bottomlist */
    .bottomlist1,
    .bottomlist2 {
      width: 100%;
      margin: 0.2rem 0;
      background: #fff;
    }
    .bottomlist1 .van-cell,
    .bottomlist2 .van-cell {
      width: 100%;
      background: #fff;
      padding: 0.2rem 0.2rem !important;
    }

    /*弹出框 onshow */
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .block {
      width: 80%;
      height: 4rem;
      background-color: #fff;
      flex-direction: column;
      padding: 0 0.3rem;
      .choose,
      .content,
      .cancel {
        align-items: center;
        display: flex;
        width: 100%;
        height: 1rem;
      }
      .choose,
      .cancel {
        justify-content: center;
      }
      .content {
        .van-uploader__wrapper,
        .van-uploader__input-wrapper,
        .content-content {
          width: 100%;
          height: 1rem;
          align-items: center;
          display: flex;
        }
      }
    }

    /* 年月日 */
    .dateshow {
      width: 100%;
      right: 100%;
    }
    .date {
      bottom: 0px;
      width: 100%;
      position: absolute !important;
    }
  }
}
</style>