<template>
    <div class="hotitem">
        <div class="imgbox">
            <img :src="hot.img" alt="">

        </div>
        <div class="hotdesc">
            <h2>{{hot.title}}</h2>
            <p><span>{{hot.desc}}</span></p>
            <span>2019-05-07 16:57:00</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['hot']
}
</script>

<style lang='scss' scoped>
    .hotitem{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        .imgbox{
            margin-right: 1em;
            width: 11.2em;
            height: 96px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .hotdesc{
            padding: 0 0 .4em 0;
            h2{
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            span{
                font-size: 14px;
                padding-bottom: 10px;
            }
        }
    }
</style>
