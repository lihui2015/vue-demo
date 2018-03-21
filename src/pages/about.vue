<template>
    
  <div id="about" class="container">
  <myHeader message="公司简介"></myHeader>
  <div class="content">
    <img v-for="n in 27" :src="img+n+'.jpg'" class="about-img" />
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
            img: '/dist/company/company',
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