<template>
  <div class="msgres">
    <fhead></fhead>
    <el-form  :rules="rules"  :model="formLabelAlign" class="msgres-rulefrom">
      <el-form-item class="top" label="LOGO"></el-form-item>
      <el-form-item
          class="item"
          prop="email"
          style="border-width: 1px;border-color: #f0f0f0;border-style: solid;border-radius: 25px"
      >
<!--        :rules="[-->
<!--        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }-->
<!--        ]"-->
        <el-input v-model="formLabelAlign.email" placeholder="请输入邮箱地址" class="borderchange"></el-input>
        <!--suffix-icon:图标在右边；prefix-icon：图标在左边-->
      </el-form-item>
      <el-form-item class="item" prop="captcha" style="background-color: white;border-radius: 25px;border-width: 1px;border-color: #f0f0f0;border-style: solid;">
        <el-input
            type="text"
            v-model="formLabelAlign.captcha"
            maxlength="6"
            placeholder="请输入验证码"
            class="borderchange"
            style="width: 186px;float: left;"
        >
        </el-input>
        <el-col style="float: left;width: 1px;height: 30px;margin-top: 5px; background-color: #f0f0f0"></el-col>
        <el-button v-if="sending" @click="sendEmail" style="border-radius: 25px; float: right; color: #4383f0;background-color: white;width: 110px;height: 40px;line-height: 8px;border: white">获取验证码</el-button>
        <el-button v-else :disabled="disabled" style="background-color: white;border-radius: 25px; float: right;width: 110px;height: 40px;border: white;color: grey">{{second}}s后</el-button>

      </el-form-item>
      <el-form-item prop="password" class="item">
        <el-input placeholder="设置密码" type="password" v-model="formLabelAlign.password" class="borderchange" autocomplete="off" suffix-icon="iconfont icon-005yanjing-2" clearable style="border-width: 1px;border-color: #f0f0f0;border-style: solid;border-radius: 25px"></el-input>
      </el-form-item>

      <el-form-item>
          <el-button  type="primary" @click="onSubmit('formLabelAlign')" style="background-color:#3ed599;width: 300px;height: 40px;color: #707070;border-radius: 25px;border: #4BDB80">完成</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
//import axios from "axios";
import request from "../request";
import iconfont from "../assets/css/icon/iconfont.css";
import fhead from "../components/FirstHead";

export default {
  components:{fhead},
  data() {

    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'));
      }
      setTimeout(() => {
          if (value.length < 6) {
            callback(new Error('(区分大小写，密码长度不得少于6位)'));

          } else {
            callback();
          }

      }, 200);
    };
    return {
      formLabelAlign: {
        password: '',
        email: '',
        captcha:'',
        agreed:false,
      },
      rules: {
        password: [{ validator: validatePassword,trigger: 'blur' }],
        //email:[{trigger: 'blur'}],
        email: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        captcha:[{trigger: 'blur'}],
      },
      sending:true,
      disabled:false,
      second:59,

    };
  },
  methods: {

    timeDown() {
      let result = setInterval(()=>{
        --this.second;
        if(this.second < 0) {
          clearInterval(result);
          this.sending  = true; //是否发送验证码
          this.disabled = false;  //是否禁发验证码
          this.second = 59;  //倒计时间
        }
      }, 1000);
    },
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
        request.get("/user/upemail/"+this.formLabelAlign.email
        ).then(res => {
          console.log(res)
          if (!res.flag){
            alert('用户未注册')
          }
        })
      }
    },

    onSubmit(formLabelAlign){
      // alert('验证码校验')
      // request.get("http://localhost:8060/forgetemail/",{}
      //     // params: {
      //     //   email: this.formLabelAlign.email,
      //     // }
      // ).then(res => {
      //   console.log(res.data)
      //   if (res.data.captcha===this.formLabelAlign.captcha) {
      //     this.$message.success("验证码校验成功！");
      //     console.log("验证校验成功")
      //     a++
      //   }else{
      //     alert('验证码不正确')
      //   }
      // })

        if(this.formLabelAlign.email!=''&&this.formLabelAlign.password.length>6&&this.formLabelAlign.captcha!=''){
          alert('填写成功')
          request.put("/user/repassword/"+this.formLabelAlign.email+'/'+this.formLabelAlign.password
              // params: {
              //   email: this.formLabelAlign.email,
              // }
          ).then(res => {
            console.log(res.flag)
            if (res.flag) {
              this.$message.success("密码已重置！");
              console.log("密码已重置！")
            }else{
              alert('密码修改失败')
            }
          })
        }
        else {
          alert('输入框不能为空')
        }



    },
    /*    onSubmit(formLabelAlign) {
          console.log(this.$refs)
          // 内部和外部的this不一样
          //const _this = this
          this.$refs[formLabelAlign].validate((valid) => {
            if (valid) {
              this.request.post('http://localhost:8088/user/regist?', {
                params: {
                  email: this.formLabelAlign.email,
                  password: this.formLabelAlign.password
                }
              })
                  .then(res=> {
                    if (res.data.flag) {
                      alert('注册成功')
                    } else {
                      alert('注册失败')
                    }
                  })
                  .catch(err => {
                    console.error(err)
                  })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
    */
  }


}

</script>

<style lang="less" scoped>

.msgres {
  position: absolute;
  width: 375px;
  height: 750px;
  overflow: hidden;
  background: white;
 /* background-size: cover;*/
}
//表单
.msgres-rulefrom {
  width: 300px;
  height: 500px;
  margin: 10px auto;
  padding: 20px;
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
//校验错误提示信息
/deep/ .el-form-item__error{
  color: #707070 !important;
  margin-left: 10px;
}
///deep/ .el-form-item.is-error .el-input__inner{
//  border-color: blue !important;
//}
</style>
