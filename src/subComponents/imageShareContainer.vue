<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active' : '']" href="#"  v-for="(item) in imageCatelist" :key="item.id" @click="getimagelist(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

            <ul class="imglist">
                <li v-for="item in imagelist" :key="item.img_url">
                    <router-link :to="'/home/imgShare/'+item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h4>{{item.title}}</h4>
                        <p>{{item.zhaiyao}}</p>
                    </div> 
                    </router-link>
                </li>
                
            </ul>
    </div>
    
</template>

<script>
import { Toast } from 'mint-ui';
// import mui from "../lib/mui/js/mui.js"
import mui from "../main.js"
export default {
    data(){
        return{
            imageCatelist:[],
            imagelist:[]
        }
    },
    created(){
        this.getimageCatelist();
        this.getimagelist(0);
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getimageCatelist(){
            this.$http.get('api/getimgcategory').then((result)=>{
                if(result.body.status==0){
                    this.imageCatelist=result.body.message;
                    this.imageCatelist.unshift({
                        'id':0,
                        'title':"全部"
                    })
                }else{
                    return Toast('获取图片目录失败！');
                }
            })
        },
        getimagelist(id){
            this.$http.get('api/getimages/'+id).then((result)=>{
                
                if(result.body.status==0){
                    this.imagelist=result.body.message;
                }else{
                    return Toast('获取图片目录失败！');
                }
            })
        }
    }
}

</script>

<style>
*{
    touch-action: pan-y;
    padding:0px;
    margin:0px;
}
ul{
    padding:10px;
    margin:0px;
    list-style:none;
}
ul li{
    margin-bottom:10px;
    position: relative;
}
ul li img{
    width:100%;
    box-shadow: 0 0 6px #999;
    vertical-align: middle;
    /* min-height:90px; */
}
img[lazy=loading] {
  width: 100%;
  height: 300px;
  margin: auto;
}
.info{
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    color:white;
    bottom: 0px;
    vertical-align:middle; 
}
.info h4{
    color:white;
    font-size:14px;
    text-align: left;
}
/*注意 p标签之后会默认有一个间距*/
.info p{
    text-indent: 5px;
    color:white;
    font-size:10px;
    margin:0px;
    padding:0px;
}
</style>
