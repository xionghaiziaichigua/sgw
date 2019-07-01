<template>
    <div class="header">
        <item
        v-for='meg in megs'
        :key = meg.id
        :mark='meg.mark'
        :type='seltype'
        :txt='meg.txt'
        :icon='meg.icon'
        :img='meg.img'
        :mynew='meg.new'
        :isimg='meg.isimg'
        :istxt='meg.istxt'
        :isicon='meg.isicon'
        ></item>
    </div>
</template>

<script>
import item from './Item'
export default {
    data(){
        return {
            seltype:this.$route.name,
            megs:[
                {id:1,mark:'home',txt:'',img:require('../../assets/logo_mtime.png'),icon:'',new:'',isimg:true,istxt:false,isicon:false},
                {id:2,mark:'home',txt:'首页',img:"",icon:'',new:'',isimg:false,istxt:true,isicon:false},
                {id:3,mark:'shopping',txt:'购票',img:"",icon:'',new:'',isimg:false,istxt:true,isicon:false},
                {id:4,mark:'buy',txt:'商城',img:"",icon:'',new:'NEW',isimg:false,istxt:true,isicon:false},
                {id:5,mark:'find',txt:'发现',img:"",icon:'',new:'',isimg:false,istxt:true,isicon:false},
                {id:6,mark:'mine',txt:'',img:"",icon:'fa fa-user-circle',new:'',isimg:false,istxt:false,isicon:true},
            ]
        }
    },
    components:{
        item
    }
    
}
</script>

<style lang='scss'>
    .header{
        width: 100%;
        height: 50px;
        background:#333;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
