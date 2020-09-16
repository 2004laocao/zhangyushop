<template>
  <div class="box">
	  <span class="top1"></span>
		<span class="top2 iconfont icon-fangdajing" ></span>
     <input type="text" :placeholder ="placeholder">
      <b></b>
  </div>
</template>
<script>
export default {
    name:"Search",
	data:function(){
		return{
      placeholder:["最近青丝很火哦"],
      msg:['1232','12123','wqeqw','12321321','zxzxz']
		}
	},
  methods:{
    fn(){

          for(let i;i<this.msg.lenght;i++){
            setInterval(function(){

            this.placeholder =this.msg[i]
             },2000)
            }
    }
  }
}

</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.box{
    width:100%;
    height:0.55rem;
    background-color:#fefefe;
}
.top1{
	float: left;
  display: inline-block;
  height:0.25rem;
  width:0.25rem;
  margin-top:0.20rem ;
   margin-left: 0.1rem;
   background: url(../assets/img/1.png) no-repeat;
  background-size:0.2rem 0.2rem ;
}
.top2{
	float: left;
  display: inline-block;
  height:0.25rem;
  position: absolute;
  left:1rem;
  top:0.20rem ;
  font-size:0.1rem;
  color:#949595;
}
input{
float: left;
height:0.3rem;
border-radius: 0.15rem;
text-align: center;
border: 0;
width:2.75rem;
margin-left: 0.09rem;
margin-top: 0.10rem;
background-color: #f7f7f7;
outline: none;
margin-right: 0.15rem;
}
b{
  height:0.25rem;
  width:0.25rem;
	float:right;
  margin-top:0.20rem ;
  margin-right: 0.1rem;
  background: url(../assets/img/2.png)no-repeat;
  background-size:0.2rem 0.2rem ;
}
</style>
