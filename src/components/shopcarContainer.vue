<template>
    <div>
        <div class="mui-card"  v-for="(item) in shopcarlist" :key='item.id'>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" >
                    <img :src="item[0].thumb_path" width="60px">
                    <div>
                        <h3>{{item[0].title}} </h3>
                        <p>{{item[0].sell_price}}
                            <numbox :id='item[0].id' :initValue='$store.getters.getGoodsCount[item[0].id]'></numbox>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../commonComponents/numbox_shopcar.vue'
export default {
    data(){
        return{
            shopcarlist:[]
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
        }
        
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>

</style>

