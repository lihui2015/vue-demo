<template>
  <div id="preview" class="container">
  <myHeader message="预览"></myHeader>
  <div class="content">
        <iframe :src="threeDSrc" allowfullscreen style="position: absolute; top: 0px; left: 0px; height: 100%;background-color: #ececec;width:100%;" frameborder="0" scrolling="no">
        </iframe>
  </div>
    
  </div>
</template>

<script>
import myHeader from '../components/header.vue'

export default {
  name: 'tdpreview',
  components: {
    myHeader
  },
  computed: {
    threeDSrc() {
      return './dist/threeDSrc.html'
    }
  },
  data() {
    return {}
  }

}
</script>

<style>
  #preview.container{
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    height: 100%;
  }
  #preview .content{
    position: relative;
    background-color: #ececec;
    width: 100%;
    height: 100%;
  }
</style>