<template>
  <div class="modify">
    <el-form :rules="rules" :model="user" class="modify-rulefrom" ref="user">
     <el-form-item class="top " style="font-weight:900" ><div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />修改密码 </el-form-item>
      
      <el-form-item prop="password" label="原 密 码：">

        <el-input placeholder="请输入原密码" :type="password" v-model="user.password">
        <i slot="suffix"  class="iconfont icon-005yanjing-2"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="repassword" label="新 密 码：">

        <el-input placeholder="请输入新密码" :type="password" v-model="user.repassword" >
          <i slot="suffix"  class="iconfont icon-005yanjing-2"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="conPassword" label="确认密码：">

        <el-input placeholder="请输入确认密码" :type="password" v-model="user.conPassword">
          <i slot="suffix"  class="iconfont icon-005yanjing-2"></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-col >
          <el-button type="primary" @click="onSubmit(user)"
            style="background-color:white;width: 70px; height: 35px; color: green; border-radius: 25px; border-color: green ; margin-left:10px ">
           完成
          </el-button>
        </el-col>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
 import iconfont from "../../assets/css/icon/iconfont.css";
 // import {passwordValidator} from '../../common/validator'
 import request from "../../request";
 import store from "../../store";

 export default {
    
    name:'user',
     created(){
       this.userId=store.getters.getuserId
     },
      data() {

        var validatePass = (rule, value, callback) => {
            if (value === this.user.password) {
              callback(new Error('新密码不能与旧密码一致!'));
              this.yz1 = false
              console.log(this.yz1)
            } else {
              callback();
              this.yz1 = true
              console.log(this.yz1)
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value !== this.user.repassword) {
              callback(new Error('两次密码不一致!'));
              this.yz2 = false
              console.log(this.yz2)
            } else {
              callback();
              this.yz2 = true
              console.log(this.yz2)
            }
        };

      return {
        userId:'',
        user: {
          password: '',
          repassword:'',
          conPassword:'',

        },
        // yz:false,
        yz1:false,
        yz2:false,

      //用于改变Input类型
      password:"password",
      //用于更换Input中的图标
      icon:"el-input__icon el-icon-view",
      // 校验规则配置
      rules: {
          password : [
            {required: true, message: "密码不能为空", trigger: 'blur'},
          ],          
          repassword : [
            {required: true, message: "新密码不能为空", trigger: 'blur'},
            { validator: validatePass, trigger: 'blur' }
          ],     
          conPassword : [
            {required: true, message: "确认密码不能为空", trigger: 'blur'},
            { validator: validatePass2, trigger: 'blur' }
          ],                   
        },        
      }
    }, 
   
  methods: {
      onSubmit(user){
        if(this.yz1===true&&this.yz2===true&&this.user.password!==''&&this.user.repassword!==''&&this.user.conPassword!==''){
          request.put("/mypage/uppassword/"+this.userId+'/'+this.user.password+'/'+this.user.repassword
          ).then(res => {
            if (res.flag) {
              console.log('密码重设成功！')
              this.$router.push({path: '/modifyFile',});
            } else {
              console.log('密码修改失败！')
              alert(res.msg)
            }
          })
        }else {
          console.log('不合法！')
        }
        // let _this = this;
        // this.$refs['user'].validate(valid => {
        //   // 验证通过为true，有一个不通过就是false
        //   if (valid) {
        //     _this.instance.changePasswd(_this.$baseUrl,_this.form).then(res => {
        //       if (res.data.code == _this.global.SucessRequstCode){
        //         // 提示修改成功
        //         alert("重新设置密码已成功！");
        //         // 跳转到首页
        //         this.$router.push({
        //           path: '/modifyFile',
        //         });
        //       }else{
        //         if (!_this.commonFuncs.isInterceptorCode(res.data.code)){
        //           alert(res.data.message);
        //         }
        //       }
        //     }).catch(error => {
        //       console.log(error);
        //     });
        //   }
        // })
      },

      // 取消
      cancel(){
        // 跳转到首页
        this.$router.push({
          path: './modifyfile',
        });            
      },

    back() {
          this.$router.push('./modifyfile')
        }
  }
    }
  

</script>

<style>
  .modify {
    position: absolute;
    width: 375px;
    height: 700px;
    overflow: hidden;
    background: lightgrey;
    /* background-size: cover;*/
  }

  .modify-rulefrom {
    width: 300px;
    height: 650px;
    margin: 10px auto;
    padding: 20px;
    background-color: rgba(245, 245, 245, 0.3);
    border-radius: 10px;
  }

  .top .el-form-item__label {
    color: black;
    font-size: 18px;
    float: left;
    font-weight: 600;
    margin-left: 90px;
    padding-top: 0px;
  }

  .borderchange input.el-input__inner {
    border-radius: 8px;
    border-color: white;
    height: 50px;
  }
 
</style>