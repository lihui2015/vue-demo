<template>
  <div id="contact" class="container">
    <myHeader message="联系我们"></myHeader>
    <img :src="banner" class="banner"/>
    <div class="content">
        <p class="contact-dt">
            <span class="contact-icon contact-icon-name"></span>
            <span class="contact-dt-text">公司名称</span>
        </p>
        <p class="contact-dd">海辉智慧制造集团</p>
        <p class="contact-dt">
            <span class="contact-icon contact-icon-web"></span>
            <span class="contact-dt-text">网址</span>
        </p>
        <a class="contact-dd dark-blue" href="http://www.haihui.com" target="_blank">www.haihui.com</a>
        <p class="contact-dt">
            <span class="contact-icon contact-icon-tel"></span>
            <span class="contact-dt-text">招商服务热线</span>
        </p>
        <a href="tel:4006366616" class="contact-dd dark-blue">400-000-0000</a>
        <p class="contact-dt">
            <span class="contact-icon contact-icon-address"></span>
            <span class="contact-dt-text">地址</span>
        </p>
        <p class="contact-dd">江苏省无锡市新吴区震泽路18号</p>
    </div>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
import '../assets/images/contact/icon01.png'
import '../assets/images/contact/icon02.png'
import '../assets/images/contact/icon03.png'
import '../assets/images/contact/icon04.png'
export default {
    components: {
        myHeader
    },
    data () {
        return {
            banner: require('../assets/images/bar.jpg')
        }
    }
};
</script>

<style>
    #contact{
        padding-left: 0;
        padding-right: 0;
    }
    #contact .content{
        padding: 10px 20px 0;
    }
    .contact-dt{
        margin-top: 8px;
    }
    .contact-icon{
        display: inline-block;
        vertical-align:middle;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .contact-icon-name{
        background-image: url('../assets/images/contact/icon01.png');
    }
    .contact-icon-web{
        background-image: url('../assets/images/contact/icon02.png');
    }
    .contact-icon-tel{
        background-image: url('../assets/images/contact/icon03.png');
    }
    .contact-icon-address{
        background-image: url('../assets/images/contact/icon04.png');
    }
    .contact-dt-text{
        display: inline-block;
        vertical-align:middle;
        color: rgb(102, 102, 102);
        font-size: 15px;
        margin-left: 8px;
    }
    .contact-dd{
        color: rgb(0, 0, 0);
        font-size: 15px;
        margin: 5px 0 0 28px;
        line-height: 24px;
    }
    .dark-blue{
        color: rgb(43, 125, 181);
    }
</style>