<template>
    <div class="hotmovies">
        <div class="loading" v-show='!movies'>
           <img src="../../assets/loading.gif" alt="">
       </div>
        <div class="nav">
            <p>
                正在热映&nbsp;&nbsp;(
                <span>{{total}}</span>
                部）
            </p>
            <i class='fa fa-angle-right'></i>
        </div>

        <div class="itembox">
                <movieitem
                v-for='movie in movies'
                :key='movie.id'
                :movie='movie'
                ></movieitem>
        </div>
       
    </div>
    
</template>

<script>
import movieitem from './Hotmovie_item'


export default {
    components:{
        movieitem
    },
    data(){
        return {
            movies:[],
            total:0
        }
    },
    created(){
        this.$http.get('/api/home/movies',{
            params:{
                page:1,
                limit:8
            }
        }).then((res)=>{
            this.movies = res.data.data.object_movies
            this.total = res.data.data.total
        })
    }
}
</script>

<style lang='scss'>
    .hotmovies{
        padding: 0 .2rem;
        height: 395px;
        .loading{
            width: 1.3rem;
            margin: 0 auto;
        }
        .nav{
            display: flex;
            justify-content:space-between;
            align-items: center;
            margin-top: 10px;
            margin-bottom: 5px;
            p{
                font-size: 1.3em;
                font-weight: bold;
                color: #333;
            }
            i{
                font-size: 30px;
                color: #ccc;
            }
        }
       .itembox{
           float:left;
       }
    }
</style>
