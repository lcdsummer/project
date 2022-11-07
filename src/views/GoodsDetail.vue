<template>
  <div class="recommendPage">
    <div style="width: 375px;height: 45px;background-color: #e6e6e6;float:left;">
      <i @click="back()" class="el-icon-arrow-left" style="color: black;font-size: 20px;float:left;margin-top: 10px;margin-left: 10px"></i>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="i in details.link">
        <div>
          <!-- <img :src="i" style="width: 335px;height: 340px"> -->
          <img :src="require('../assets/css/image/'+i)" style="width: 335px;height: 340px">
        </div>
      </swiper-slide>

<!--      <div class="swiper-pagination" slot="pagination"></div>-->
<!--      <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--      <div class="swiper-button-next" slot="button-next"></div>-->
<!--      <div class="page"><span>{{swiperid+1}}/{{swiperlen}}</span></div>-->

    </swiper>
<!--     <div style="margin-left: 10px;position: absolute;z-index: 1000;background-color:pink;width: 50px;height: 50px;border-radius: 50px;"><span>{{ active +1}}/3</span></div>-->

    <div class="details">
      <div class="price">
        ￥{{details.price}}
      </div>
      <div class="goodsName">
        {{details.goodsName}}
      </div>
      <div style="margin-left: 15px;width: 300px;height: 125px;">
      <div class="item">
        内存容量：
        <div>{{details.differentCapacity}}</div>
      </div>
      <div class="line"></div>
      <div class="item">
        电脑整机：
        <div>{{details.differentComputer}}</div>
      </div>
      <div class="line"></div>
      <div class="item">
        商品颜色：
        <div>{{details.differentiationColor}}</div>
      </div>
      <div class="item">
        处理器：
        <div>{{details.differentProcessor}}</div>
      </div>
      <div class="line"></div>
      <div class="item">
        品牌：
        <div>{{details.differentBrand}}</div>
      </div>
      </div>

      <div class="iconfont icon-shangdian" style="color: #54aadd;font-size: 30px;float: left;margin-left: 15px;text-align: left">
        <div style="margin-top: 10px;font-size: 15px;color: #777777">{{details.businessEnterName}}</div>
        <div style="margin-top: 5px;width: 100px;height: 32px;background-color: white;border-width: 2px;border-color: #c8c8c8;border-style: solid;border-radius: 10px;">
          <div class="iconfont icon-jinru" style="float: left;font-size: 17px;color: #838383;margin-top: 7px;margin-left: 5px"></div>
          <div style="float: left;font-size: 14px;color: #393939;margin-left: 8px;margin-top: 6px">进入店铺</div>
        </div>
      </div>
      <div style="width: 305px;height: 50px;float: left;margin-left: 15px;margin-top: 10px">
        <el-button style="width: 150px;margin-right: -11px;padding-right: 0px;height: 50px;border-color:#7bbe00 ;background-color: #7bbe00;float: left;border-bottom-right-radius: 0px;border-top-right-radius: 0px;border-top-left-radius: 15px;border-bottom-left-radius: 15px;" @click="addCar()">
          <div class="iconfont icon-gouwuche" style="float: left;font-size: 25px;color: white;"></div>
          <div style="float: left;font-size: 17px;font-weight: bold;color: white;margin-top: 5px;margin-left: 5px;">加入购物车</div>
        </el-button>
        <el-button  @click="drawer = true" style="border-color: #ef6451;width: 150px;height: 50px;background-color: #ef6451;float: left;border-top-right-radius: 15px;border-bottom-right-radius: 15px;border-bottom-left-radius: 0px;border-top-left-radius: 0px;">
          <div class="iconfont icon-qian" style="float: left;font-size: 25px;color: white;"></div>
          <div style="float: left;font-size: 17px;font-weight: bold;color: white;margin-top: 5px;margin-left: 5px;">立即购买</div>
        </el-button>

      </div>

      <el-drawer
          title="我是标题"
          :visible.sync="drawer"
          :with-header="false"
          :direction="direction"
          :modal="false"
          style="position: absolute;width: 335px;height: 360px;"
          size="60%"
      >
        <div style="width: 335px;height: 45px;background-color: #f2f2f2;text-align: center;line-height: 45px;font-size: 13px">确认订单</div>
        <div style="width: 80px;height: 75px;float: left;margin-top:20px;margin-left:6px;">
          <!-- <img :src="details.link[0]" style="width: 80px;height: 75px;border-radius: 10px;"> -->
          <img :src="require('../assets/css/image/'+details.link[0])" style="width: 80px;height: 75px;border-radius: 10px;">
        </div>
        <div style="margin-left: 5px;width: 238px;height: 80px;float:left;margin-top:20px;">
        <div style="font-size: 12px;text-align: left;font-weight: bold">
          {{details.goodsName}}
        </div>

        <div style="float: left;font-size: 8px;text-align: left;color: #808080;margin-top: 5px;width: 160px;">
          {{details.differentCapacity}}
          {{' '}}
          {{details.differentComputer}}
          {{' '}}
          {{details.differentiationColor}}
          {{' '}}
          {{details.differentProcessor}}
          {{' '}}
          {{details.differentBrand}}
          {{' '}}
          {{details.businessEnterName}}

        </div>
        <div style="float: right;color: red;font-weight: bold;font-size: 18px;">￥{{details.price}}</div>

        </div>

        <div style="width: 110px;height: 20px;font-size: 14px;text-align: left;float: left;margin-top: 28px;margin-left: 10px">总计：{{this.total}}元</div>

        <el-input-number v-model="number" @change="handleChange" :min="1" :max="this.details.number" size="mini" style="float: left;width: 85px;margin-top: 25px;margin-left: 10px;"></el-input-number>

        <el-button @click="pay()" style="width: 90px;height: 40px;background-color: #d53c4e;color: white;float: left;margin-left: 15px;margin-top: 15px;border-radius: 25px">支付</el-button>

      </el-drawer>

    </div>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import request from "../request";
import iconfont from "../assets/css/icon/iconfont.css";
import store from '../store/index'


export default {
  components: {
    swiper,
    swiperSlide
  },
  created () {

    //存储goodsId到本地
    store.commit("setgoodsId", this.$route.query.goodsId);
    store.commit("setbusinessId", this.$route.query.businessId);

    this.goodsId=store.getters.getgoodsId;
    this.businessId=store.getters.getbusinessId;
    this.userId=store.getters.getuserId
    console.log("getgoodsId")
    console.log(store.getters.getgoodsId)
    console.log("getbusinessId")
    console.log(store.getters.getbusinessId)
    console.log("getuserId")
    console.log(store.getters.getuserId)
    this.getData()

  },
  data() {
    return {
      active:0,
      goodsId:'',
      businessId:'',
      userId:'',
      drawer: false,
      direction: 'btt',
      number:1,
      total:0,

      details:{
        goodsId:'',
        businessId:'',
        price:'',
        goodsName:'',
        differentCapacity:'',
        differentComputer:'',
        differentiationColor:'',
        differentProcessor:'',
        differentBrand:'',
        businessEnterName:'',
        link:'',
        number:'',

      },


      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

      }
    };
  },

  methods:{
    addCar(){
      request.post("/cart/joinshop/"+this.userId+'/'+this.goodsId
      ).then(res => {
        if (res.flag) {
          alert("添加成功！")
        } else {
          alert("添加失败");
        }
      })
    },
    getData(){
      console.log(this.goodsId+'你好')
      console.log(this.businessId+'你好')
      request.get('/shop/particular/'+this.goodsId+'/'+this.businessId
      ).then(res=>{
        if (res.flag) {
          this.details = res.data
          console.log(res.data)
          this.total=this.details.price
        }
        else {
          alert('请求失败')
        }
      })
    },
    handleChange() {
      // console.log(this.number);
      this.total=this.details.price*this.number
    },
    back(){
      this.$router.push('/shop/class')
    },
   pay(){
      console.log("你好")
     request.post('/api/ali-pay/trade/page/pay/'+this.userId+'/'+this.goodsId
     ).then(res=>{
       if (res.flag) {
         document.write(res.data)
       }
       else {
         alert('请求失败')
       }
     })
   }


  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },


};
</script>
<style scoped >

/deep/ .el-drawer__container ::-webkit-scrollbar{
  display: none;
}
/deep/ .el-input-number__increase {
  background-color: white !important;
  border-color: black;

}
/deep/ .el-input-number__decrease {
  background-color: white !important;
  border-color: black;

}
/deep/ .el-input__inner {
  border-color: black;
  border-radius: 0px;
}

.recommendPage{
  width: 375px;
  height: 750px;
  background-color: #e6e6e6;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.recommendPage .swiper-container{
  position: absolute;
  /*display: flex;*/
  width: 335px;
  height: 340px;
  margin-left: 20px;
  margin-top: 45px;
  background-color: white;
}
.recommendPage .swiper-container .swiper-slide{
  width: 335px;
  line-height: 200px;
}
.details{
  background-color: white;
  width: 335px;
  height: 340px;
  position: absolute;
  margin-top: 385px;
  margin-left: 20px;

}
.price{
  color: #d50023;
  text-align: left;
  font-size: 20px;
  margin-left: 15px;
  font-weight: bold;
}
.goodsName{
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  margin-left: 15px;

}
.item{
  color: #777777;
  font-size: 10px;
  margin: 10px auto;
  float: left;
  /*background-color: #eee;*/
  width: 74px;
  height: 40px;
  text-align: left;
}
.line{
  float: left;
  background-color: #777777;
  width: 2px;
  height: 40px;
  margin-top: 10px;
  margin-right: 30px;
}



</style>

