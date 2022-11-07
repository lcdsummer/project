<template>
  <div class="footer-container">
     <!-- 左侧的全选 -->
     <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isfull"
       @change="fullChange"/>
       <label class="custom-control-label" for="cbFull">全选</label>
     </div>

     <!--总计 -->
     <div>
      <span>总计：</span>
      <span class="total-price">{{ amount.toFixed(2) }}</span>
     </div>

     <!--支付 -->
     <button type="button" class="btn btn-primary btn-settle">支付</button>
  </div>
  
</template>

<script>
export default {
  props: {
    //全选
    isfull: {
      type: Boolean,
      default: true
    },
    //总价格
    amount: {
      type: Number,
      default: 0
    }
  },

  methods: {
    //监听全选的变化
    fullChange(e) {
       //   console.log(e.target.checked)
      this.$emit('full-change', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width:410px;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 50px;
}
.btn-settle {
  height: 70%;
  min-width: 70px;
  border-radius: 20px;
  font-size: 12px;
  margin-right: 12px;
  background: #BB0000;
  color:#fff;
}
</style>
