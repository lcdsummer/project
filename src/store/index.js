import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    // token: '',
    goodsId: '',
    businessId:'',
    userId:'',
}
const getters={
    getgoodsId(state){
        return state.goodsId
    },
    getbusinessId(state){
        return state.businessId
    },
    getuserId(state){
        return state.userId
    },

}
const mutations={
    setgoodsId(state, goodsId){
        state.goodsId = goodsId;
        localStorage.setItem("goodsId",goodsId);  //存储goodsId
    },
    setbusinessId(state, businessId){
        state.businessId = businessId;
        localStorage.setItem("businessId",businessId);  //存储businessId
    },
    setuserId(state, userId){
        state.userId = userId;
        localStorage.setItem("userId",userId);  //存储businessId
    },
    // setToken(state, token){
    //     state.token = token;
    //     localStorage.setItem("token",token);  //存储token
    // },
    resetState(state){
        state.goodsId = '';
        state.businessId = '';
        state.userId = '';
        // state.token = '';
        // localStorage.clear();        //清除token
    }
}
// const actions={
// }
// const modules={
// }


//2.创建对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,

})

export default store;