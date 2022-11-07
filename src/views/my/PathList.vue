<template>
  <div class="modify">

      <div  class="modify-rulefrom" >

      <div class="top" label="" style="font-weight:900" >

        <div @click="back" class=" iconfont  icon-arrow-left" style="float:left" />地址管理
        <div @click="add" class=" iconfont  icon-a-Light" style="float:right" />

        <div class="box" style="padding-top:15px" v-for="(item,index) in addressList" :key="index">

         <div class="address" style="height:30px;width:100px;margin-left:20px;text-align:left "  @click="xiugai(index)"> <el-checkbox v-model="item.receiptStatus" style="color:red">默认地址</el-checkbox></div>
         
         <div style="float:right;" >
          <span style="color:red;font-size:10px;font-weight:400;margin-right: 15px">删除</span><br>
          <span class="suffix-icon iconfont icon-bianji1" style="font-size:20px;padding-right:20px"></span></div>

         <div class="ad1" style="height:40px;width:220px;margin-left:20px;text-align:left;font-weight:500;font-size:14px" > {{ item.receiptAddress }}</div>
         <div class="ad2" style="height:20px;width:200px;margin-left:20px;text-align:left;font-weight:500;font-size:14px" >{{ item.receiptName }} {{ item.receiptPhone }}</div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import request from "../../request";
// import { del } from "vue";
 import store from "../../store";
    
  export default {
   
      data() {
      return {
        userId:'',
        addressList: {
         userId:'',
         username:'',
         receiptId:'',
         receiptName:'',
         receiptPhone:'',
         receiptAddress:'',
         receiptStatus:''
       }
       //  addressList:[
       //    {userId:1,username:'小虎',receiptName:'小虎',receiptPhone:'12314992',receiptAddress:'广东',receiptStatus:true},
       //    {userId:1,username:'小虎',receiptName:'小虎',receiptPhone:'12314992',receiptAddress:'广东',receiptStatus:false},
       //  ]
    }
  },

  created () {
    this.userId=store.getters.getuserId
    console.log(this.userId)
    this.getAddressList()
  },
  mouted() {
    this.getAddressList()
  },
  methods: {
    back() {
  this.$router.push('./my');
},
    add() {
    // this.$router.push({name:'pathlist',params:{id:item.id}})
    this.$router.push('./path')
},
 
   getAddressList() {
    request.get("/mypage/update/"+this.userId
    ).then(res => {
      if(res.flag) {
        console.log(res.data)
        for (let i = 0; i <res.data.length; i++) {
          if(res.data[i].receiptStatus===0){
            res.data[i].receiptStatus=true
          }else{
            res.data[i].receiptStatus=false
          }
        }
        this.addressList = res.data
        console.log(this.addressList)
      }
       })
   },
    xiugai(index){
      console.log(this.addressList[index].receiptId+"。。。。。。。。。。。。。")
      request.put("/mypage/upstatus/"+this.userId+'/'+this.addressList[index].receiptId
      ).then(res => {
        if(res.flag) {
          console.log('ok')
          console.log(res.data)
          for (let i = 0; i <res.data.length; i++) {
            if(res.data[i].receiptStatus===0){
              res.data[i].receiptStatus=true
            }else{
              res.data[i].receiptStatus=false
            }
          }
          this.addressList=res.data
        }
      })
    }


   }
  }
    
  

</script>

<style lang="less" scoped>
  .modify {
    
    position: absolute;
    width: 375px;
    height: 700px;
    overflow: hidden;
    background-color: lightgrey;
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
    margin-left: 100px;
    padding-top: 0px;
  }

  .borderchange input.el-input__inner {
    border-radius: 10px;
    border-color: white;
    height: 110px;
  }
  .modify {
    .modify-rulefrom {
      .box{
        background: white;
        width:300px;
        height: 110px;
        float: left;
        margin-top: 20px;
        border-radius: 12px;
        padding-top: 40px
    }
    }
  }
//.li {
//  list-style-type:none;
//}
  
</style>