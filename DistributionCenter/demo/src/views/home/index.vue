<!--  -->
<template>
  <div class="d-home">
    <headerbox />
    <swipebox />
    <menubox />
    <div class="d-home-menu">这是菜单</div>
  </div>
</template>

<script>
import headerbox from "./header";
import swipebox from "./swipe";
import menubox from "./menu";
export default {
  name: "footertab",
  components: { headerbox, swipebox, menubox }
};
</script>
<style lang="scss" scoped>
</style>
