<template>
  <div class="box1">
    <div class="box">
      <!-- 上面开始 -->
      <div class="top">
        <span class="s1 iconfont icon-jiantou" @click="fun1"></span>
        <span class="s2 iconfont icon-wenhao"></span>
        <img src="../assets/img2/111.png" alt="">
      </div>
      <!-- 下面结束 -->
      <div class="top1">
        <ul>
          <li>
            <p class="p1">
              <em>13</em>/
              <span>09</span>
            </p>
            <p class="p2">
              历史日推
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 播放区域 -->
    <div class="play">
      <span class="iconfont icon-bofang "></span>
      <p>播放全部</p>
      <img src="../assets/img1/6052_03.png" alt="">
    </div>

    <!-- 歌曲列表 -->
    <ul class="list">
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>
      <li>
        <img src="../assets/1234.png" alt="">
        <div class="center">
          <p>只对你有感觉</p>
          <em>飞轮海/田馥甄</em>
        </div>
        <span class="iconfont icon-diandiandianshu"></span>
      </li>

    </ul>
    <Footer></Footer>
  </div>
</template>
<script>
  export default {
    name: "recomlist",
    data: function() {
      return {

      }
    },
    methods:{
    fun1(){
this.$router.go(-1);
    }
    },
    components: {

    }

  }
</script>

<style scoped>
  @import url("../assets/img1/font_rx24bai1m0d/iconfont.css");
  @import url("../assets/img1/font_jxcpn40eer/iconfont.css");
  @import url("../assets/img1/font_uork9vxl8mg/iconfont.css");

  .box {
    width: 100%;
    height: 1.7rem;
    background-color: #e8625e;

  }

  .top {
    height: 0.6rem;
    width: 100%;
    background: #e8625e;
    position: fixed;
    z-index: 100;
    top: 0;
  }

  .top1 {
    height: 1.1rem;
    margin-top: 0.6rem;
  }

  .s1 {
    float: left;
    font-size: 0.3rem;
    color: #fff;
    font-weight: normal;
    line-height: 0.6rem;
    margin-left: 0.1rem;

  }

  .top img {
    height: 0.38rem;
    width: 0.38rem;
    margin-top: 0.1rem;
    position: absolute;
    z-index: 10;
    margin-left: 0.15rem;
  }

  .s2 {
    float: left;
    margin-left: 2.3rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
    color: #fff;
  }

  .top1 li {
    height: 1.1rem;
    width: 0.9rem;
    background-color: transparent;
    margin-left: 0.1rem;
    overflow: hidden;
    text-align: center;

  }

  .p1 {
    margin-top: 0.15rem;
    height: 0.2rem;
    width: 100%;
    color: #fefefe;
  }

  .p1 em {
    font-size: 0.3rem;

  }

  .p2 {
    margin-top: 0.3rem;
    height: 0.3rem;
    width: 100%;
    border-radius: 0.05rem;
    background-color: #f7e3e0;
    line-height: 0.3rem;
  }

  .play {
    /* margin-top:1.7rem; */
    width: 100%;
    height: 0.6rem;
    border-radius: 0.2rem 0.2rem 0 0;
    position: sticky;
    top: 0.6rem;

  }

  .play span {
    float: left;
    line-height: 0.6rem;
    margin-left: 0.1rem;
    font-size: 0.28rem;
  }

  .play p {
    float: left;
    line-height: 0.6rem;
    font-size: 0.2rem;
    font-weight: 900;
    margin-left: 0.1rem;
  }

  .play img {
    float: right;
    height: 0.3rem;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
  }

  .list li {
    height: 0.6rem;
    width: 100%;
    margin-top: 0.15rem;
  }

  .list li img {
    float: left;
    height: 0.4rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;

  }

  .list li div {
    float: left;
    margin-top: 0.1rem;
  }

  .list li span {
    float: right;
    margin-right: 0.2rem;
    display: inline-block;
    width: 0.2rem;
    height: 0.4rem;
    font-size: 30px;
    margin-top: 0.15rem;
    color: #b3b3b3;
  }

  .iconfont {
    font-size: 0.2rem;
  }

  .center {
    margin-left: 0.15rem;
  }

  .center em {
    font-size: 0.1rem;
    color: #808080;
  }

  .center p {
    margin-top: 0.02rem;
    font-size: 15px;
  }
</style>
