<template>
    <div>
        <div class="mui-card"  v-for="(item,index) in shopcarlist" :key='item.id'>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" >
                    <mt-switch v-model="$store.getters.getGoodsSelected[item[0].id]"
                        @change='setChange(item[0].id,$store.getters.getGoodsSelected[item[0].id])'></mt-switch>
                    <img :src="item[0].thumb_path" width="60px">
                    <div>
                        <h3>{{item[0].title}} </h3>
                        <p><span>¥{{item[0].sell_price}}</span>
                            <numbox :id='item[0].id' :initValue='$store.getters.getGoodsCount[item[0].id]'></numbox>
                        </p>
                        <a @click.prevent='remove(item[0],index)'>删除</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner normal" >
                    <p>总计：不含运费：</p>
                    <div>已勾选商品<span>{{$store.getters.getTotalCount}}</span>件，总价：<span>¥{{$store.getters.getTotalPrice}}</span></div>
                </div>
                <mt-button type="danger" size="normal">去结算</mt-button>
            </div>
        </div>
        <br>
        <br>
    </div>
    
</template>
<script>
import numbox from '../commonComponents/numbox_shopcar.vue'

export default {
    data(){
        return{
            shopcarlist:[],
        }
    },
    created(){
        var shopcar=JSON.parse(localStorage.getItem('shopcar')||'[]');
        // console.log(shopcar);
        shopcar.forEach(element => {
            this.getShopCarInfo(element.id);
        });
    },
    methods:{
        getShopCarInfo(id){
            this.$http.get("api/goods/getshopcarlist/"+id).then(result =>{
                // console.dir(result);
                if(result.data.status==0){
                    this.shopcarlist.push(result.data.message);
                }
                console.dir(this.shopcarlist);
            })
        },
        getInitCount(id){
            var aa=this.$store.commit('getCountById',id);
            console.log("初始值"+aa);
        },
        remove(goods,index){
            this.shopcarlist.splice(index,1);
            this.$store.commit("deleteShopCar",goods);
        },
        setChange(id,select){
            this.$store.commit('setGoodsSelected',{id:id,select:select});
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>

.mui-card-content-inner{
    margin:0px;
    padding:10px;
    display: flex;
    justify-content: space-between;
    img{
        // float: left;
        margin:0px 4px;
        flex:3;
        height:70%;
        width:20%;
    }
    div{
        flex:10;
    }
    h3{
        font-size:14px;
    }
    p {
       font-size:16px;
        display: flex;
        justify-content: space-between;
        
    }
    p >span{
         color:red;
        margin-right: 4px;
        vertical-align: middle;
    }
}
.normal{
    display: block;
    color:gray;
    div>span{
        color:red;
    }
   
}
.mint-button{
        position: absolute;
        right:10px;
        top:10px;
}
</style>

