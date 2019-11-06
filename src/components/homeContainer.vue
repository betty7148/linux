<template>
<div class="clear_font">
      <lunbo :lunboarr="lunboarr" :isfull='true'></lunbo>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/getNews">
                  <img src="../images/menu1.png" alt="">
                  <div class="mui-media-body">新闻资讯</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imgShare">
                  <img src="../images/menu2.png" alt="">
                  <div class="mui-media-body">图片分享</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsBuy">
                  <img src="../images/menu3.png" alt="">
                  <div class="mui-media-body">商品购买</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/messageShow">
                  <img src="../images/menu4.png" alt="">
                  <div class="mui-media-body">留言反馈</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/videoShow">
                  <img src="../images/menu5.png" alt="">
                  <div class="mui-media-body">视频专区</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/connectUs">
                  <img src="../images/menu6.png" alt="">
                  <div class="mui-media-body">联系我们</div></router-link></li>
      </ul> 
		</div>
</div>
     
</template>
<script>
import lunbo from "../commonComponents/lunbo.vue"
export default {
    data(){
      return{
          lunboarr:[],
          isfull:true
      }
    },
    created(){
      this.getLunbo();
    },
    components:{
      lunbo
    },
    methods:{
      getLunbo(){
        this.$http.get("api/getlunbo").then(result =>{
          console.log(result.data.message);
          this.lunboarr=result.data.message;
          this.lunboarr.forEach(element => {
              element.src=element.img;
          });
        })
      }
    }
}
</script>
<style lang="scss" scoped>
.clear_font{
  font-size: 0px;
}
.mui-grid-view.mui-grid-9{
  background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}

.mui-content {
  margin-top:-20px;
}
.mui-content img{
  height:40px;
  width:40px;
  box-shadow:none;
}
</style>

