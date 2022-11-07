<template>
  <div class="modify">
    <el-form :model="user" class="modify-rulefrom" ref="userR">
      <el-form-item class="top " style="font-weight:900" ><div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />修改账号名 </el-form-item>
      <!-- <el-form-item class="top" label="修改账号名" ></el-form-item> -->
      <el-form-item class="item"
      >
        <el-input v-model="user.userName"
          class="borderchange" autocomplete="off">
          <i slot="suffix" @click="clear"  class="iconfont icon-cuo"  style="float: left;margin-top: 5px"></i>
        </el-input>
      </el-form-item>

      <el-form-item>

          <el-button type="primary" @click="onSubmit('user')"
            style="background-color:white;width: 70px;height: 35px;color: green;border-radius: 25px;border: green;border-color: green">
           完成</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>


import request from "@/request";
import store from "../../store";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'login',
  // components: {
  //   hello
  // },
  data() {
    return {
      userId:'',
      user: {
        userName: '',

      },
    };
  },
  methods: {
    clear() {
      this.user.userName = ''
    },
    back() {
    this.$router.push('../modifyFile')
    },
    onSubmit(user) {
      console.log('submit!')
      console.log(this.user.userName+"。。。。")
      request.put("mypage/upusername/"+this.userId +'/'+ this.user.userName).then(res => {
        if (res.flag) {
          console.log(res.data+"。。。。")
          this.$router.push('../modifyFile')
        } else {
          console.log("你错了")
        }
      })
    }
  },
  created() {
    this.userId=store.getters.getuserId
    console.log(this.userId+"......")
    this.user.userName=this.$route.query.userName;
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

  /deep/ .top .el-form-item__label {
    color: black;
    font-size: 18px;
    float: left;
    font-weight: 600;
    margin-left: 90px;
    padding-top: 0px;
  }

  /deep/ .borderchange input.el-input__inner {
    border-radius: 8px;
    border-color: white;
    height: 50px;
  }

</style>
