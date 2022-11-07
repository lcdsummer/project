<template>
  <div class="fhead">
    <div class="head-left" @click="handle" style="color: #707070">
    返回登录
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstHead',
  props: {
    msg: String
  },
  methods:{
    handle(){
      alert("即将跳转到登录页面")
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fhead{
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
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
