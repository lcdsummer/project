<template>
  <div class="login">

      <el-form  :model="user" class="login-rulefrom" ref="user">

      <el-form-item class="top" label="LOGO"></el-form-item>
      <el-form-item class="item1" prop="email" >
        <el-input v-model="user.email" placeholder="请输入邮箱地址" class="borderchange"></el-input>
      </el-form-item>

       <el-form-item prop="password" class="item">
        <el-input placeholder="密码" type="password" v-model="user.password" 
          class="borderchange" autocomplete="off" suffix-icon="iconfont icon-005yanjing-2" clearable></el-input>
      </el-form-item>


      <el-form-item>
        <el-col :span="20">
          <el-button type="primary" @click="onSubmit('formLabelAlign')"
            style="background-color:#4BDB80;width: 300px;height: 40px;color: #2c3e50;border-radius: 25px;border: #4BDB80">
            登录</el-button>
        </el-col>
      </el-form-item>

      <div>
        <el-link @click="fn" type="primary" style="float:left">忘记密码</el-link>
      </div>

      <div>
        <el-link @click="fn2" type="primary" style="float:right">立即注册</el-link>
      </div>

    </el-form>
  </div>
</template>

<script>
  import request from "../../request";
  import iconfont from "../../assets/css/icon/iconfont.css";
  import hello from "../../components/HelloWorld";
  import store from "../../store";

  export default {
    name:'login',

    data() {
      return {
        user: {
          password: '',
          email: '',
        },
        userId:'',
      };
    },
    methods: {
      fn() {
         let routeUrl = this.$router.resolve({
          path:'forget'
         })
         window.open(routeUrl.href,'_self')
      },
      fn2() {
         let routeUrl2 = this.$router.resolve({
          path:'register'
         })
         window.open(routeUrl2.href,'_self')
      },
      onSubmit(user) {
        request.get("/user/login/" + this.user.email+ "/" + this.user.password
        ).then(res => {
          if(res.flag) {
            console.log(res.data)
            this.userId=res.data.userId
            store.commit("setuserId", this.userId);

            console.log("getuserId")
            console.log(store.getters.getuserId)

            this.$router.push('/shop/class')

          }else {
            alert(res.msg)
          }
          
        })
      }

    }
    }
  
</script>

<style lang="less" scoped>
  .login {
    position: absolute;
    width: 375px;
    height: 750px;
    overflow: hidden;
    background: white;
    /* background-size: cover;*/
  }

  .login-rulefrom {
    width: 300px;
    height: 500px;
    margin: 10px auto;
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.3);
    border-radius: 5px;
  }

  .top .el-form-item__label {
    color: black;
    font-size: 50px;
    float: left;
    margin-left: 80px;
  }

  .borderchange input.el-input__inner {
    border-radius: 25px;
    border-color: white;
  }
  //表单上方文字（LOGO）
  /deep/  .top .el-form-item__label{
    color: black;
    font-size: 50px;
    float: left;
    margin-left: 80px;
  }
  //输入框
  /deep/ .borderchange input.el-input__inner{
    border-radius: 25px;
    border-color: white;
  }
  //清空密码的图标
  /deep/ .el-input .el-input__suffix  {
    .el-input__suffix-inner {
      .el-icon-circle-close.el-input__clear {
        font-size: 12px;
        float: left;
      }
    }
  }
</style>
