<template>
  <div class="box">
  <ul>
      <router-link to="/Index">
  <li>
    <img src="../assets/img/IMG_6046_03.png" alt="">
    <p>发现</p>
  </li>
      </router-link>
    <router-link to="/video">
    <li>
    <img src="../assets/img/IMG_6046_03.png" alt="">
      <p>视频</p>
  </li> </router-link>
  <li>
    <img src="../assets/img/IMG_6046_05.png" alt="">
    <p>我的</p>
  </li>
  <li>
    <img src="../assets/img/IMG_6046_07.png" alt="">
    <p>云村</p>
  </li>
  <li>
    <img src="../assets/img/IMG_6046_09.png" alt="">
    <p>账号</p>
  </li>
  </ul>
  </div>
</template>
<script>
export default {
    name:"Footer",
	data:function(){
		return{


    }
	}
}

</script>

<style scoped>
.box{
height:0.6rem;
width:100%;
background-color: #dbd9d9;
position: fixed; */
z-index:10;
left:0;
 bottom:0;
}


ul{
display: flex;
justify-content: space-around;
align-items: center;
}
ul li{
text-align: center;
margin-top: 0.1rem;
font-size: 0.14rem;
color:#898685;
}
img{
height:0.3rem;
width:0.3rem;

}

</style>
