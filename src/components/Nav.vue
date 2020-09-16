<template>
<div id="app">
<ul>
<li>
 <router-link to="/recommend"> <img src="../assets/img/3.png" alt="">
  <p >每日推荐</p></router-link>
</li>
<li>
 <router-link to="/spuare">  <img src="../assets/img/4.png" alt="">
  <p>歌单</p>
  </router-link>
</li>
<li>
  <img src="../assets/img/5.png" alt="">
  <p>排行榜</p>
</li>
<li>
  <img src="../assets/img/6.png" alt="">
  <p>电台</p>
</li>
<li>
  <img src="../assets/img/7.png" alt="">
  <p>直播</p>
</li>
</ul>
</div>
</template>
<script>

export default{
name :"Nav",
data:function(){
  return {

  }
},

};
</script>
<style scoped>
#app{
height:0.7rem;
width:100%;

}
img{
  height:0.4rem;
  width:0.4rem;
  float: left;
}
ul{
display: flex;
justify-content: space-around;
margin-top: 0.08rem;
text-align: center;
}
</style>
