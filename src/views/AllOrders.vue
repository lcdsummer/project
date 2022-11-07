<template>
  <div class="seresult">
    <!--     顶部-->
    <div style="width: 375px;height: 50px;background-color: #f7f7f7;">
      <i @click="back()" class="el-icon-arrow-left" style="color: black;font-size: 20px;float:left;margin-top: 15px;margin-left: 20px"></i>
      <span style="float: left;margin-left: 120px;margin-top: 15px;font-weight: bold">全部订单</span>
    </div>
    <!--     展示方式-->
    <div style="width: 375px;height: 30px;">
      <div v-for="(i, index) in state" :key="index" style="float: left;color: #494949;font-size: 12px;margin: 0px 30px;font-weight: bold">
        <div :class="getBrandClasses(index)" v-on:click="brandClick(index, i); searchGoods()">{{i}}</div>
      </div>
    </div>
    <!--    展示-->
    <div style="width: 375px;height: 650px;float:left;">

      <!--      全部-->
      <div v-if="this.userChoice.uBrand==='全部'" style="float:left;background-color: #f7f7f7; ">
        <div style="float:left;" v-for="(list,index) in lists" :key="index"  class="show">

          <div style="width: 100%;height: 30px;margin-bottom: 5px">
            <div class="iconfont icon-shangdian" style="float:left;color: #54aadd;font-size: 28px;text-align: left">
              <div style="float:right;margin-left: 10px;font-size: 15px;color: #777777">{{list.businessEnterName}}</div>
            </div>
            <div style="float:right;color: #d00228;font-size: 17px">{{list.orderState}}</div>
          </div>
          <el-image :src="require('../assets/css/image/'+list.link)" style="height: 70px;width: 80px;border-radius:10px;float:left;"></el-image>
          <div style="float:left;margin-left: 10px;width: 210px;height: 110px;">
            <div style="font-weight: bold;font-size: 14px;text-align: left;">
              {{list.goodsName}}
              <div style="float:right;font-weight: bold;font-size: 15px;text-align: left;color: #d2133c;margin-left: 10px">
                ￥{{list.price}}
                <div style="font-weight: bold;font-size: 15px;text-align: center;color: #494949;margin-left: 5px">×{{list.purchases}}</div>
              </div>

            </div>
            <div style="width: 110px;font-size: 8px;text-align: left;color: #808080;margin-top: 5px;">
              {{list.differentCapacity}}
              {{' '}}
              {{list.differentComputer}}
              {{' '}}
              {{list.differentiationColor}}
              {{' '}}
              {{list.differentProcessor}}
              {{' '}}
              {{list.differentBrand}}
            </div>
          </div>

        </div>
      </div>

      <!--      未发货-->
      <div v-if="this.userChoice.uBrand==='未发货'"  style="float:left;background-color: #f7f7f7; ">
        <div style="float:left;" v-for="(list,index) in lists" :key="index">
          <div v-if="list.orderState==='未发货'"  class="show">

            <div style="width: 100%;height: 30px;margin-bottom: 5px">
              <div class="iconfont icon-shangdian" style="float:left;color: #54aadd;font-size: 28px;text-align: left">
                <div style="float:right;margin-left: 10px;font-size: 15px;color: #777777">{{list.businessEnterName}}</div>
              </div>
              <div style="float:right;color: #d00228;font-size: 17px">{{list.orderState}}</div>
            </div>
            <el-image :src="require('../assets/css/image/'+list.link)" style="height: 70px;width: 80px;border-radius:10px;float:left;"></el-image>
            <div style="float:left;margin-left: 10px;width: 210px;height: 110px;">
              <div style="font-weight: bold;font-size: 14px;text-align: left;">
                {{list.goodsName}}
                <div style="float:right;font-weight: bold;font-size: 15px;text-align: left;color: #d2133c;margin-left: 10px">
                  ￥{{list.price}}
                  <div style="font-weight: bold;font-size: 15px;text-align: center;color: #494949;margin-left: 5px">×{{list.purchases}}</div>
                </div>
              </div>
              <div style="width: 110px;font-size: 8px;text-align: left;color: #808080;margin-top: 5px;">
                {{list.differentCapacity}}
                {{' '}}
                {{list.differentComputer}}
                {{' '}}
                {{list.differentiationColor}}
                {{' '}}
                {{list.differentProcessor}}
                {{' '}}
                {{list.differentBrand}}
              </div>
            </div>

          </div>
        </div>
      </div>

      <!--      待签收-->
      <div v-if="this.userChoice.uBrand==='待签收'"  style="float:left;background-color: #f7f7f7; ">
        <div style="float:left;" v-for="(list,index) in lists" :key="index">
          <div v-if="list.orderState==='待签收'"  class="show">

            <div style="width: 100%;height: 30px;margin-bottom: 5px">
              <div class="iconfont icon-shangdian" style="float:left;color: #54aadd;font-size: 28px;text-align: left">
                <div style="float:right;margin-left: 10px;font-size: 15px;color: #777777">{{list.businessEnterName}}</div>
              </div>
              <div style="float:right;color: #d00228;font-size: 17px">{{list.orderState}}</div>
            </div>
            <el-image :src="require('../assets/css/image/'+list.link)" style="height: 70px;width: 80px;border-radius:10px;float:left;"></el-image>
            <div style="float:left;margin-left: 10px;width: 210px;height: 110px;">
              <div style="font-weight: bold;font-size: 14px;text-align: left;">
                {{list.goodsName}}
                <div style="float:right;font-weight: bold;font-size: 15px;text-align: left;color: #d2133c;margin-left: 10px">
                  ￥{{list.price}}
                  <div style="font-weight: bold;font-size: 15px;text-align: center;color: #494949;margin-left: 5px">×{{list.purchases}}</div>
                </div>
              </div>
              <div style="width: 110px;font-size: 8px;text-align: left;color: #808080;margin-top: 5px;">
                {{list.differentCapacity}}
                {{' '}}
                {{list.differentComputer}}
                {{' '}}
                {{list.differentiationColor}}
                {{' '}}
                {{list.differentProcessor}}
                {{' '}}
                {{list.differentBrand}}
              </div>
            </div>

          </div>
        </div>
      </div>

      <!--      已签收-->
      <div v-if="this.userChoice.uBrand==='已签收'"  style="float:left;background-color: #f7f7f7; ">
        <div style="float:left;" v-for="(list,index) in lists" :key="index">
          <div v-if="list.orderState==='已签收'"  class="show">

            <div style="width: 100%;height: 30px;margin-bottom: 5px">
              <div class="iconfont icon-shangdian" style="float:left;color: #54aadd;font-size: 28px;text-align: left">
                <div style="float:right;margin-left: 10px;font-size: 15px;color: #777777">{{list.businessEnterName}}</div>
              </div>
              <div style="float:right;color: #d00228;font-size: 17px">{{list.orderState}}</div>
            </div>
            <el-image :src="require('../assets/css/image/'+list.link)" style="height: 70px;width: 80px;border-radius:10px;float:left;"></el-image>
            <div style="float:left;margin-left: 10px;width: 210px;height: 110px;">
              <div style="font-weight: bold;font-size: 14px;text-align: left;">
                {{list.goodsName}}
                <div style="float:right;font-weight: bold;font-size: 15px;text-align: left;color: #d2133c;margin-left: 10px">
                  ￥{{list.price}}
                  <div style="font-weight: bold;font-size: 15px;text-align: center;color: #494949;margin-left: 5px">×{{list.purchases}}</div>
                </div>
              </div>
              <div style="width: 110px;font-size: 8px;text-align: left;color: #808080;margin-top: 5px;">
                {{list.differentCapacity}}
                {{' '}}
                {{list.differentComputer}}
                {{' '}}
                {{list.differentiationColor}}
                {{' '}}
                {{list.differentProcessor}}
                {{' '}}
                {{list.differentBrand}}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import request from "../request";
import iconfont from "../assets/css/icon/iconfont.css";
import store from '../store/index'

export default {
  name:'allorders',
  created () {
    this.userId=store.getters.getuserId
    // console.log(store.getters.getuserId)
    this.getData()
  },
  data(){
    return {
      flag: true, //定义显示隐藏的变量
      userId:'',
      state:['全部','未发货','待签收','已签收'],
      brandNum: 0,
      userChoice: {
        uBrand: '全部',
      },
      lists: {
        goodsId:'',
        businessId:'',
        goodsName: '',
        price: '',
        businessEnterName: '',
        link: '',
        orderState:'',
        differentCapacity:'',
        differentComputer:'',
        differentiationColor:'',
        differentProcessor:'',
        differentBrand:'',
        purchases:'',
      },

    }
  },

  computed: {

  },

  methods: {
    back(){
      this.$router.push('/shop/class')
    },
    getData () {
      console.log(this.userId+"你好")
      request.get('/order/orderall/'+this.userId
      ).then(res=>{
        if (res.flag) {
          console.log(res.data)
          this.lists = res.data
        }
        else {
          alert('请求失败')
        }
      })
    },
    getBrandClasses(index)
    {
      return {myBrandList: index === this.brandNum}
    },
    // 将用户所进行的选择存储到userChoice对象对应的属性里
    brandClick: function (index, i) {
      this.brandNum = index;
      this.userChoice.uBrand = i;
      // console.log("品牌： " + index);
      console.log("状态： " + this.userChoice.uBrand);
    },
    searchGoods: function () {
      // 延时函数，等待用户所选择的属性赋值到userChoice对象里
      setTimeout('', 3000);
      console.log(this.userChoice);
      // 将userChoice对象传入后端
      // 【数据渲染】从后端返回商品的各个数据，渲染到商品列表中
    }


  }

}
</script>
<style lang="less" scoped>
.myBrandList{

  color: #5080be;
}
.seresult {
  position: absolute;
  width: 375px;
  //height: 750px;
  background: #f7f7f7;
  /* background-size: cover;*/
}
.zhselect-one{
  font-size: 15px;
  float: left;
}
.zhselect-two{
  font-size: 15px;
  font-weight: bold;
  float: left;
}
.show{
  width: 300px;
  height: 135px;
  background-color: white;
  float: left;
  margin: 10px 20px;
  border-radius: 15px;
  padding: 10px 20px;
}
</style>