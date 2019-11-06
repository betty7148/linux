<template>
    <mt-swipe :auto="4000" class="swip" >
        <mt-swipe-item v-for="(item) in lunboarr" :key='item.src'><img :src='item.src' :class="{'full':isfull}"></mt-swipe-item>
    </mt-swipe>
</template>

<script>

export default {
    props:['lunboarr','isfull']
}
</script>

<style>
.swip{
  height:200px;
  text-align: center;
}
.swip img{
    height:100%;
}
.swip .full{
    width:100%;
    height:200px;
}

</style>
