<template>

    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div 
            class="swiper-slide"
            v-for='banner in banners'
            :key='banner.id'
            >
                <img :src="banner.img" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        
    </div>

</template>

<script>
import Swiper from 'swiper'
       


export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        this.$http.get('/api/home/movies',{
            params:{
                page:1,
                limit:4
            }
        }).then((res)=>{
            this.banners= res.data.data.object_movies
            console.log(this.banners)
            this.$nextTick(()=>{
                new Swiper ('.banner', {
                     loop:true,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                }) 
            })
        })
    }
}
</script>

<style lang='scss'>
    .banner{
        padding-top: 5px;
        height: 2.2rem;
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
