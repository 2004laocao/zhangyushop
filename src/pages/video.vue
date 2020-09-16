<template>
  <div class="box">
    <div class="top">
    <span class="s1 iconfont icon-jiantou" @click="fun1"> </span>
      <span class="s2">推荐视频</span>
      <img src="../assets/img/2.png" alt="">
    </div>
    <div class="top2">
      <ul>
        <li>推荐</li>
        <li>直播</li>
        <li>看见音乐</li>
        <li>现场</li>
        <li>翻唱</li>
        <li>舞蹈</li>
        <li>官方</li>
        <li>广场</li>
      </ul>
    </div>
    <div class="kong"></div>
     <movie></movie>

  <Footer></Footer>
  </div>
</template>
<script>
  import movie from '../components/movie.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: "video",
    data: function() {
      return {

      }
    },
    methods:{
    fun1(){
    this.$router.go(-1);
    }
    },
    components: {
     movie,Footer
    }
  }
</script>
<style scoped>
  @import url("../assets/img1/font_uork9vxl8mg/iconfont.css");

  .box {
    width: 100%;
    height: 0.8rem;

  }
  .kong{
  height:0.2rem;
  }
  .top {
    height: 0.4rem;
    line-height: 0.4rem;
  }

  .s1 {
    margin-left: 0.1rem;
    float: left;
  }

  .s2 {
    float: left;
    margin-left: 1.3rem;
    font-size: 0.2rem;
  }

  .top img {
    height: 0.2rem;
    width: 0.2rem;
    float: right;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
  }

.top2{

border-bottom:1px solid #999 ;
}
.top2 ul{
  width:100%;
  display:flex;
  overflow: auto;
  justify-content: space-between;
}
.top2 li{
  margin-left: 0.1rem;
margin-right: 0.15rem;
white-space: nowrap;
line-height:0.4rem ;
font-size: 0.17rem;
}
.top2 li:hover{
color:red;
}
</style>
