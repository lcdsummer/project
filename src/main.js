import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import axios from 'axios'
import request from "./request";
import "./assets/css/icon/iconfont.css"
import store from "./store/index"
import './assets/css/icon/icon.css'

import { Button } from 'vant';
// import {Uploader} from 'vant';
// import {CellGroup} from 'vant';
// import {Tabbar} from 'vant';
import {Swipe} from "vant";
import {SwipeItem} from "vant";

import { Icon } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Divider } from 'vant';
import vant from './plugins/vant'
import { NavBar } from 'vant';
import { Popup } from 'vant';
import { Field } from 'vant';
import { Picker } from 'vant';
import { Image } from 'vant';
import { Stepper } from 'vant';

Vue.use(Stepper);
Vue.use(Image);
Vue.use(Picker);
Vue.use(Field);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(vant)
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(ElementUI);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);


Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);

// Vue.use(store);

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(ElementUI);

// 挂载到原型，可在全局使用
//Vue.prototype.axios = axios
Vue.prototype.request=request



// Vue.use(Uploader);
// Vue.use(CellGroup);
// Vue.use(Tabbar);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
