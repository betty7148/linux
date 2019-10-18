import Vue from 'vue';
import Mint from 'mint-ui';

// 2.1 导入 vue-resource
// import VueResource from 'vue-resource'
// // 2.2 安装 vue-resource
// Vue.use(VueResource)


import './lib/mui/css/mui.css';
import "./lib/mui/css/icons-extra.css"

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from './App.vue';

//路由
import routerVue from 'vue-router'
import router from "./router.js"

Vue.use(routerVue);

//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

var vue=new Vue({
    el:"#app",
    render: c => c(app),
    // router
    router
})