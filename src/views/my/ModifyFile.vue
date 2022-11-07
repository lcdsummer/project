<template>
  <div calss="user-profile" style="width:375px; height:750px; ">
    <van-nav-bar
        class="page-nav-bar"
        title="设置"
        left-arrow
        @click-left="$router.push('./my')"/>

    <div class="a" style="margin-top:30px">
      <van-cell-group inset >
        <van-cell title="头像" @click="showPopup" is-link>
          <van-image
              class="avatar"
              fit="cover"
              src=""
          />
        </van-cell>
        <!--        $router.push('./modifyId')-->
        <van-cell title="账号名" :value="this.user.userName"  is-link @click="$router.push({path: './modifyId',query: {userName:user.userName}})"/>
        <!--        $router.push('./modifyGender')-->
        <van-cell title="性别" :value="this.user.sex" is-link @click="$router.push({path: './modifyGender',query: {sex:user.sex}})"/>
        <van-cell title="邮箱名" :value="this.user.email"  />
        <!--        $router.push('./modifyPhone')-->
        <van-cell title="手机号" :value="this.user.phoneNumber" is-link @click="$router.push({path: './modifyPhone',query: {phoneNumber:user.phoneNumber}})"/>
        <van-cell title="修改密码"  is-link @click="$router.push('./modifyPassword')"/>
        <!-- <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" /> -->
      </van-cell-group>
      <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }">
        <div class="clickBtn" @click="goToFilm('camera')">拍照</div>
        <div class="clickBtn" @click="goToFilm('album')">从手机相册选择</div>

      </van-popup>
    </div>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

  </div>

</template>

<script>
import request from "@/request";
import store from "../../store";

export default {
  name:"UserProfile",
  components:{},
  props:{},
  data() {
    return{
      show: false,
      userId:'',
      user: {
        userName: '',
        sex: '',
        email:'',
        phoneNumber:'',
        password:'',

      },
    }
  },
  methods:{
    showPopup() {
      this.show = true;
    },
    getData() {
      request.get("/mypage/userset/"+this.userId
      ).then(res => {
        if (res.flag) {
          console.log(res.data + "你好")
          this.user = res.data
        } else {
          alert("res.msg");
        }
      })
    },
  },
  computed:{},
  watch:{},
  created() {
    this.userId=store.getters.getuserId
    this.getData()
  },
  mouted () {},
}
</script>

<style scoped lang="less">
.user-profile {

  .avatar {
    width: 60px;
    height: 60px;
  }
}
.van-cell {
  background-color: lightgrey;
  text-align:left;
  padding-left: 30px;
}
.clickBtn {

  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
}
</style>
