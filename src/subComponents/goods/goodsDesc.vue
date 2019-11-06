<template>
    <div id="content">
        <h4 style="color:#007aff;font-size:14px">{{goodsdesc[0].title}}</h4>
        <hr>
        <div v-html="goodsdesc[0].content" ></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            goodsdesc:[{'title':''}],
        }
    },
    created(){
      this.getGoodsDesc();
    },
    methods:{
      getGoodsDesc(){
        this.$http.get("api/goods/getdesc/"+this.id).then(result =>{
            if(result.data.status==0){
                this.goodsdesc=result.data.message;
            }
        })
      }
    }
}
</script>

<style>
#content{
    background-color: white;
    
}
#content p{
        font-size:12px;
    }
#content img{
    width:100%;
}
</style>
