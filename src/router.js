import VueRouter from 'vue-router'

import home from "./components/homeContainer.vue";
import message from "./components/messageContainer.vue";
import search from "./components/searchContainer.vue";
import shopcar from "./components/shopcarContainer.vue";

import news from "./subComponents/newsContainer.vue";
import newsinfo from "./subComponents/newsInfoContainer.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/message",component:message},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
    {path:"/home/getNews",component:news},
    {path:"/home/getnewslist/:id",component:newsinfo}
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router