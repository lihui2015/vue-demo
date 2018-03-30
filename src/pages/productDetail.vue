<template>
  <div id="detail" class="container">
    <myHeader message="产品详情"></myHeader>
    <div class="content">
        <flexbox class="tabList">
            <flexbox-item>
                <div class="tab" :class="{active: tabIndex == 0}" @click="tabClick(0)">3D展示</div>
            </flexbox-item>
            <flexbox-item>
                <div class="tab" :class="{active: tabIndex == 1}" @click="tabClick(1)">外观图片</div>
            </flexbox-item>
            <flexbox-item>
                <div class="tab" :class="{active: tabIndex == 2}" @click="tabClick(2)">产品尺寸</div>
            </flexbox-item>
        </flexbox>
        <div class="product-article">
            <div class="imgBox" :class="{active: tabIndex == 0}" @click="enter3DDetail">
                <iframe class="threeD" :src="threeDSrc" allowfullscreen frameborder="0" scrolling="no">
                </iframe>
            </div>
            <div class="imgBox" :class="{active: tabIndex != 0}">
                <img :src="src" class="preview-img previewer-demo-img"/>
            </div>
            <div class="product-detail">
                <div class="product-paragraph">
                    <p class="paragraph-tag">{{titles.title}}</p>
                    <p class="paragraph-text">{{titles.detail}}</p>
                </div>
                <div class="product-paragraph">
                    <p class="paragraph-tag">{{imageTitles[0]}}</p>
                    <img :src="detailImages[0]" class="detail-img  previewer-demo-img"/>
                </div>
                <div class="product-paragraph">
                    <p class="paragraph-tag">{{imageTitles[1]}}</p>
                    <img :src="detailImages[1]" class="detail-img  previewer-demo-img"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'

import Flexbox from 'vux/src/components/flexbox/flexbox.vue'
import FlexboxItem from 'vux/src/components/flexbox/flexbox-item.vue'
import { Previewer, TransferDom } from 'vux'

import event from '../js/Event'

export default {
    components: {
        myHeader,
        Flexbox,
        FlexboxItem
    },
    data () {
        return {
            planimg: '',
            sizeimg: '',
            src: '',
            detailImages: [],
            tabIndex: 0,
            previewerlist: []
        }
    },
    computed: {
        titles(){
            if (this.$route.params.index === '1') {
                return { title: '主要用途', detail: 'A48型弹簧全启式安全阀，适用于≤300°C的蒸汽、空气以及其它非腐蚀介质的设备和管道上,当介质压力达到规定的开启压力时,阀门自动开启(开启高度不小于1/4do),继而全量排放，当压力降至规定的回座压力时，阀门则自动关闭，以保证设备和管道的安全运行。' }
            } else if (this.$route.params.index === '2') {
                return { title: '主要用途', detail: 'A42型弹簧全启式安全阀，适用于≤300°C的空气以及其它非易燃易爆，无腐蚀性气体等介质的设备和管道上，当介质压力达到规定的开启压力时，阀门自动开启(开启高度不小于1/4do),继而全量排放，当压力降至规定的回座压力时阀门则自动关闭，以保证设备和管道的安全运行。' }
            } else if (this.$route.params.index === '3') {
                return { title: '主要用途', detail: 'A47型弹簧微启式安全阀，适用于≤300°C的水、空气以及其它非腐蚀介质的设备和管道上，当介质压力达到规定的开启压力时，阀门自动开启(开启高度不小于1/20do),继而全量排放，当压力降至规定的回座压力时，阀门则自动关闭，以保证设备和管道的安全运行。\n注: A47型安全阀排放时从阀盖窗口处向外溢水，应根据现场情况慎重选择。' }
            } else if (this.$route.params.index === '4') {
                return { title: '主要用途', detail: 'A41型弹簧微启式安全阀，适用于≤300°C的水、空气以及其它非腐蚀液体等介质的设备和管道上，当介质压力达到规定的开启压力时，阀门自动开启(开启高度不小于1/20d)，继而全量排放，当压力降至规定的回座压力时，阀门则自动关闭，以保证设备和管道的安全运行。' }
            } else if (this.$route.params.index === '5') {
                return { title: '主要用途', detail: 'A48Y-C型适用于工作温度≤300°C的蒸汽空气等介质的设备和管路上。\nA48Y-P/R型适用于工作温度≤200°C有腐蚀性介质的设备和管路上。\n连接法兰标准GB/T9113,HG20592' }
            } else if (this.$route.params.index === '6') {
                return { title: '主要用途', detail: 'A47H/Y-C型适用于工作温度≤300°C的水、空气等介质的设备或管路上。\nA47H/Y-P/R型适用于工作温度≤200°C的腐蚀性介质的设备或管路上。作为超压保护装置。\n连接法兰标准按GB/T9113,HG20592。' }
            }
            return [];
        },
        imageTitles() {
            if (this.$route.params.index === '5' || this.$route.params.index === '6') {
                return ['主要零部件材料', '主要连接尺寸及外形尺寸'];
            } else {
                return ['主要性能规范', '主要连接尺寸及外形尺寸'];
            }
            return ['',''];
        },
        threeDSrc() {
            return './threeDSrc.html';
        }
    },
    mounted() {
        this.planimg = require('../assets/images/xilie1/xilie1-' + this.$route.params.index + '.jpg')
        this.sizeimg = require('../assets/images/xilie1/xilie1-' + this.$route.params.index + '-1.jpg');
        for (var i = 0; i < 2; i++) {
            this.detailImages.push(require('../assets/images/xilie1/xilie1-' + this.$route.params.index + '-' + (i + 2) + '.jpg'));
        }
        this.src = this.planimg;
    },
    methods: {
        tabClick(index){
            this.tabIndex = index;
            if (this.tabIndex === 0) { 
                return 
            }else if (this.tabIndex === 1) {
                this.src = this.planimg;
            } else {
                this.src = this.sizeimg;
            }
            this.perviewImage(this.src);
        },
        perviewImage(src) {
            var _self = this;
            _self.previewerlist = [{
                src: src
            }];
            event.$emit('previewerAction', { list: _self.previewerlist, index: 0 });
        },
        enter3DDetail() {
            this.$router.push({
            path: "/tdpreview/"
            })
        },
        show(index){
            this.$refs.previewer.show(index)
        }
    }
};
</script>

<style>
    #detail.container{
        padding-left: 0;
        padding-right: 0;
    }
    .tabList{
        background-color: rgb(241, 242, 243);
        font-size: 0;
        width: 100%;
        border-bottom: 2px solid rgb(217, 217, 217);
    }
    .tabList .tab{
        text-align: center;
        font-size: 18px;
        height: 42px;
        line-height: 42px;
        color: #000;
    }
    .tabList .tab.active{
        color: rgb(234, 115, 31);
        border-bottom: 2px solid rgb(234, 115, 31);
    }
    .product-article{}
    .product-article .imgBox{
        text-align: center;
        height: 35vh;
        border-bottom: 0.5px solid rgb(217, 217, 217);
        overflow: hidden;
        padding: 1px 0;
        display: none;
        position: relative;
    }
    .product-article .imgBox.active{
        display: block;
    }
    .threeD{
        width: 100%;
        height: 100%;
        display: block;
    }
    .product-article .preview-img{
        display: inline-block;
        height: 100%;
    }
    .product-detail{
        margin: 15px;
    }
    .product-paragraph + .product-paragraph{
        margin-top: 15px;
    }
    .paragraph-tag{
        color: #fff;
        font-size: 18px;
        line-height: 1.6;
        padding: 3px 10px;
        margin-bottom: 10px;
        text-align: center;
        display: inline-block;
        background-color: rgb(234, 115, 31);
    }
    .paragraph-text{
        font-size: 15px;
        text-align: left;
        line-height: 1.6;
    }
    .detail-img{
        width: 100%;
    }
</style>