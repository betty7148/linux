import VueRouter from 'vue-router'

import home from "./components/homeContainer.vue";
import message from "./components/messageContainer.vue";
import search from "./components/searchContainer.vue";
import shopcar from "./components/shopcarContainer.vue";

import news from "./subComponents/newsContainer.vue";
import newsinfo from "./subComponents/newsInfoContainer.vue";

import image from "./subComponents/imageShareContainer.vue";
import imageinfo from "./subComponents/imageInfoContainer.vue";

import goods from "./subComponents/goodsContainer.vue";
// import imagelist from ""
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/message",component:message},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
    {path:"/home/getNews",component:news},
    {path:"/home/getnewslist/:id",component:newsinfo},
    {path:"/home/imgShare",component:image},
    {path:"/home/imgShare/:id",component:imageinfo},
    {path:"/home/goodsBuy",component:goods}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router