<template>
  <div class="box">
    <recomlist></recomlist>
    <Footer></Footer>
    </div>
</template>
<script>
  // import recomlist from '../components/recomlist.vue'
 import Footer from "../components/Footer.vue"
 import recomlist from '../components/recomlist.vue'
  export default {
    name: "recommend",
    data: function() {
      return {

      }
    },
    components:{
       Footer,recomlist
    }

  }

</script>

<style scoped>
  /* @import url(../assets/font/iconfont.css); */
box{
height:100px;
width:100px;
background-color:green ;
}

</style>
