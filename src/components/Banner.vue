<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
     <img src="../assets/img/banner1.jpg" alt="">
      </div>
      <div class="swiper-slide">
          <img src="../assets/img/banner2.jpg" alt="">
      </div>
      <div class="swiper-slide">
         <img src="../assets/img/banner3.jpg" alt="">
      </div>
      <div class="swiper-slide">
         <img src="../assets/img/banner4.jpg" alt="">
      </div>
      <div class="swiper-slide">
         <img src="../assets/img/banner5.jpg" alt="">
      </div>
      <div class="swiper-slide">
         <img src="../assets/img/banner6.jpg" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
<!--    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>
<script>

import Swiper from "swiper"

export default {

  name: "Banner",
  mounted() {
     new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // autoplay:true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style >
@import url(../assets/css/swiper.css);
.swiper-container {
  width: 100%;
  height:1.5rem;
  border-radius:0.15rem;
}

img {
  width: 100%;
  height: 100%;
}
.swiper-container{

}
</style>
