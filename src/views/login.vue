<style scoped lang="less">
  .login{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:24px;
    .logo{
      font-size:100px;
    }
    .login-form{
      width:16%;
    }
    .submit{
      width : 100%;
    }
  }
</style>

<template>
  <div class="login">
    <i class="iconfont logo">&#xe636;</i>
    <Formi ref="login" :model="login" :rules="rules" class="login-form">
      <FormItem prop="id">
        <Inputi type="text" v-model="login.id" placeholder="邮箱/手机号">
          <i class="iconfont" slot="prepend">&#xe680;</i>
        </Inputi>
      </FormItem>
      <FormItem prop="pwd">
        <Inputi type="password" v-model="login.pwd" placeholder="密码">
          <Icon type="locked" slot="prepend" size="24"></Icon>
        </Inputi>
      </FormItem>
      <FormItem>
        <Buttoni Ghost class="submit" @click="submit()">
          登录
        </Buttoni>
      </FormItem>
    </Formi>
  </div>
</template>

<script>
  import { Input , Form , FormItem , Icon , Button ,Message } from 'iview'
  export default{
    data (){
      const validateId = (rule,value,callback)=> {
        let reg1 = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
        let reg2 = /^1\d{10}$/
        if(!value){
          return callback(new Error("用户名不能为空"))
        }
        else if((!reg1.test(value))&&(!reg2.test(value))){
          return callback(new Error("邮箱或者电话格式不正确"))
        }
        else
          return callback()
      }
      return {  
        login:{
          id : "",
          pwd : ""
        },
        rules:{
          id : [
            {validator:validateId,trigger: 'blur'}
          ],
          pwd : [
            {required:false,message:"请输入密码",trigger: 'blur'}
          ] 
        }
      }
    },
    components:{
      Inputi : Input,
      Formi : Form,
      FormItem : FormItem,
      Icon : Icon,
      Buttoni : Button,
      Message : Message
    },
    methods:{
      submit(){
        let data = new FormData()
        data.append("input",this.login.id)
        data.append("password",this.login.pwd)
        fetch("http://10.128.106.15/pages/v2/login",{
          method : "POST",
          mode: "no-cors",
          headers : {
            "content-Type" : "application/x-www-form-urlencoded"
          },
          body: data
        }).then((response)=>{
          console.log(response)
          return response.json()
        }).then((result)=>{
          console.log(result)
        })
      }
    }
  }
</script>