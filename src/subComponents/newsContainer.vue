<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='(item) in newlist' :key='item.id'>
					<router-link :to="'/home/getnewslist/'+item.id">
						<img class="mui-media-object mui-pull-left" :src='item.img_url'>
						<div class="mui-media-body">
							<h4>{{item.title}}</h4>
							<p class='mui-ellipsis'>
                                <span>
                                    发表时间&nbsp;&nbsp;{{item.add_time|dateFormat(item.add_time)}}
                                </span>
                                <span>点击次数&nbsp;&nbsp;{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>

export default {

    data(){
        return{
            newlist:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get("api/getnewslist").then(function(data){
                
                this.newlist=data.data.message;
                console.log(data.data.message);
            })
        }
    }
}
</script>

<style>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    font-size:12px;
    color:#26a2ff;
}
</style>

