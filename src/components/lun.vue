<template>
    <div>
         <div style="width:25% ">
                <aplayer :music="videoUpload.music"></aplayer>
           </div>

    </div>
</template>

<script>

import aplayer from 'vue-aplayer'

export default {
  name: "Aplayer",
  // props: ["pdfurl"],
  components: {
    //别忘了引入组件
    aplayer: aplayer,
  },
  data() {

               return {
                   videoUpload: {
                       progress: false,
                       progressPercent: 0,
                       successPercent: 0,
                       music: {
                          title: '12321',
                          author: '12321',
                          // url:'../assets/yiyun.mp3',
                           src: require('../assets/yiyun.mp3'),
                          // lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'](){

                          },
                      }
                   }
               },
};
</script>

<style  scoped >
  .aplayer-body{
  height:30px;
  width:30px;
  }
</style>
