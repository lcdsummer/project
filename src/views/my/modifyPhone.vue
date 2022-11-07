<template>
  <div class="modify">
    <el-form  :model="user" class="modify-rulefrom" ref="user">
      <el-form-item class="top " style="font-weight:900" ><div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />修改手机号 </el-form-item>

      <el-form-item label="" prop="phone">
        <el-input
            v-model="user.phoneNumber"
            οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
        >
          <i slot="suffix" @click="clear"  class="iconfont icon-cuo" ></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-col>
          <el-button type="primary"  @click="onSubmit('user')"
                     style="background-color:white;width: 70px;height: 38px;color: green;border-radius: 25px;border-color: green " >
            完成</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import request from "../../request";
import store from "../../store";

export default {

  data() {

    return {
      user: {
        phoneNumber: '',
        userId:'',

      },

      rules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { min: 11, message: "手机号格式不正确", trigger: "blur" }
        ]

      }
    };
  },
  methods: {
    clear(){
      this.user.phoneNumber=''
    },
    back() {
      this.$router.push('../modifyFile')
    },
    onSubmit(user) {
      request.put('/mypage/upphone/'+this.user.userId+'/'+this.user.phoneNumber
      ).then(res=>{
        if (res.flag) {
          this.$router.push('../modifyFile')
        }
        else {
          alert('请求失败')
        }
      })
    }
  },
  created() {
    this.user.userId=store.getters.getuserId
    console.log(this.user.userId+"......")
    this.user.phoneNumber=this.$route.query.phoneNumber;
    console.log(this.user.phoneNumber+"......")
  },
}


</script>

<style lang="less" scoped>
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

/deep/.top .el-form-item__label {
  color: black;
  font-size: 18px;
  font-weight: 600;
  float: left;
  margin-left: 100px;
  padding-top: 0px;
}

/deep/.borderchange input.el-input__inner {
  border-radius: 8px;
  border-color: white;
  height: 50px;
}

</style>
