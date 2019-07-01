<template>
        <router-link 
        to='hotmoviedesc'
        :movieId='movie.id'
        tag='div'
        class="hotitem">
            <div class="imgbox">
                <img :src="movie.img" alt="">
                <em>{{movie.r}}</em>
            </div>
            <p><span>{{movie.t}}</span></p>
        </router-link>

</template>

<script>
export default {
    props:['movie']
}
</script>

<style lang='scss' scoped>
    .hotitem{
        height: 13em;
        width: 5.65em;
        margin: 0 2px;
        float: left;
        .imgbox{
            position: relative;
            height: 114px;
            
            margin: auto;
            img{
                width: 100%;
                height: 100%;
            }
            em{
                position: absolute;
                right:0;
                top: 3px;
                background: #659d0e;
                color: #fff;
                display: block;
                width: 2em;
                height: 1.6em;
                text-align: center;
                line-height: 1.8em;
            }
        }
        p{
            padding: .5em 0 0;
            width: 6em;
            margin-bottom: 1em;
            height: 3.8em;
            overflow: hidden;
            span{
                font-size: 1.15em;
                line-height: 1.2;
                text-align: center;
                box-sizing: border-box;
                display: block;
                color:#333;
            }
        }
    }
</style>
