<template>
<div style="margin:10px 0px">购买数量：
   <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='100'>
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input class="mui-numbox-input" type="number" value="1"  @change="getValue" ref="numbox"/>
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</div>

      
</template>

<script>
//如果引入两个js文件 会产生一次点击 两次事件函数
import mui from "../lib/mui/js/mui.min.js";
export default {
    data(){
        return{

        }
    },
    props:['max'],
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods:{
        getValue(){
            console.log(this.$refs.numbox.value);
            this.$emit('getValue',Number.parseInt(this.$refs.numbox.value));
        }
    },
    watch:{
        max:function(newval,oldvalue){
            mui(".mui-numbox").numbox().setOption("max", newval);
        }
    }

}
</script>

<style>

</style>
