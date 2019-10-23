<template>
    <div>
            <h4 class="title">{{imginfo[0].title}}</h4>
            <div class="fu_title">
                <span>&nbsp;发表时间:&nbsp;{{imginfo[0].add_time|dateFormat}}</span>
                <span>点击:&nbsp;{{imginfo[0].click}}次&nbsp;&nbsp;</span>
            </div>
            <hr>
            <vue-preview :slides="imgsuolue" @close="handleClose"></vue-preview>
            <div class="content" v-html="imginfo[0].content"></div>
            <!--评论组件-->
            <comment v-bind:artid="this.id"></comment>
            <br>
            <br>
            <br>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import comment from "./commentContainer.vue";
export default {
    data(){
        return{
            id:this.$route.params.id,
            imginfo:[],
            imgsuolue:[],
            // slide1: [
            //     {
            //         src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            //         msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            //         alt: 'picture1',
            //         title: 'Image Caption 1',
            //         w: 600,
            //         h: 400
            //     },
            //     {
            //         src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            //         msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            //         alt: 'picture2',
            //         title: 'Image Caption 2',
            //         w: 1200,
            //         h: 900
            //     }
            //     ]
        }
    },
    created(){
        this.getImageinfo();
        this.getImageSuolue();
    },
    components:{
        "comment":comment
    },
    methods:{
        getImageinfo(){
            this.$http.get('api/getimageInfo/'+this.id).then((result)=>{
                // console.dir(result.data);
                if(result.data.status!=0){
                    Toast('获取图片信息失败！')
                }
                else {
                    this.imginfo=result.data.message;
                }
            })
        },
        getImageSuolue(){
            this.$http.get('api/getthumimages/'+this.id).then((result)=>{
                if(result.data.status!=0){
                    Toast('获取缩略图失败！')
                }
                else {
                    this.imgsuolue=result.data.message;
                    this.imgsuolue.forEach(element => {
                        element.msrc=element.src;
                        element.w= 600;
                        element.h=400
                    });
                }
            })
        },
        handleClose () {
            console.log('close event')
        }
    }
}
</script>

<style>
    .title{
        color:#26a2ff;
        font-size:14px;
        margin:10px;
    }
    .fu_title{
        font-size:10px;
        display: flex;
        justify-content: space-between;
        color:rgb(110, 109, 109);
        margin-bottom:10px;
    }
    .content{
        margin:10px 0px;
        font-size:13px;
        text-indent: 5px;
        color: black;
    }
    figure{
        display: inline-block;
        width: 100px;
        height:100px;
        margin:10px 5px 5px 15px;
    }
    figure img{
        float: left;
        width: 100px;
        height:100px;
        margin: 0px;
    }
</style>
