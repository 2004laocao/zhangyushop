<template>
  <div class="box">
    <p>推荐歌单</p>
    <span>歌单广场</span>
  </div>
</template>
<script>
  export default {
    name: "Commont",
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
    height: 0.55rem;
    border-top: 1px solid #f7f7f7;
  }
p{
float: left;
line-height: 0.55rem ;
margin-left: 0.1rem;
font-size: 0.2rem;
font-weight: 900;
}
span{
float: right;
height:0.19rem;
display: inline-block;
width:0.6rem;
border-radius: 0.075rem;
border: 1px solid #e6e6e6;
margin-right:0.1rem;
margin-top: 0.22rem;
text-align: center;
line-height: 0.19rem;
font-size:0.1rem ;
}
</style>
