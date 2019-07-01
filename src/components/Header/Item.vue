<template>
    <div class="item" @click='change'>
        <div class="imgbox" v-show='isimg'>
            <img :src="img" alt="">
        </div>
        <div class="txtbox" v-show='istxt'>
            <span 
            :class="{active:flag}"
            >{{txt}}</span>
            <em>{{mynew}}</em>
        </div>
        <div class="ibox" v-show='isicon'>
            <i :class='icon'></i>
        </div>
    </div>
</template>

<script>
export default {
    props:['txt','mark','icon','img','type','mynew','isicon','isimg','istxt'],
    computed:{
        flag(){
            if(this.type === this.mark){
                return true
            }
            return false
        }
    },
    methods:{
        change(){
            this.$router.push('/'+this.mark)
        }
    }
}
</script>
    
<style lang='scss'>
    .item{
        .imgbox{
            padding-left: 10px;
            img{
                width:5.6em;
                height:1.8em;
            }
        }
        .txtbox{
            display: flex;
            position: relative;
            color: #bbb;
            span{
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                   
                    height: 3px;
                    width: 30px;
                    left: -1px;
                    top: 31px;
                }
            }
            .active{
                color:#fff;
                &::after{
                     background: #fff;
                }
            }
            em{
                position: absolute;
                font-size: 10px;
                right: -28px;
                top: -10px;
                background: red;
                border-radius: 6px;
                color: #fff;
            }
        }
        .ibox{
            display: flex;
            justify-content: center;
            font-size: 30px;
            padding-right: 5px;
            color:#fff;
        }
    }
</style>
