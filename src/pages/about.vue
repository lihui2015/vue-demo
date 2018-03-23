<template>
    
  <div id="about" class="container">
  <myHeader message="公司简介"></myHeader>
  <div class="content">
    <img v-for="img in imgList" :src="img" class="about-img" />
  </div>
    
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
export default {
    components: {
        myHeader
    },
    data () {
        return {
            imgList: []
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.imgList = [];
            for(var i = 1; i < 28; i++){
                this.imgList.push(require('../assets/images/company/company' + i + '.jpg'))
            }
        }
    }
};
</script>

<style>
    .about-img{
        display: block;
        width: 100%;
    }
</style>