<template>
  <div class="home">
    <Guiter />
    <router-view />
  </div>
</template>
<script>
import Guiter from "../components/Guiter";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Guiter,
  },
};
</script>
<style lang="css" scoped>
.home {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>