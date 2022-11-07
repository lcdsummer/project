<template>
  <div class="modify">
    <!-- <el-form  :model="user" class="modify-rulefrom" ref="user"> -->
    <!-- <van-search @click="back" class=" iconfont  icon-arrow-left" style="float:left" /> -->
    <el-form  class="modify-rulefrom" >


      <el-form-item class="top " style="font-weight:900" ><div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />修改性别 </el-form-item>


      <div class="app"  >

        <div class="boy">
          <input type="radio" name="radios" value="1" v-model="param" @click="shuaxin1(param)"><label>男</label>
        </div>

        <div class="girl">
          <input type="radio" name="radios" value="2" v-model="param" @click="shuaxin2(param)"><label>女</label>
        </div>

      </div>



      <el-form-item>
        <el-col :span="20">
          <el-button type="primary"  @click="onSubmit('user')"
                     style="background-color:white;width: 70px;height: 35px;color: green;border-radius: 25px;border: green; margin-left:50px; margin-top:20px">
            完成</el-button>
        </el-col>
      </el-form-item>

    </el-form>




    <!-- <van-nav-bar title="修改性别"  />
        <van-cell title="男" value="" is-link/>
        <van-cell title="女" value="" is-link/> -->


  </div>

</template>

<script>
import request from "../../request";
import store from "../../store";

export default {
  data() {
    return {
      param: '',//设置默认值为1，即设置第一个单选框为选中状态
      value: '',
      user:{
        userId:'',
        sex:'',
      }
    }
  },
  methods: {
    back() {
      this.$router.push('../modifyFile')
    },
    onSubmit(user) {
      console.log(this.user.sex)
      request.put('/mypage/upsex/'+this.user.userId+'/'+this.user.sex
      ).then(res=>{
        if (res.flag) {
          this.$router.push('../modifyFile')
        }
        else {
          alert('请求失败')
        }
      })
    },
    shuaxin1(param){
      this.user.sex='男'
    },
    shuaxin2(param){
      this.user.sex='女'
    }

  },
  created() {
    this.user.userId=store.getters.getuserId
    console.log(this.user.userId+"......")
    console.log(this.$route.query.sex+"......")
    this.user.sex=this.$route.query.sex;
    console.log(this.user.sex+"你好......")
  },
  mounted() {
    if(this.user.sex==='男'){
      this.param=1
    }else if(this.user.sex==='女'){
      this.param=2
    }

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
  background-size: cover;
}

.modify-rulefrom {
  width: 300px;
  height: 650px;
  margin: 10px auto;
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.3);
  border-radius: 3px;
}
.top .el-form-item__label {
  color: black;
  font-size: 18px;
  font-weight:800;
  float: left;
  margin-left: 100px;
  padding-top: 0px;
}

.app{
  height:60px;
  background: #fff;
  border: 1px solid  #f1ebeb;
  border-radius:11px;
}
.boy{
  height:30px;
  background: #fff;
  border-bottom: 1px solid  #f1ebeb;

}
.boy input{
  float:right;
  margin-top:10px
}
.boy label{
  padding-right:230px;
}
.girl input{
  float:right;
  margin-top:10px
}
.girl label{
  padding-right:230px;

}

.girl{
  height:30px;
  background: #fff;
}


</style>
