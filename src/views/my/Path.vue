<template>
  <div class="modify">
    <el-form   class="modify-rulefrom">
      <el-form-item class="top " style="font-weight:900" ><div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />编辑地址 </el-form-item>
      <!-- <el-form-item class="top" label="编辑地址" > -->
        
      <!-- </el-form-item> -->
      <el-radio-group  size="small">
       
      </el-radio-group>
      <div style="margin: 0px;"></div>
      <!-- <el-form label-width="80px" :model="user" ref="user"> -->
        <el-form :model="form" label-width="80px" >
        <el-form-item label="收货人:" style="font-weight:700">
          <el-input v-model="form.receiptName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码:" style="font-weight:700">
          <el-input v-model="form.receiptPhone"></el-input>
        </el-form-item>
        <!-- <el-form-item label="省市区:" style="font-weight:700">
          <el-input v-model="user.address"></el-input>
        </el-form-item> -->
        <el-form-item label="详细地址:" style="font-weight:700 ">
          <el-input v-model="form.receiptAddress"></el-input>
        </el-form-item>
      
        <!-- <el-col>
        <el-checkbox v-model="checked">设置默认地址</el-checkbox>
        <div style="margin-right:120px; color:red;margin-bottom:20px">设置默认地址</div></el-col>-->
        <!-- <el-checkbox-group v-model="ruleForm.type"> -->
        <el-checkbox-group v-model="form.receiptStatus">
        <div style="margin-right:130px; margin-bottom:10px; "> 
          <el-checkbox label="设置为默认地址" name="type" style="color:red"></el-checkbox></div>
        </el-checkbox-group>
        
       <el-col > 
          <el-button type="primary" @click="onSubmit('form')"
            style="background-color:#4BDB80;width: 220px;height: 40px;color: white;border-radius: 20px;border: #4BDB80;
            
    font-weight:800; 
            margin-right:0px">
            保存</el-button>
        </el-col>
     
    </el-form>
  </el-form>
  </div>
</template>

<script>
import request from "../../request";
 import store from "../../store";
  export default {
      data() {
      return {
        form: {
          userId:'',
          receiptStatus:'',
          receiptName: '',
          receiptPhone:'',
          receiptAddress:'',
        },
      }
    },

    created() {
      this.form.userId=store.getters.getuserId
    },
  methods: {

        back() {
          this.$router.push('./pathlist')
        },
        onSubmit(form) {
          if(this.form.receiptStatus){
            this.form.receiptStatus=0
          }else {
            this.form.receiptStatus=1
          }
          let data = {
            userId:this.form.userId,
            receiptName:this.form.receiptName,
            receiptPhone:this.form.receiptPhone,
            receiptAddress:this.form.receiptAddress,
            receiptStatus:this.form.receiptStatus
          }
          console.log(data)
          request.post("/mypage/addsite/",data
          ).then(res => {
            if(res.flag) {
              console.log(res.msg)
              this.$router.push('/pathlist')
            }else {
              console.log(res.msg)
            }
            })
            // .catch(function (err) {
            //     console.log(err)
            // })
        },
        
  }
  }
  

</script>

<style>
  .modify {
    position: absolute;
    width: 375px;
    height: 750px;
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
    border-radius: 5px;
  }

  .top .el-form-item__label {
    color: black;
    font-size: 18px;
    font-weight: 580;
    float: left;
    margin-left: 110px;
    padding-top: 0px;
  }
  .modify.el-form-item__label  {
   font-weight: 600;
  }
  .borderchange input.el-input__inner {
    border-radius: 8px;
    border-color: white;
    height: 50px;
  }
 
</style>