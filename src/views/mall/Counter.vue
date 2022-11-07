<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 数量 -->
    <span class="number-box"> {{ num }}</span>
     <!-- 加 1 -->
     <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
   
  </div>
</template>

<script>
import bus from '@/views/mall/eventBus.js'

export default {
  props: {
    // 接受商品的id值，使用EventBus 
    //把数量传递到shopCar,更新商品数量
    id: {
      required: true,
      type: Number
    },
       //接收到的 num 数量值
       num: {
      type: Number,
      default: 1
    }
  },
  methods: {
    add() {
     // 发送的数据格式为{ id，value }
     // id 是商品的id; value 是商品最新的购买数量
     const obj = { id: this.id, value: this.num + 1}
     //通过EventBus把obj对象发送给shopCar
     bus.$emit('share', obj)
    },
    sub() {
      if(this.num - 1 === 0) return
      const obj = { id: this.id, value: this.num - 1 }
      bus.$emit('share', obj)
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>