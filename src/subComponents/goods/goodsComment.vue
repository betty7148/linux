<template>
    <comment :id="this.$route.params.id"></comment>
</template>

<script>
import comment from "../../commonComponents/commentContainer.vue"
export default {
    props:["id"],
    components:{
        comment
    }
}
</script>

<style>

</style>
