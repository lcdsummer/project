<template>
  <div class="seresult">
<!--    搜索-->
    <div style="width: 375px;height: 80px;background-color: #f7f7f7">
      <i @click="back()" class="el-icon-arrow-left" style="color: black;font-size: 20px;"></i>
    <el-input placeholder="" type="" @keyup.enter.native="Fsearch(searchName)" v-model="searchName" autocomplete="off" style="margin-left:15px;margin-top: 18px;width: 300px ;border-color: white;color: black;border-width: 1px;border-style: solid;border-radius: 25px;">
      <i slot="prefix" class="el-input__icon el-icon-search" style="color: black;font-size: 18px;"></i>
      <i slot="suffix" @click="clear" style="line-height: 40px;font-size: 14px;color: black;font-family: '标题黑';padding-right: 20px">清空</i>
    </el-input>
    </div>

<!--    排序-->
    <div style="background-color: white;width: 375px;height: 50px;margin-bottom: 10px;">
      <div :class="value===true ? 'zhselect-two' : 'zhselect-one'" @click="show()" style="float:left;margin-left: 100px;margin-top: 15px">
        综合
        <div v-if="value===true" style="height: 5px;background-color: #ffc55d;border-radius: 50px;margin-left: 1px;margin-right: 2px"></div>
      </div>
      <div  @click="paixu()" v-if="flag" style="float:right;margin-right: 85px;margin-top: 15px;font-size: 15px;width: 45px;height: 20px;">

        <span style="float: left">价格</span>
        <i class="el-icon-caret-top" style="float:left;width: 8px;height: 8px"></i>
        <i class="el-icon-caret-bottom"  style="float:left;width: 8px;height: 8px"></i>
      </div>
      <div  @click="paixu()" v-if="!flag" style="float:right;margin-right: 85px;margin-top: 15px;font-size: 15px;width: 45px;height: 20px;">

        <span style="float: left">价格</span>
        <i class="el-icon-caret-top" style="float:left;width: 8px;height: 8px"></i>
        <i class="el-icon-caret-bottom"  style="float:left;width: 8px;height: 8px"></i>
      </div>
    </div>
<!--    展示-->
    <div class="goods-list" v-if="!value">
      <div class="shop-list" v-for="(item,index) in lcList" :key="index" @click="detail(index)">
        <!-- <el-image :src="require('../assets/css/image/q.jpg')" style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image> -->
        <el-image :src="require('../assets/css/image/'+item.link)" style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image>
        <!--      <el-image :src=list.link></el-image>-->
        <div style="padding-left: 15px;padding-top: 8px">
          <div class="name">
            {{item.goodsName}}
          </div>
          <div class="price">
            ￥{{item.price}}
          </div>
          <div class="shopname">
            <span class="iconfont icon-shangdian" style="font-size: 10px"></span>
            {{item.businessEnterName}}
          </div>
          <div class="button-left">加入购物车</div>
          <div class="button-right">立即购买</div>
        </div>
      </div>
    </div>

    <div class="goods-list" v-if="value">
      <div class="shop-list" v-for="(item,index) in lists" :key="index" @click="detail(index)">
        <!-- <el-image :src="require('../assets/css/image/q.jpg')" style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image> -->
        <el-image :src="require('../assets/css/image/'+item.link)" style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image>
<!--        <el-image :src="require(item.link)"  style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image>-->
        <div style="padding-left: 15px;padding-top: 8px">
          <div class="name">
            {{item.goodsName}}
          </div>
          <div class="price">
            ￥{{item.price}}
          </div>
          <div class="shopname">
            <span class="iconfont icon-shangdian" style="font-size: 10px"></span>
            {{item.businessEnterName}}
          </div>
          <div class="button-left">加入购物车</div>
          <div class="button-right">立即购买</div>
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
  name:'search',
  created () {
    console.log(this.$route.query.searchName+"......")
    this.searchName=this.$route.query.searchName;
    this.getData(this.searchName)
    // if(searchName != null) {
    //   this.searchName = searchName
    // }

  },
  // mounted() {
  //   this.lcList = this.lists; //用自己创建的空对象接受传递过来的值
  //   console.log(this.lcList);
  // },
  data(){
    return {
      searchName:'',
      flag: true, //定义显示隐藏的变量
      value:true,

      goodsId:1,
      businessId:1,
      lists: {
        goodsName: '',
        price: '',
        businessEnterName: '',
        link: ''
      },
        // {goodsName:'联想笔记本电脑IdeaPad',price:'3999',businessEnterName:'联想自营旗舰店',link:'../assets/css/image/q.jpg'},
        // {goodsName:'联想笔记本电脑IdeaPad',price:'4890',businessEnterName:'联想自营旗舰店',link:'../assets/css/image/q.jpg'},
        // {goodsName:'联想笔记本电脑IdeaPad',price:'3899',businessEnterName:'联想自营旗舰店',link:'../assets/css/image/q.jpg'},
        // {goodsName:'联想笔记本电脑IdeaPad',price:'3799',businessEnterName:'联想自营旗舰店',link:'../assets/css/image/q.jpg'},
        // {url:"../assets/css/image/q.jpg",price:'4680',name:'联想自营旗舰店'},
    }
  },

  computed: {
    lcList:function(){
      const arr=this.lists.filter(function(item){
        return item.price>0
      })
      arr.sort((a, b) => {
        return a.price - b.price;
      });
      return arr
    },
    },

    methods: {
      back(){
        this.$router.push('/shop/class')
      },
      clear() {
        this.searchName = ''
      },
      show() {
        this.value=true
      },
      detail(index){
        console.log(this.lists[index].goodsId+'......')
        console.log(this.lists[index].businessId+'......')

        this.$router.push({path: '/shop/goodsdetail',query: {goodsId:this.lists[index].goodsId,businessId:this.lists[index].businessId}})
      },
      paixu() {
        this.value=false
        if (this.flag) {
          this.lcList.sort((a, b) => {
            return a.price - b.price;
          });
        }
        else {
          this.lcList.sort((a, b) => {
            return b.price - a.price;
          });
        }
        this.flag = !this.flag;

      },
      getData (searchName) {
        console.log(searchName+"你好")
        request.get('/shop/search/'+searchName
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
      Fsearch(searchName){
        this.getData(searchName)
      },

      //bug搜索页再搜索商品没反应
      // watch: {
      //   $route() {
      //     this.getData();
      //   },
      // },


      }

}
</script>
<style lang="less" scoped>
.seresult {
  position: absolute;
  width: 375px;
  //height: 750px;
  background: #f7f7f7;
  /* background-size: cover;*/
}
//输入框
  /deep/  .el-input .el-input__inner{
    border-radius: 50px;
    border-color: white;
    padding-left: 40px;
  }
.goods-list{
  padding:0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.shop-list{
  width: 168px;
  height: 255px;
  margin: 5px 0;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
}
.name{
  text-align: left;
  font-size: 12px;
}
.price{
  color: #da8695;
  text-align: left;
  font-size: 15px;
}
.shopname{
  text-align: left;
  font-size: 13px;
  color: #969696;
}
.button-left{
  border-width: 2px;
  border-color: #e0dcdd;
  border-style: solid;
  color: #2a9873;
  font-size: 12px;
  width: 60px;
  float: left;
  background-color: white;
  margin-top: 5px;
  margin-right: 10px;
}
.button-right{
  border-width: 2px;
  border-color: #e0dcdd;
  width: 60px;
  border-style: solid;
  color: #cc525d;
  font-size: 12px;
  float: left;
  background-color: white;
  margin-top: 5px;

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
</style>