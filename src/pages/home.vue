<template>
  <div id="home">
    <img :src="bannerImg" class="banner">
    <div class="navBox">
    <ul class="nav-list">
        <li class="nav-item" @click="jump('about')">
            <span class="icon-item icon-item-home"></span>
            <p>公司简介</p>
        </li>
        <li class="nav-item" @click="jump('productList')">
            <span class="icon-item icon-item-product"></span>
            <p>产品中心</p>
        </li>
        <li class="nav-item" @click="jump('contact')">
            <span class="icon-item icon-item-contact"></span>
            <p>联系我们</p>
        </li>
    </ul>
    </div>
    <p class="copyRight">小鸟工业云 点我制作同样出彩的3D手册</p>
  </div>
</template>

<script>
export default {
    data(){
      return {
        bannerImg:'./dist/Ican-bar.jpg'
      }
    },
    methods:{
        jump: function(hash){
            this.$router.push(hash);
        }
    }
};
</script>

<style>
    #home{
        background-color:rgb(161, 1, 0);
        width: 100%;
        height: 100%;
        position: relative;
    }
    .navBox{
        margin: 10px;
    }
    .nav-list{
        overflow:hidden;
        padding: 0 6%;
    }
    .nav-item{
        display: inline-block;
        padding: 20px 10px;
        background-color: #fff;
        border-radius: 5px;
        width:45%;
        margin: 20px 2% 0;
        text-align: center;
        color: rgb(215, 53, 57);
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .nav-item p{
        line-height: 1;
        margin-top: 10px;
    }
    .icon-item{
        display: inline-block;
        width: 25px;
        height: 25px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .icon-item-home{
        background-image: url(/dist/Ican-01.png);
    }
    .icon-item-product{
        background-image: url(/dist/Ican-02.png);
    }
    .icon-item-contact{
        background-image: url(/dist/Ican-04.png);
    }
    .copyRight{
        position: absolute;
        bottom: 30px;
        text-align: center;
        color: white;
        font-size: 12px;
        width: 100%;
    }
</style>