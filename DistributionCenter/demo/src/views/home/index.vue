<!--  -->
<template>
  <div class="d-home">
    <headerbox />
    <div class="d-home-content">
      <swipebox />
      <menubox />
      <newbox />
      <themebox />
      <videobox />
      <housebox />
      <designerbox />
      <goodsbox />
      <div class="d-home-menu">这是菜单</div>
    </div>
  </div>
</template>

<script>
import headerbox from "./header/index";
import swipebox from "./swipe/index";
import menubox from "./menu/index";
import newbox from "./new/index";
import themebox from "./theme/index";
import videobox from "./video/index";
import housebox from "./house/index";
import designerbox from "./designer/index";
import goodsbox from "./goods/index";

export default {
  name: "footertab",
  components: {
    headerbox,
    swipebox,
    menubox,
    newbox,
    themebox,
    videobox,
    housebox,
    designerbox,
    goodsbox
  }
};
</script>
<style lang="scss" scoped>
.d-home {
  height: 100%;
}
.d-home-content {
  height: calc(100% - 1rem);
  overflow-y: auto;
  padding: 0.1rem 0.2rem;
  background: rgba(241, 241, 241, 1);
}
</style>
