<template>
    <div class="upcoming">
        <p>
            即将上映(
            <span>58</span>
            部)
        </p>
        <i class='fa fa-angle-right'></i>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .upcoming{
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #d8d8d8;
        margin: 0 auto;
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
</style>
