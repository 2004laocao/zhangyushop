<template>
  <div class="box">

  <ul>

<li ><router-link to="/">
  <img src="../assets/img/list1.png" alt="">
  <p>{{muisc[1]}}</p></router-link>
</li>
<li>
  <img src="../assets/img/list1.png" alt="">
  <p>asdfdfghgjh</p>
</li>
<li>
  <img src="../assets/img/list1.png" alt="">
  <p>asdfdfdgfhg</p>
</li>
<li>
  <img src="../assets/img/list1.png" alt="">
  <p>weqwrtrtyu</p>
</li>
<li>
  <img src="../assets/img/list1.png" alt="">
  <p>weqwrtrtyu</p>
</li>
<li>

  <img src="../assets/img/list1.png" alt="">
  <p>weqwrtrtyu</p>
</li>
  </ul>
  </div>
</template>
<script>
   import  axios from 'axios';
  export default {
    name: "Commontlist",
    // props:["num"],
    data() {
      return {
        typename:{

        },
       muisc:[]
      }
    },
created() {
     axios({
     // baseURL:
    url:"/depts",
    method:"get",
    params:{
    // type:this.num
    }
    })
    .then(res=>{

    console.log(res.data.date[0].did);
    });

}
  }
</script>

<style scoped>

  /* @import url(../assets/font/iconfont.css); */
  .box{
  height:2.7rem;

  }
ul{
width:95%;
margin:0 auto;
height:1rem;
}
ul li{
height:1.3rem;
width:1.05rem;
/* background-color: green; */
float: left;
margin-left: 0.1rem;
border-radius: 0.025rem;
margin-bottom: 0.1rem;
}
ul li img{
height:1rem;
width:100%;

}
ul li p{
height:0.2rem;
width:100%;

margin-top: 0.02rem;
font-size: 0.1rem;
}
</style>
