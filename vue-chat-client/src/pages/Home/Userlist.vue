<template>
  <div class="box">
    <ul>
      <li class="item">
        <img src="../../assets/logo.png" alt="">
        <span>admin</span>
      </li>
      <li class="item">
        <em class="arrowright"></em>
        <img src="../../assets/logo.png" alt="">
        <span>admin</span>
        <em class="arrowleft"></em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Userlist",
  data() {
    return {};
  },
};
</script>
<style lang="css" scoped>

.box {
  margin: 0 auto;
   width: 780px;
  position: relative;
  top: 80px;
  overflow: hidden;
  border: 1px solid #ccc;
  text-align: center;

}
ul,
li {
  margin: 0 auto;
  padding: 0;
  list-style: none;

}


.box li {
  width: 400px;
  background: #fff;
  height: 100px;
  position: relative;
  border-top: 1px dashed #ddd;
  cursor: pointer;
}
.item img {
  border-radius: 50%;
  width: 68px;
  height: 68px;
  position: absolute;
  left: 33px;
  top: 12px;
}
.item span {
  font-size: 24px;
  height: 100px;
  line-height: 100px;
}
em,
strong {
  font-weight: 700;
  font-style: normal;
}
.arrowright {
  position: absolute;
  left: 0;
  top: -12px;
  width: 0;
  height: 0;
  line-height: 0;
  border-color: #fff #fff #fff #656d70;
  border-style: solid;
  border-width: 12px;
}
.arrowleft {
  position: absolute;
  right: 0;
  top: -12px;
  width: 0;
  height: 0;
  line-height: 0;
  border-color: #fff #656d70 #fff #fff;
  border-style: solid;
  border-width: 12px;
}
</style>