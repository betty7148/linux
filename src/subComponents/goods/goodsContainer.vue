<template>
    <div class="goodslist">
        <ul>
            <li v-for='(item) in goodslist' :key='item.id' @click="getDetail(item.id)">
                <img :src="item.img_url">
                <h4>{{item.title}}</h4>
                <div class="price">
                    <div>
                        <span>&nbsp;¥{{item.sell_price}}</span>&nbsp;&nbsp;&nbsp;
                        <span>{{item.market_price}}</span>
                    </div>
                    <div>
                        <span>&nbsp;热卖中</span>
                        <span>剩{{item.stock_quantity}}件</span>
                    </div>
                </div>
            </li>
        </ul>
       <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
       <br>
       <br>
       <br>
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            goodslist:[],
            number:1
        }
    },
    created(){
        this.getGoodList();
    },
    methods:{
        getGoodList(){
            this.$http.get("api/getgoods?pageindex="+this.number).then((result)=>{
                // console.log(result.data);
                if(result.data.status!=0){
                    Toast('商品列表信息获取失败！');
                }else{
                    console.dir(result.data.message);
                    this.goodslist=this.goodslist.concat(result.data.message);
                }
            })
        },
        getMore(){
            this.number=this.number+1;
            this.getGoodList();
        },
        getDetail(id){
            console.log("id:"+id);
            this.$router.push("/home/goodsBuy/goodsInfo/"+id);
        }
    }
}
</script>

<style>
.goodslist ul{
    padding:10px;
    margin:0px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    /* flex-direction: column; */
}
.goodslist li{
    width:48%;
    /* float: left; */
    /* margin:2px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 6px #ccc;
}
.goodslist li img{
    box-shadow:none;
    min-height: 170.39px;
    min-width: 170.39px;
}
.goodslist h4{
    font-size:12px;
    color: black;
    text-align: left;
}
.price{
    background-color: rgb(231, 230, 230);
}
.price div{
    padding:5px 0px;
}
.price div:nth-of-type(1) span:nth-of-type(1){
    font-size:14px;
    color: red;
}
.price div:nth-of-type(1) span:nth-of-type(2){
    color: #aaa;
    font-size:11px;
    text-decoration: line-through;
}
.price div:nth-of-type(2){
    display: flex;
    justify-content: space-between;
}
.price div:nth-of-type(2) span{
    color: #aaa;
    font-size:12px;
} 
</style>
