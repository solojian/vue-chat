<template>
  <Loginor>
    <h1 >注册</h1>
    <input type="text" name="" placeholder="UserName" v-model="username" />
    <input type="password" name="" placeholder="PassWord" v-model="password" />
    <input  type="submit" name="" placeholder="Register" @click.prevent="SubRegister" />
  </Loginor>
</template>
<script>
import Loginor from "../components/Loginor.vue";
import Request from '../api/axios'
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    SubRegister() {
      const {username, password} = this
      Request('/register',{username,password},'POST')
    }
  },
  components: {
    Loginor,
  },
}
</script>
<style lang="css" scoped>
</style>