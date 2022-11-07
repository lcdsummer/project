<template>
  <div class="tabbar">
    <div class="item" @click="clickItem('/shop/class')" :class="{active: $route.path==='/shop/class'}">
      <i class="iconfont icon-zhuye" style="font-size: 27px;color: #9f9f9f"></i>
      <p style="color: #9f9f9f;font-size: 10px">主页</p>
    </div>
<!--    <div class="item" @click="clickItem('/login')" :class="{active: $route.path==='/login'}">-->
    <div class="item">
      <i class="iconfont icon-shuji1" style="font-size: 27px;color: #9f9f9f"></i>
      <p style="color: #9f9f9f;font-size: 10px">知识区</p>
    </div>
    <div class="item" @click="clickItem('/shopcart')" :class="{active: $route.path==='/shopcart'}">
      <i class="iconfont icon-gouwuche" style="font-size: 27px;color: #9f9f9f"></i>
      <p style="color: #9f9f9f;font-size: 10px">购物车</p>
    </div>
    <div class="item" @click="clickItem('/my')" :class="{active: $route.path==='/my'}">
      <i class="iconfont icon-wode" style="font-size: 27px;color: #9f9f9f"></i>
      <p style="color: #9f9f9f;font-size: 10px">我的</p>
    </div>
  </div>
</template>

<script>
import iconfont from "../../assets/css/icon/iconfont.css";
export default {
  name: "tabbar",
  methods:{
    clickItem:function(path){
      this.$router.push(path);
    }
  }

}
</script>

<style scoped>
.tabbar{
  position: fixed;
  bottom:0px;
  /*border-top:1px solid #d2d2d2;*/
  background-color: white;
  width: 375px;
  height:60px;
}
.item{
  margin:5px 8%;
  float:left;
}
.item p{
  margin:0;
  font-size: 15px;
}
.active{
  color:#108b70;
}
</style>