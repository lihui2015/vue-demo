<template>
    <header class="header">
        <div class="header-left" @click="goBack">
            <span class="left-arrow"></span>
        </div>
        <div class="header-title">{{message}}</div>
    </header>
</template>

<style>
    .header{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color:rgb(234, 115, 31);
        padding: 3px 0;
    }
    .header-left{
        position: absolute;
        top: 14px;
        left: 18px;
        font-size: 14px;
        line-height: 21px;
        color: #ccc;
    }
    .left-arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        top: -5px;
        left: -5px;
    }
    .left-arrow:before{
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #fff;
        border-width: 1px 0 0 1px;
        -webkit-trasform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
    .header-title{
        height: 40px;
        margin: 0 88px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        line-height: 40px;
        color: #fff;
        text-align: center;
    }
</style>

<script>
    export default {
        props: ['message'],
        methods: {
            goBack: function(){
                this.$router.go(-1)
            }
        }
    }
</script>