<template>
  <Loginor>
    <h1 >登录</h1>
    <input type="text" name="" placeholder="UserName" v-model.trim="username" />
    <input type="password" name="" placeholder="PassWord" v-model.trim="password" />
    <input  type="submit" name="" placeholder="Login" @click.prevent="SubLogin" />
    <span @click.prevent="SwiRegister">转至注册</span>

  </Loginor>
</template>
<script>
import Loginor from '../components/Loginor.vue'
import {reqLogin} from '../api/index'

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
     SwiRegister() {
      this.$router.replace('/register')
    },
     async SubLogin() {
      const {username, password} = this
       if(!username || !password) {
        alert('用户名或密码不能为空！！')
        return
      }
     const result = await reqLogin({username,password})
     console.log('result',result)
     if(result.code == '0') {
       this.$router.push('/chatlist')
     } else {
       alert('用户名或密码错误')
       return
     }
    },
  },
  components: {
    Loginor
  }
}
</script>
<style lang="css" scoped>

</style>