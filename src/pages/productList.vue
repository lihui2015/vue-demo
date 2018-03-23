<template>
  <div id="product" class="container">
  <myHeader message="产品中心"></myHeader>
  <div class="content">
    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 46px;">
    <div v-for="(item, index) in items" class="product-item" @click="jump('productDetail/' + (index + 1))">
      <img class="product-img" :src="item.src"/>
      <p class="product-title">{{item.title}}</p>
    </div>
  </scroller>
  </div>
    
  </div>
</template>

<script>
import myHeader from '../components/header.vue'

export default {
  components: {
    myHeader
  },
    data(){
        return {
            items: []
        }
    },
    beforeEnter(to, from, next){
      this.$router.params.index = to.params.index;
      console.log(to.params.index)
      this.$refs.my_scroller.scrollTo(0, 0, false);
      next();
    },
    mounted: function(){
      var titles = ['球墨铸铁弹簧全启式安全阀', '球墨铸铁弹簧全启式安全阀', '球墨铸铁弹簧微启式安全阀', '球墨铸铁弹簧微启式安全阀', '带扳手弹簧全启封闭式安全阀', '带扳手弹簧微启式安全阀'];

        for (var i = 1; i<=6; i++){
            this.items.push({
              title: titles[i -1],
              src: require('../assets/images/xilie1/xilie1-' + i + '.jpg')
            });
        }
        this.top = 1;
        this.bottom = 20;
    },
    methods: {
        refresh: function (done) {
          this.getList(done);
        },

        infinite: function (done) {
          this.getList(done);
        },
        getList(done) {
          done(true);
        },
        jump(hash){
          this.$router.push(hash);
        }
    }
}
</script>

<style>
#product .content{
  
}
.product-item{
  display: inline-block;
  font-size: 0;
  margin: 8px 2%;
  text-align: center;
  border: 1px solid rgb(205, 205, 205);
  width: 46%;
  
}
.product-title{
  font-size: 17px;
  color: rgb(87, 107, 149);
  min-height: 54px;
  padding: 8px 8px;
  line-height: 1.6;
}
.product-img{
  width: 100%;
  display: block;
}
</style>