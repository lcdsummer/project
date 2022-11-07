<template>

  <div class="layout-container">

    <router-view/>
    <div class="user-info-wrap">
    <div class="base-info-wrap">

<div class="avatar-title-wrap" >

  <van-image
    class="avatar"
    round
    fit="cover"
    :src="this.user.userLogo"
  />
  <div class="title">{{ this.user.userName }}</div>
 
</div>

</div>
<div class="title1">{{ this.user.email }}</div>
  </div>


  <div style="padding:10px 0px" class="c">
  <van-cell-group inset>
    <div style="height:100px">

      <div class="logo">
        <!-- <van-icon name="orders-o"/> -->
        <van-icon class=" iconfont  icon-quanbudingdan" size="30px" @click="$router.push('./shop/allorders')"></van-icon>
        <br/>
        <span>首页</span>
      </div>

      <div class="logo">
        <van-icon class="iconfont icon-daifahuo" size="30px"></van-icon>
        <br/>
        <span>待发货</span>
      </div>

      <div class="logo">
        <van-icon class="iconfont icon-daifahuo2" size="30px"></van-icon>
        <br/>
        <span>待收货</span>
      </div>

      <div class="logo">
        <van-icon class="iconfont icon-yiqianshou" size="30px"></van-icon>
        <br/>
        <span>已签收</span>
      </div>

    </div>
  </van-cell-group>
  </div>

  <div class="a">
  <van-cell-group inset >

   <div style="height:38px">

     <div class="logo1">

        <van-icon  class="iconfont icon-dizhiguanli" size="30px" @click="$router.push('./pathlist')"></van-icon>

      <span>地址管理</span>
     </div>

   </div>
   <!-- <el-divider></el-divider> -->
  <div style="heght:10px">

    <div class="logo2">

        <van-icon  class="iconfont icon-shezhi" size="30px" @click="$router.push('./modifyfile')"></van-icon>

       <span>设置</span>
    </div>

  </div>

  </van-cell-group>
    <el-button @click="logout()" style="width: 100px;height: 40px;background-color: #3ed599;color: white;text-align: center;float: left;margin-top: 30px;margin-left: 140px;border-radius: 25px">退出登录</el-button>
  </div>

    <tabbar></tabbar>
  </div>

</template>

<script>
import request from "@/request";
import store from "../../store";
import tabbar from "../../components/tabbar/Tabbar";
export default {
  name:'layout-container',
  components:{
    tabbar
  },

  props:{},
  data() {
    return {

      userId:'',
      user: {
        userId:'',
        userName:'',
        userLogo:'',
        email:''
      }
    };
  },
  computed: {},
  watch:{},
  created(){
    this.userId=store.getters.getuserId
    this.getData()
  },
  mounted() {
  },
  methods:{
    getData() {
      request.get("/mypage/mine/"+this.userId
      ).then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.user = res.data
        } else {
          console.log("/mypage/mine/1")
        }
      })
    },
    logout(){
      this.$router.push('/login')
    }
  }
}



</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    .toutiao {
        font-size: 25px;
    }
    span.text {
       font-size: 5px;
    }
  }
}
.layout-container {
  position: absolute;
    width: 375px;
    height: 750px;
    overflow: hidden;
    background: LightGrey;
}
.layout-container{
.c {
  .logo {
    text-align:center;
    padding:20px 25px;
    font-size: 10px;
    float: left;
}
span.text {
       font-size: 50px;
       float:left;
    }
}
}
.layout-container{
.a {
  .logo1 {
   //margin-left: 5px;
   width: 100px;
  font-size: 15px;
   float: left;
}
.logo2 {
  padding:10px 8px;
  float: left;
}
span.text {
       text-align:center;
       float:left;
    }
}
}
.flex {
  display: flex;
  width: 100%;
}
.topInfo {
  align-items: center;
  background-color: #fff;
  // border-radius: 24px;
}
.arrart {
  width: 128px;
  height: 128px;
  border-radius: 50%;
}

.rightVip {
  width: 552px;
  align-items: center;
}
.layout-container {
  .user-info-wrap {
    .title1 {
      width:100px;
      margin-left: 80px
    }
    background:  no-repeat;
    height: 182px;
    box-sizing: border-box;
    background-size: cover;
    padding: 40px 20px;
    font-size: 15px;
    color: #fff;
    .base-info-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .avatar-title-wrap {
        display: flex;
        align-items: center;
        .avatar {
          margin-right: 15px;
          width: 66px;
          height: 66px;
          padding: 2px;
          background: #fff;
        }
      }
    }
  }
}

</style>

