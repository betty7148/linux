import Vue from 'vue';
import Mint from 'mint-ui';

import './lib/mui/css/mui.css';
import "./lib/mui/css/icons-extra.css"

//顶部
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//滑动栏
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//按钮
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
//懒加载
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import app from './App.vue';

//路由
import routerVue from 'vue-router'
import router from "./router.js"

Vue.use(routerVue);

//vue-resource 发起http请求
import VueResource from 'vue-resource'
Vue.use(VueResource);


//缩略图
import VuePreview from 'vue-preview';
Vue.use(VuePreview)


//设置接口根路径
Vue.http.options.root="http://www.liulongbin.top:3005";
var vue=new Vue({
    el:"#app",
    render: c => c(app),
    // router
    router
})

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//设置全局过滤器
Vue.filter('dateFormat', function (time, pattern = "") {
    var dateform = new Date(time);
    var yy = dateform.getFullYear();
    var mm = dateform.getMonth()+1;
    mm=mm<10?"0"+mm:mm;
    var dd = dateform.getDate()<10?"0"+dateform.getDate():dateform.getDate();
    if (pattern.toLowerCase() == 'yyyy-mm-dd') {
        //注意这里不是'' 而是tab上面的``
        return `${yy}-${mm}-${dd}`;
    } else {
        var hh = dateform.getHours()<10?"0"+dateform.getHours():dateform.getHours();
        var se = dateform.getMinutes()<10?"0"+dateform.getMinutes():dateform.getMinutes();
        var ss = dateform.getSeconds()<10?"0"+dateform.getSeconds():dateform.getSeconds();
        return `${yy}-${mm}-${dd} ${hh}:${se}:${ss}`;
    }
})

Vue.filter('contentFormat',function(content){
    if(content=='undefined'){
        return '该用户很懒，没有留下任何评论'
    }
    else return content;
})

