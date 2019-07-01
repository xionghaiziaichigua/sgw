<template>
    <div class="backtop">
        <i class="fa fa-arrow-up"></i>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .backtop{
        position: fixed;
        right: .2rem;
        bottom: .8rem;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 60px;
        background: rgba(0,0,0,.5);
        i{
            font-size: 30px;
            color: #fff;
        }
    }
</style>
