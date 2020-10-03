<template>
  <Loginor>
    <h1 >登录</h1>
    <input type="text" name="" placeholder="UserName" v-model="username" />
    <input type="password" name="" placeholder="PassWord" v-model="password" />
    <input  type="submit" name="" placeholder="Login" @click.prevent="SubLogin" />

  </Loginor>
</template>
<script>
import Loginor from '../components/Loginor.vue'
export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    Loginor
  }
}
</script>
<style lang="css" scoped>

</style>