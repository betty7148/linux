import VueRouter from 'vue-router'

import home from "./components/homeContainer.vue";
import message from "./components/messageContainer.vue";
import search from "./components/searchContainer.vue";
import shopcar from "./components/shopcarContainer.vue";
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/message",component:message},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router