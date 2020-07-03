<!--  -->
<template>
  <div class="d-container">
    <div class="d-view-container">
      <router-view></router-view>
    </div>
    <div class="d-footer-container">
      <navTab />
    </div>
  </div>
</template>

<script>
import navTab from "../components/navTab/index";
export default {
  name: "footertab",
  components: { navTab }
};
</script>

<style lang="scss" scoped>
.d-container {
  height: 100%;
  position: relative;
}

.d-view-container {
  height: calc(91.9%);
}

.d-footer-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8.1%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
