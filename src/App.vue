<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {

    }
  }
}
</script>

<style>
  #app{
  overflow: hidden;
  background-color: #fff;
  }
*{
    margin: 0;
    padding:0;
}

ul{
      list-style: none;

}
html{
font-size: 26.667vw;
}
body{
font-size:0.08rem ;
}
.Footer{
position: fixed;
z-index:10;
height:0.6rem;
width:100%;
left:0;
bottom:0;
}

</style>
