<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要留言的内容" v-model="message" ></textarea>
        <mt-button  type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment_cotent">
            <div v-for="(item, i) in commentlist" :key='i'>
                <p class="bg_gray">第{{i+1}}楼&nbsp;&nbsp; 用户:{{item.user_name}} &nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}</p>
                <p>{{item.content|contentFormat}}</p>
            </div>
        </div>
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
            pageindex:1,
            commentlist:[],
            message:''
        }
    },
    props:["id"],
    created(){
        this.getComment();
    },
    methods:{
        getComment(){
            console.log("id:"+this.id);
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then((result)=>{
                if(result.data.status==1)return result.data.message;
                else{
                    this.commentlist =this.commentlist.concat(result.data.message);
                }
                // console.log(this.commentlist);
            })
        },
        getMore(){
            this.pageindex=this.pageindex+1;
            this.getComment();
        },
        postComment(){
            if(this.message.trim().length==0){
                return Toast('评论内容不能为空！');
            }
            this.$http.post('api/postcomment/'+this.id,{
                    content: this.message.trim()
                }).then((result)=>{
                    // console.log(result);
                    if(result.body.status==0){
                        var newcomment={
                            add_time:Date.now(),
                            content:this.message.trim(),
                            user_name: "匿名用户",
                        }
                        this.commentlist.unshift(newcomment);
                    }
            })
        }
    }
}
</script>

<style>
textarea{
    height:100px;
}
.bg_gray{
    background-color: #ddd;
}
.bg_gray +p{
    text-indent: 20px;
}
.comment_cotent{
    margin-top:10px;
}

</style>
