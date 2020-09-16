<template>
<div id="app">
    <div class="top-box">
      <Search></Search>
    </div>
    <div class="center">
    <div class="section-box">
      <Banner></Banner>
    </div>

     <!-- <Aplayer></Aplayer> -->
<slide3d></slide3d>
    <div>
      <Nav></Nav>
    </div>
    <commont></commont>
    <Commontlist></Commontlist>
    <div class="line">
    </div>
    <movie></movie>
    <div class="line1"></div>
    <movie></movie>

   </div>

   <div class="bottom-box">
      <Footer></Footer>
   </div>


</div>
</template>
<script>
import Search from "../components/Search.vue";
import Banner from "../components/Banner.vue"
import Nav from "../components/Nav.vue"
import Commont from "../components/commont.vue"
import Commontlist from "../components/Commontlist.vue"
import movie from "../components/movie.vue"
import Footer from "../components/Footer.vue"
import Aplayer from "../components/lun.vue"
import slide3d from "../components/slide3d.vue"
export default{
name :"Index",
data:function(){
  return {

  }
},
components:{
Search,Banner,Nav,Commont,Commontlist,movie,Footer,Aplayer,slide3d
}
}


</script>
<style>
.line{
height:0.1rem;
width:100%;
background-color:#f8f8f8;
margin-bottom: 0.075rem;
}
.line1{
height:0.1rem;
width:100%;
background-color:#f8f8f8;
margin-bottom: 0.075rem;
}

.top-box{
 height:2rem;
position: fixed;
z-index: 10;;

}
.center{
margin-top:0.5rem;

margin-bottom: 0.6rem;
}
.section-box{
margin-left: 0.1rem;
margin-right: 0.1rem;
}
.bottom-box{
position: fixed;
z-index:10;
height:0.6rem;
width:100%;
left:0;
bottom:0;
}
a{
text-decoration: none;
color:black;
}
</style>
