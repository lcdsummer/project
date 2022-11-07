<template>
  <div class="hello">
    <div class="head-left" @click="handle">
    返回登录
    </div>
    <div class="left">
      <div class="left1" @click="back">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    handle(){
    //  alert("即将跳转到登录页面")
      this.$router.push('../login');
    },
    back() {
      this.$router.push('../views/modifyFile')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 50px;
  width: 375px;
  position: relative;
  padding-left: 20px;
  padding-top: 20px;
}
.head-left{
  position:absolute;
  float: left;
  font-size: 15px;
  text-align: center;
}

</style>
