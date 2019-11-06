<template>
    <div>
        <h4>{{newslist.title}}</h4>
        <div class="dis_flex">
            <span> 发表时间&nbsp;&nbsp;{{newslist.add_time|dateFormat(newslist.add_time)}}</span>
            <span> 点击次数&nbsp;&nbsp;{{newslist.click}}</span>
        </div>
        <hr>
        <!--内容-->
        <div v-html="newslist.content"></div>
        <br>
        <!--评论组件-->
        <comment v-bind:id="this.id"></comment>
    </div>
</template>

<script>
import comment from "../commonComponents/commentContainer.vue";
export default {
    data(){
        return {
            newslist:[],
            id:this.$route.params.id
        }
    },
    // render:c => c(comment),
    components: {
    // 用来注册子组件的节点
        "comment": comment
    },
    created(){
        this.getNewslistByID();
    },
    methods:{
        getNewslistByID(){
            // console.log("111");
            this.$http.get("api/getnew/"+this.id).then((result)=>{
                this.newslist=result.data.message[0];
                // console.log(result.data.message[0]);
            })
        }
    }
}
</script>

<style>
body{
    background-color: white;
}
h4{
    color:red;
    margin:5px;
    font-size:16px;
    text-align: center;
}
.dis_flex{
    font-size:12px;
    display: flex;
    justify-content: space-between;
    color:#26a2ff;
}
</style>
