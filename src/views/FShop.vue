<template>
  <div class="content">
    <div class="shop-search">
      <el-input class="search"  type="text" @keyup.enter.native="Fsearch(searchName)" v-model="searchName">
        <i slot="prefix" class="el-input__icon el-icon-search" style="float: left;font-size: 20px;margin-left: 100px;margin-top: 10px;color: black;"></i>
      </el-input>

    </div>
    <div class="middle">
      <div class="item">
        <div class="left-item">商品品牌</div>
        <div class="right">
        <div class="right-item info-title">
          <div v-for="(i, index) in brand" :key="index" style="float: left;color: #517bdd;margin:14px 5px;font-size: 12px">
            <!--<span @click="brandClick(index)">{{i}}</span>-->
            <div :class="getBrandClasses(index)" v-on:click="brandClick(index, i); searchGoods()">{{i}}</div>
          </div>
        </div>
        <div class="right-item-icon">...<i class="iconfont icon-xialajiantou"></i></div>
      </div>
      </div>
      <div class="item">
        <div class="left-item">处理器</div>
        <div class="right">
        <div class="right-item info-title">
          <div v-for="(i, index2) in processor" :key="index2" style="float: left;color: #517bdd;margin:14px 5px;font-size: 12px">
            <div :class="getProcessorClasses(index2)" v-on:click="processorClick(index2, i); searchGoods()">{{i}}</div>
          </div>
        </div>
        <div class="right-item-icon">...<i class="iconfont icon-xialajiantou"></i></div>
        </div>
      </div>
      <div class="item">
        <div class="left-item">内存容量</div>
        <div class="right">
        <div class="right-item info-title">
          <div v-for="(i, index3) in capacity" :key="index3" style="float: left;color: #517bdd;margin:14px 5px;font-size: 12px">
            <div :class="getCapacityClasses(index3)" v-on:click="capacityClick(index3, i); searchGoods()">{{i}}</div>
          </div>
        </div>
        <div class="right-item-icon">...<i class="iconfont icon-xialajiantou"></i></div>
      </div>
      </div>
      <div class="item">
        <div class="left-item">电脑整机</div>
        <div class="right">
        <div class="right-item info-title">
          <div v-for="(i, index4) in computers" :key="index4" style="float: left;color: #517bdd;margin:14px 10px;font-size: 12px">
            <div :class="getComputersClasses(index4)" v-on:click="computersClick(index4, i); searchGoods()">{{i}}</div>
          </div>
        </div>
        <div class="right-item-icon">...<i class="iconfont icon-xialajiantou"></i></div>
      </div>
      </div>
      <div class="item">
        <div class="left-item">电脑颜色</div>
        <div class="right">
        <div class="right-item info-title">
          <div v-for="(i, index5) in color" :key="index5" style="float: left;color: #517bdd;margin:14px 10px;font-size: 12px">
            <div :class="getColorClasses(index5)" v-on:click="colorClick(index5, i); searchGoods()">{{i}}</div>
          </div>
        </div>
        <div class="right-item-icon">...<i class="iconfont icon-xialajiantou"></i></div>
      </div>
    </div>
    </div>

    <div class="mid-foot">
      <span class="iconfont icon-love"></span>
      为你推荐
      <span class="iconfont icon-love"></span>
    </div>


    <div class="goods-list">
<!--      <div class="shop-list" v-for="(list,index) in lists" :key="index" @click="detail(index)">-->
      <div class="shop-list" v-for="(list,index) in lists" :key="index">
        <el-image @click="detail(index)" :src="require('../assets/css/image/2.jpg')" style="height: 155px;width: 100%;border-top-left-radius: 10px;border-top-right-radius:10px "></el-image>
        <div  style="padding-left: 15px;padding-top: 8px">
        <div class="name">
          {{list.goodsName}}
        </div>
        <div class="price">
          ￥{{list.price}}
        </div>
        <div class="shopname">
          <span class="iconfont icon-shangdian" style="font-size: 10px"></span>
          {{list.businessEnterName}}
        </div>
        <div class="button-left">加入购物车</div>
        <div class="button-right">立即购买</div>
        <!--      <el-button style="width: 100px;height: 15px;background-color: greenyellow;margin: 5px auto">加入购物车</el-button>-->
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import iconfont from "../assets/css/icon/iconfont.css";
import tabbar from "../components/tabbar/Tabbar";
import request from "../request";
import store from "../store";
export default {
  name: "FShop",

  components:{
    tabbar
  },

  data(){
    return{
      searchName:'',
      brand:'',
      processor:'',
      capacity:'',
      computers:'',
      color:'',
      // search:'',
      // brand:['惠普','戴尔','联想','华为'],
      // processor:['Intel i3','AMD A10','AMD 逆龙'],
      // capacity:['4GB','8GB','16GB','32GB','64GB'],
      // computers:['笔记本','台式机','游戏本','体机'],
      // color:['黑色','银色','灰色','红色'],
      brandNum: -1,
      processorNum: -1,
      capacityNum: -1,
      computersNum: -1,
      colorNum: -1,

      // userId:'',
      // car:{
      //   goodsId:''
      // },

      lists: {
        goodsId:'',
        businessId:'',
        goodsName: '',
        price: '',
        businessEnterName: '',
        link: ''
      },
      // 将用户选择的内容存储到userChoice对象里
      userChoice: {
        brand: '',
        processor: '',
        capacity: '',
        computers: '',
        color: ''
      }
    }
  },
  created () {
    this.getData()
    this.getData1()
    this.getData2()
    this.getData3()
    this.getData4()
    this.getData5()
  },
  methods: {
    // addCar(index){
    //   // console.log(this.userId)
    //   // console.log(this.lists[index].goodsId+'......')
    //   this.car.goodsId=this.lists[index].goodsId
    //
    //   request.post("/cart/joinshop/"+this.userId+'/'+this.car.goodsId
    //   ).then(res => {
    //     if (res.flag) {
    //       console.log(res.flag + "你好")
    //     } else {
    //       alert("res.msg");
    //     }
    //   })
    // },
    //属性
    getData() {
      request.get('/shop/class').then(res => {
        if (res.flag) {
          console.log(res.data)
          this.lists = res.data

        } else {
          alert('请求失败')
        }
      })
          .catch(function (err) {
            console.log(err)
          })
    },

    detail(index){
      console.log(this.lists[index].goodsId+'......')
      console.log(this.lists[index].businessId+'......')

      this.$router.push({path: '/shop/goodsdetail',query: {goodsId:this.lists[index].goodsId,businessId:this.lists[index].businessId}})
    },
    getData1() {
      request.get("/shop/classifybrand").then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.brand = res.data
        } else {
          alert("res.msg");
        }
      })
    },
    getData2() {
      request.get("/shop/classifyprocessor").then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.processor = res.data
        } else {
          alert("res.msg");
        }
      })
    },
    getData3() {
      request.get("/shop/classifycapacity").then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.capacity = res.data
        } else {
          alert("res.msg");
        }
      })
    },
    getData4() {
      request.get("/shop/classifycomputers").then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.computers = res.data
        } else {
          alert("res.msg");
        }
      })
    },
    getData5() {
      request.get("/shop/classifycolor").then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.color = res.data
        } else {
          alert("res.msg");
        }
      })
    },
    getData6() {
      console.log(this.userChoice)
      request.get("/shop/class/",this.userChoice
      ).then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.lists = res.data
        } else {
          alert("请求失败！");
        }
      })
    },
    Fsearch(searchName){
      this.$router.push({path: '/shop/search',query: {searchName:searchName}})
    },

    // 使得用户所选择分类内容的字体被标识为红色
    getBrandClasses(index)
    {
      return {myBrandList: index === this.brandNum}
    }
    ,
    getProcessorClasses(index2)
    {
      return {myBrandList: index2 === this.processorNum}
    }
    ,
    getCapacityClasses(index3)
    {
      return {myBrandList: index3 === this.capacityNum}
    }
    ,
    getComputersClasses(index4)
    {
      return {myBrandList: index4 === this.computersNum}
    }
    ,
    getColorClasses(index5)
    {
      return {myBrandList: index5 === this.colorNum}
    },
    // 将用户所进行的选择存储到userChoice对象对应的属性里
    brandClick: function (index, i) {
      this.brandNum = index;
      this.userChoice.brand = i;
      // console.log("品牌： " + index);
      console.log("品牌： " + this.userChoice.brand);
      this.getData6()
    }
    ,
    processorClick: function (index2, i) {
      this.processorNum = index2;
      this.userChoice.processor = i;
      // console.log("处理器： " + index2);
      console.log("处理器： " + this.userChoice.processor);
    }
    ,
    capacityClick: function (index3, i) {
      this.capacityNum = index3;
      this.userChoice.capacity = i;
      // console.log("内存容量： " + index3);
      console.log("内存容量： " + this.userChoice.capacity);
    }
    ,
    computersClick: function (index4, i) {
      this.computersNum = index4;
      this.userChoice.computers = i;
      // console.log("电脑整机： " + index4);
      console.log("电脑整机： " + this.userChoice.computers);
    }
    ,
    colorClick: function (index5, i) {
      this.colorNum = index5;
      this.userChoice.color = i;
      // console.log("颜色： " + index5);
      console.log("颜色： " + this.userChoice.color);
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
.content{
  background-color: #f7f7f7;
  width: 375px;
}
.myBrandList{
  color: crimson;
}
.shop-search{
  width: 375px;
  height: 70px;
}
.middle{
  background-color: white;
  width: 350px;
  height: 240px;
  margin: 10px auto;
  border-radius: 10px;
  padding-top: 10px;
}
.item{
  width: 320px;
  height: 45px;
  margin: 0px auto;
}
.info-title {
  //width: 100%;   /*一定要设置宽度，或者元素内含的百分比*/
  overflow:hidden; /*溢出的部分隐藏*/
  white-space: nowrap; /*文本不换行*/
  text-overflow:ellipsis;/*ellipsis:文本溢出显示省略号（...）；clip：不显示省略标记（...），而是简单的裁切*/
}

.left-item{
  text-align: right;
  line-height: 45px;
  font-size: 15px;
  margin-right: 10px;
  width: 70px;
  float: left;
}
.right{
  width: 235px;
  height: 43px;
  float: left;
  border-color: #e6e6e6;
  border-width: 1px;
  border-style: solid;
}
.right-item{
  width: 180px;
  height: 43px;
  float: left;
  margin:auto;
}
.right-item-icon{
  float:right;
  width: 45px;
  height: 18px;
  border-style: solid;
  border-radius: 25px;
  border-color: #cbcbcb;
  border-width: 1px;
  background-color: white;
  margin-top: 13px;
}
.mid-foot{
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 50px;
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
  font-size: 13px;
  text-align: left;
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
///deep/.el-input__inner {
//&::placeholder {
//   color: #dadada;
//   font-size: 16px;
//   text-align: center;
// }
//}

//输入框中的icon
/deep/ .el-input .el-input__suffix{
  .el-input__suffix-inner{
    float: left;
    font-size: 20px;
    margin-right: 230px;
    margin-top: 15px;
    color: black;

  }
}
//输入框样式
/deep/ .search input.el-input__inner{
  border-radius: 25px;
  width: 350px;
  margin-top: 15px;
  border-width: 1px;
  border-color: orange;
  border-style: solid;
  text-align: center;
}
</style>
