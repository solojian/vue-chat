
import ajax from './axios'

const BASE = 'http://localhost:3000'  // 开发

export const reqRegister = ({username,password}) => ajax(BASE+'/register',{username,password},'POST')

export const reqLogin = ({username,password}) => ajax(BASE+'/login',{username,password},'POST')

export const reqUser = () => ajax(BASE+'/user')