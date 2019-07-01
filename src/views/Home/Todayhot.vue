<template>
    <div class="todayhot">
        <div class="today_hot">
            <div>今日热点</div>
        </div>
        <hotitem
        v-for ='hot in todayhots'
        :key='hot.id'
        :hot='hot'
        ></hotitem>
    </div>
</template>

<script>
import hotitem from './Hot_item'
export default {
    components:{
        hotitem
    },
    data(){
        return {
            todayhots:[]
        }
    },
    created(){
        this.$http.get('/api/home/hots').then((res)=>{
            this.todayhots = res.data.data.object_hots

            console.log(this.todayhots)
        })
    }
}
</script>

<style lang='scss'>
    .todayhot{
        width: 90%;
        margin: 0 auto;
        .today_hot{
            font-size: 1.3em;
            font-weight: bold;
            color: #333;
            height: 40px;
           line-height: 40px;
        }
    }
</style>
