<template>
<div class="goodsinfo_content">
    <transition
        @before-enter="beforeEnter"
        @enter="Enter"
        @after-enter="afterEnter"
    >
    <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>

	<div class="mui-card">
		<lunbo :lunboarr="lunboarr" :isfull="false"></lunbo>
    </div>
    <div class="mui-card">
        <div class="mui-card-header">{{goodsinfo[0].title}}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                市场价：<span style="text-decoration: line-through">{{goodsinfo[0].market_price}}</span> 
                销售价：<span style="color:red">{{goodsinfo[0].sell_price}}</span>
                <numbox @getValue="getNumboxnum"></numbox>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="addToshopCar()">加入购物车</mt-button>
            </div>
        </div>
	</div>
    <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <p style="color:#ccc"> <span style="color:black">商品货号：</span>{{goodsinfo[0].goods_no}}</p>
                <p style="color:#ccc"><span style="color:black">库存情况：</span>{{goodsinfo[0].stock_quantity}}</p>
                <p style="color:#ccc"><span style="color:black">上架时间：</span>{{goodsinfo[0].add_time}}</p>
            </div>
        </div>
        <div class="mui-card-footer">
            <mt-button type="primary"  size="large" plain @click="goDesc(id)">图文介绍</mt-button>
            <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
      <br>
	</div>
            
</div>
</template>

<script>
import numbox from "../../commonComponents/numbox.vue";
import lunbo from "../../commonComponents/lunbo.vue"
export default {
    data(){
        return{
            lunboarr:[],
            id:this.$route.params.id,
            goodsinfo:[{'title':''}],
            ballflag:false,
            count:0
        }
    },
    created(){
      this.getLunbo();
      this.getGoodsInfo();
    },
    components:{
        numbox,
        lunbo
    },
    methods:{
      getLunbo(){
        this.$http.get("api/getthumimages/"+this.id).then(result =>{
        //   console.log(result);
          this.lunboarr=result.data.message;
        })
      },
      getGoodsInfo(){
        this.$http.get("api/goods/getinfo/"+this.id).then(result =>{
            if(result.data.status==0){
                this.goodsinfo=result.data.message;
            }
        })
      },
      goDesc(id){
        //   console.log(id);
          this.$router.push("/home/goodsBuy/goodsInfo/goodsDes/"+id);
      },
      goComment(id){
        //   console.log("id1:"+id);
          this.$router.push("/home/goodsBuy/goodsInfo/goodscomment/"+id);
      },
      addToshopCar(){
        this.ballflag = !this.ballflag;
        var goods={
            id:this.id,
            count:this.count,
            price:this.goodsinfo[0].sell_price,
            select:true
        }
        this.$store.commit('addToShopCar',goods);
      },
      beforeEnter(el){
          el.style.transform="translate(0,0)";
      },
      Enter(el,done){
          el.offsetWidth;
          var ballobj=this.$refs.ball.getBoundingClientRect();
          var iconobj=document.getElementById("icon").getBoundingClientRect();
          var x=iconobj.left-ballobj.left;
          var y=iconobj.top-ballobj.top;
        //   console.log(x+" "+y);
          el.style.transform=`translate(${x}px,${y}px)`;
          el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
          done();
      },
      afterEnter(el){
          this.ballflag=!this.ballflag;
      },
      getNumboxnum(count){
          //这个函数由numbox子组件调用，并会传递一个count，这个count就是我们要加入购物车的数量
          this.count=count;
          console.log("count:"+count)
      }
    }
}
</script>

<style>
body{
    background-color: #eee;
}

.mui-card-footer {
    display: block;
}
.mui-card-footer button{
    margin-bottom: 10px;
}
.ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 395px;
    left: 146px;
  }
</style>
