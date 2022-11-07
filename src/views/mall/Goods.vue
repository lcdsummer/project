<template>
  <div class="goods-container">
   <!-- 左侧图片 -->
   <div class="thumb">
     <div class="custom-control custom-checkbox">
      <!-- 复选框 -->
      <input type="checkbox" class="custom-control-input" :id="'cb' + id" :checked="state" @change="stateChange"/>
      <label class="custom-control-label" >
        <!-- 商品图 -->
        <img  :src="link" alt="" />
      </label>
     </div>
   </div>

   <!--右侧信息区域 -->
   <div class="goods-info">
    <!--商品标题 -->
    <div class="goods-title" style="width:180px; word-wrap:break-word"> {{ businessEnterName }}</div>
    <!-- <div class="goods-info-bottom"> -->
     <!-- 商品价格 -->
     <!-- <span class="goods-price">{{ price }}</span> -->
     <!-- 商品的数量 -->
    <!-- <Counter :num="count" :id="id"></Counter> -->
    <div class="con" style="">
      <span class="ca" >{{ capacity }} {{processor}} {{brand}} {{color}}</span>
    </div>
    
   
    <div class="goods-price">￥{{ price }}</div>
    <div class="goods-info-bottom">
    
     <!-- <div class="goods-price">{{ price }}</div> -->
   
    <!-- <van-stepper  v-model="value"/> -->
    <Counter :num="count" :id="id"></Counter>
    
    </div>
    
   </div>

  </div>
</template>

<script>
//import { timeStamp } from 'console';
import Counter from '@/views/mall/Counter.vue'


  export default {
      props: {
         // 通知父组件根据 id 修改对应商品的勾选状态。
         id: {
      required: true,
      type: Number
    },
    businessEnterName: {
      // default:'联想(Lenovo)天逸510S速龙版个人商务台式机电电脑整机',
      default:'',
      type: String
    },
    link: {
      default:'',
      type:String
    },
    //单价
    price: {
    //  default: 9999,
    default:'',
      type: Number
    },
    //内存
    capacity: {
     // default:'16GB',
     default:'',
      type:String
    },
    processor: {
     // default:'台式机',
     default:'',
      type:String
    },
    brand: {
      //default:'intel i5',
      default:'',
      type:String
    },
    color: {
     // default:'皓月银',
     default:'',
      type:String
    },
    // 勾选状态
    state: {
      default: true,
      type: Boolean
    },
    // 商品的购买数量
   count: {
      type: Number,
      default: 1
    }
      },

      data() {
        return{
          
          
          // lists:{
          //  businessEnterName :'',
          //  capacity:'',
          //  processor:'',
          //  brand:'',
          //  color:''
          // }
        }
      },
      methods: {
        stateChange(e) {
   // console.log(e)
   const newState = e.target.checked
  // console.log( newState)
  // console.log(this.id)
  //触发自定义事件
  this.$emit('state-change',{ id: this.id,value: newState})
  }
      },
      components: {
    Counter
}
  }
</script>
<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .ca {
      
      font-size: 8px;
      color: grey;
      margin-right:80px;
      margin-top: 20px;
    }
    .goods-info-bottom {
      // display: flex;
      // justify-content: space-between;
      margin-left:120px;
    }
      .goods-price {
        margin-left: 120px;
        font-weight: bold;
        color: red;
        font-size: 13px;
      
    }
  }
}
</style>
