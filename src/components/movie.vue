<template>
  <div class="box">
      <div class="video123">
      <video src="../assets/mvmv.mp4" controls  width="100%" height="200" preload="auto" poster="../assets/img/banner1.jpg">
      </video>

        <div class="video-bottom">
          <p>请大家一起来欣赏</p>
        <span></span>
        </div>
      </div>
    <div class="zan">
    <p class="hand"> <img src="../assets/img/tu1.png" alt=""> <span>1234</span> </p>
    <p class="count"> <img src="../assets/img/tu2.png" alt="">  <span>4567</span> </p>
    <img src="../assets/img/tu3.png" alt="" class="right">
    </div>

  </div>
</template>
<script>
  export default {
    name: "movie",
    data: function() {
      return {

      }
    }
  }
</script>

<style scoped>
  /* @import url(../assets/font/iconfont.css); */

  .box {
    width: 100%;
    height:3rem;
  }

.video-bottom{
height:0.5rem;

border-radius: 0 0 0.05rem 0.05rem;
}
.video-bottom p{
  height:0.2rem;
  width:3rem;
  float: left;
  line-height: 0.5rem;
  margin-left: 0.1rem;
  font-size: 0.2rem;
  font-weight:bold ;
}
.video-bottom span{
display: inline-block;
height:0.4rem;
width:0.4rem;
background:url(../assets/img/yonghu2.jpg)no-repeat;
background-size: 0.5rem 0.5rem;
float: right;
margin-top: 0.04rem;
margin-right: 0.1rem;
border-radius: 50%;
}
.zan{
  height:0.4rem;

}
.zan p{
float: left;
height:0.3rem;
width:1rem;
line-height:0.4rem ;
margin-left: 0.1rem;
}
.zan p span{
  display: inline-block;
width:0.6rem;
text-align: center;
}
.right{
  height:0.2rem;
float: right;
width:0.2rem;
margin-right: 0.1rem;
}
img{
height:0.2rem;
width:0.2rem;
margin-top: 0.07rem;
float: left;
}
</style>
