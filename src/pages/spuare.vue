<template>
  <div class="box">
    <div class="top">
    <span class="s1 iconfont icon-jiantou" @click="fun"></span>
      <span class="s2">歌单广场</span>
      <img src="../assets/img/2.png" alt="">
    </div>


    <div class="top2">
      <ul>
        <li @click="fn('001')">华语</li>
        <li @click="fn('002')">流行</li>
        <li @click="fn('003')">精品</li>
        <li>推荐</li>
        <li>官方</li>
        <li>官方</li>
        <li>官方</li>
        <li>官方</li>

      </ul>


    </div>

      <Banner></Banner>
    <div class="kong"></div>
   <Commontlist  :type="num"></Commontlist>

  <Footer></Footer>
  </div>
</template>
<script>
  import mulist from "../components/mulist.vue"
  import Commontlist from '../components/Commontlist.vue'
  import Footer from '../components/Footer.vue'
  import slider from '../components/slide3d.vue'
  import Banner from '../components/Banner.vue'
  export default {
    props:["num"],
    name: "spuare",
    data: function() {
      return {

      }
    },
    methods:{
      fun(){
      this.$router.go(-1);
      console.log(this.$router);
      },
      fn(params){
        this.num= params;
      }
    },
    components: {
      mulist,Commontlist,Footer,slider,Banner
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
