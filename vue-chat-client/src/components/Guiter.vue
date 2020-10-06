<template>
  <div class="nav">
    <ul class="menu">
      <li>
        <a  href="javascript:;" @click="nativeTo('/home/userlist')"
        :class="{active: $route.path.includes('/userlist')}">用户列表</a>
      </li>
      <li>
        <a href="javascript:;" @click="nativeTo('/home/chats')"
        :class="{active: $route.path.includes('/chats')}">聊天</a>
      </li>
      <li>
        <a href="javascript:;" @click="nativeTo('/home/chatlist')"
        :class="{active: $route.path.includes('/chatlist')}">消息列表</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Guiter",
  data() {
    return {};
  },
  methods: {
      nativeTo(path) {
          this.$router.push(path)
      }
  }
}
</script>
<style lang="css" scoped>

ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.nav {
  width: 810px;
  margin: 0 auto;
  height: 50px;
}
.menu {
  height: 50px;
}
.menu > li {
  float: left;
  position: relative;
}
.menu > li a {
  display: inline-block;
  height: 50px;
  width: 240px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: #0977bc;
}
.menu > li a:hover {
  background: #25aae1;
}
.menu > li a.active {
  background: #25aae1;
}

</style>