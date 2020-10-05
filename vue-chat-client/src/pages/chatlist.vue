<template>
  <ul id="file0">
    <li>
      <img src="../assets/logo.png" />
      <h3>这是第一条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
    <li>
      <img src="../assets/logo.png" />

      <h3>这是第二条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
    <li>
      <img src="../assets/logo.png" />
      <h3>这是第三条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
    <li>
      <img src="../assets/logo.png" />
      <h3>这是第四条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
    <li>
      <img src="../assets/logo.png" />
      <h3>这是第五条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
    <li>
      <img src="../assets/logo.png" />
      <h3>这是第六条消息</h3>
      <p>今天心星期三天气晴</p>
    </li>
  </ul>
</template>
<script>
import Cookies from "js-cookie";
import { reqUser } from "../api/index";
export default {
  name: "ChatList",
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const userid = Cookies.get("userid");
      const { user } = this;
      if (!userid) {
        alert("请先登录！");
        this.$router.replace("/login");
      } else {
        if (!user) {
          const result = await reqUser();
          console.log("result", result);
          if (result.code == 0) {
            this.user = result.data;
          }
        }
      }
    },
  },
};
</script>
<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: comic sans ms;
}

img {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  box-sizing: border-box;
  margin-right: 20px;
}
ul {
  list-style: none;
  border-radius: 6px;
}
li {
  height: 80px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #eee;
  cursor: pointer;
}
h3 {
  font-size: 18px;
  margin: 10px 1px;
}
p {
  font-size: 14px;
  color: #333;
}
#file0 {
  width: 600px;
  height: 320px;
  margin: auto;
  position: relative;
  top: 80px;
  overflow: hidden;
  border: 1px solid #ccc;
}
li:hover {
  background-color: #a3a3a3;
  transform: scale(1.01);
  transition: 0.4s;
}
</style>