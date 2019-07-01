<template>
    <div class="home">
       <myHeader></myHeader>
       <banner></banner>
       <hotmovies></hotmovies>
       <upcoming></upcoming>
       <todayitem></todayitem>
       <backtop 
       v-show='isshow'
       v-reset></backtop>
    </div>
</template>

<script>
import myHeader from '@/components/Header/Header'
import hotmovies from './Hotmovies'
import banner from '@/components/Banner/Banner'
import upcoming from './movies_upcoming'
import todayitem from './Todayhot'
import backtop  from '@/components/Backtop/Backtop'
export default {
    name:'home',
    components:{
       myHeader,hotmovies,banner,upcoming,todayitem,backtop
    },
    data(){
        return {
            top:0,
            isshow:false,
            recordtop:0
        }
    },
    created(){
        console.log(this)
    },
    methods:{
        changetop(e){
            this.top = document.documentElement.scrollTop || document.body.scrollTop
            if(this.top >= 250 && !this.isshow){
                this.isshow = true;
            }else if(this.top <= 250 && this.isshow){
                this.isshow = false
            }
           
        }
    },
    activated(){
        console.log(this)
        window.scrollTo(0,this.recordtop)
        window.addEventListener('scroll',this.changetop)
    },
    deactivated(){
       this.recordtop = this.top
       window.removeEventListener('scroll',this.changetop)
    }
}
</script>

<style lang='scss'>
    
</style>
