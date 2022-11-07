<template>
  <div class="register">
      <hello></hello>
    <el-form  :rules="rules" :model="formLabelAlign" class="register-rulefrom" ref="formLabelAlign">
      <el-form-item class="top" label="LOGO"></el-form-item>

      <el-form-item class="item" prop="username" >
        <el-input v-model="formLabelAlign.username" placeholder="请输入用户名" class="borderchange"></el-input>
      </el-form-item>

      <el-form-item class="item" prop="phonenumber">
        <el-input v-model="formLabelAlign.phonenumber" placeholder="请输入手机号码" class="borderchange"></el-input>
      </el-form-item>

      <el-form-item class="item1" prop="email" >
        <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱地址" class="borderchange"></el-input>
      </el-form-item>

      <el-form-item class="item" prop="captcha" style="background-color: white;border-radius: 25px;">
        <el-input type="text" v-model="formLabelAlign.captcha" oninput="value=value.replace(/\D/g,'')" maxlength="6"
          placeholder="请输入验证码" class="borderchange" style="width: 180px;float: left;">
        </el-input>
        <el-button v-if="sending" @click="sendEmail"
          style="border-radius: 25px; float: right; color: skyblue;background-color: white;width: 120px;height: 40px;line-height: 8px;border: white">
          获取验证码</el-button>
        <el-button v-else :disabled="disabled"
          style="background-color: white;border-radius: 25px; float: right;width: 120px;height: 40px;border: white;color: grey">
          {{second}}s后</el-button>
        </el-form-item>

       <el-form-item prop="password" class="item">
        <el-input placeholder="密码" type="password" v-model="formLabelAlign.password"
          class="borderchange" autocomplete="off" suffix-icon="iconfont icon-005yanjing-2" clearable></el-input>
      </el-form-item>

      <el-form-item prop="checkPass" class="item">
        <el-input placeholder="确认密码" type="password" v-model="formLabelAlign.checkPass"
          class="borderchange" autocomplete="off" suffix-icon="iconfont icon-005yanjing-2" clearable></el-input>
      </el-form-item>

      <el-form-item>
        <el-col :span="20">
          <el-button type="primary" @click="onSubmit('formLabelAlign')"
            style="background-color:#4BDB80;width: 300px;height: 40px;color: #2c3e50;border-radius: 25px;border: #4BDB80">
            完成</el-button>
        </el-col>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import request from "../../request";
  import iconfont from "../../assets/css/icon/iconfont.css";
  import hello from "../../components/HelloWorld";
  export default {
    name:"formLabelAlign",
    components: {
      hello
    },

    data() {


      var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次密码"));
      } else if (value !== this.formLabelAlign.password) {
        callback(new Error("两次输入密码不一致！"));
      } else {
        callback();
      }
    }



      return {
        formLabelAlign: {
          password: '',
          email: '',
          captcha: '',
          checkPass:'',
          phonenumber: '',
          agreed: false,
        },
        rules: {
          password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // { min: 6, message: "长度不少于6位", trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "请再次确认密码", trigger: "blur" },
          { validator: validateCheckPass, trigger: "blur" },
        ],


        },

        sending: true,
        disabled: false,
        second: 59,
      };
    },

    methods: {
      timeDown() {
        let result = setInterval(() => {
          --this.second;
          if (this.second < 0) {
            clearInterval(result);
            this.sending = true; //是否发送验证码
            this.disabled = false; //是否禁发验证码
            this.second = 59; //倒计时间
          }
        }, 1000);
      },
      //获取验证码

 //获取验证码
 sendEmail(){
      if(!this.sending){
        return;
      }
      if(this.formLabelAlign.email == ''){
        this.$message.error('请输入邮箱')
      }else{
        this.sending  = false;
        this.disabled = true;
        this.timeDown();
        request.get("/user/email/"+ this.formLabelAlign.email
            // params: {
            //   email: this.formLabelAlign.email,
            // }
        ).then(res => {
          if(res.flag) {
          this.sending  = false;
          this.disabled = true;
          this.timeDown();
          // if (res.data.email===this.formLabelAlign.email) {
            this.$message.success("邮件发送成功！");
            alert('邮件发送成功！')
              }else {
                alert(res.msg)
              }
            })
          }
          },

    onSubmit(formLabelAlign){
      let data = {
        userName:this.formLabelAlign.username,
        password:this.formLabelAlign.password,
        email:this.formLabelAlign.email,
        phoneNumber:this.formLabelAlign.phonenumber,
        code:this.formLabelAlign.captcha
      }

    //  var a=1;
    //  alert('信息校验')
    //   request.post("/user/regist/"+ this.formLabelAlign.username +"/"+  this.formLabelAlign.password + "/" + this.formLabelAlign.email + "/" + this.formLabelAlign.captcha + "/" + this.formLabelAlign.phonenumber
    //   )
      request.post("/user/regist/",data)
      .then(res => {
        if(res.data.captcha===this.formLabelAlign.captcha){
          this.$mesage.success("")
        }
        if(res.flag) {
          this.$message.success('注册成功！')
          alert(res.msg)
          this.$router.push('/login')
        } else {
          this.$message.error('注册失败！')
          alert(res.msg)
        }
      })
    }

    }
  }
</script>

<style lang="less" scoped>
  .register {
    position: absolute;
    width: 375px;
    height: 750px;
    overflow: hidden;
    background: white;
    /* background-size: cover;*/
  }

  .register-rulefrom {
    width: 300px;
    height: 500px;
  margin: 10px auto;
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.3);
    border-radius: 5px;
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
