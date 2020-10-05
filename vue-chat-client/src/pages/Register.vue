<template>
  <Loginor>
    <h1 >注册</h1>
    <input type="text" name="" placeholder="UserName" v-model.trim="username" />
    <input type="password" name="" placeholder="PassWord" v-model.trim="password" />
    <input  type="submit" name="" placeholder="Register" @click.prevent="SubRegister" />
    <span @click.prevent="SwiLogin">转至登录</span>
  </Loginor>
</template>
<script>
import Loginor from "../components/Loginor.vue";
import {reqRegister} from '../api/index'
export default {
  name: "Register",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async SubRegister() {
      const {username, password} = this
      if(!username || !password) {
        alert('用户名或密码不能为空！！')
        return
      }
     const data = await reqRegister({username,password})
     if(data.code == '0') {
       this.$router.push('/chatlist')
     } else {
       alert('用户名或密码错误')
       return
     }
    },
    SwiLogin() {
      this.$router.replace('/login')
    }
  },
  components: {
    Loginor,
  },
}
</script>
<style lang="css" scoped>
</style>