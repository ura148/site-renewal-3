<template>
  <div>
    <div v-if="windowW < 768">
      <hooper :autoPlay="true" :playSpeed="2000">
        <slide>
          <img src="../assets/slide1.jpg" alt="アクアリウムの画像" class="hooper-content">
        </slide>
        <slide>
          <img src="../assets/slide2.jpg" alt="海水アクアリウムの画像" class="hooper-content">
        </slide>
        <slide>
          <img src="../assets/slide3.jpg" alt="ボトルアクアリウムの画像" class="hooper-content">
        </slide>
        <slide>
          <img src="../assets/slide4.jpg" alt="海水アクアリウムの画像" class="hooper-content">
        </slide>
        <slide>
          <img src="../assets/slide5.jpg" alt="ネイチャーアクアリウムの画像" class="hooper-content">
        </slide>
        <slide>
          <img src="../assets/slide6.jpg" alt="店に設置されたアクアリウムの画像" class="hooper-content">
        </slide>
      </hooper>
    </div>
    <div v-if="windowW >= 768">
      <img src="../assets/slide1.jpg" alt="アクアリウムの画像" class="design__img">
      <img src="../assets/slide2.jpg" alt="海水アクアリウムの画像" class="design__img">
      <img src="../assets/slide3.jpg" alt="ボトルアクアリウムの画像" class="design__img">
      <img src="../assets/slide4.jpg" alt="海水アクアリウムの画像" class="design__img">
      <img src="../assets/slide5.jpg" alt="ネイチャーアクアリウムの画像" class="design__img">
      <img src="../assets/slide6.jpg" alt="店に設置されたアクアリウムの画像" class="design__img">
    </div>

  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'Slider',
    data() {
      return {
        windowW: window.innerWidth,
        windowH: window.innerHeight,
      };
    },
    components: {
      Hooper,
      Slide
    },
    methods: {
      handleResize: function() {
        this.windowW = window.innerWidth;
        this.windowH = window.innerHeight;
      }
    },
    mounted: function () {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<style>
.hooper {
  height: auto;
}
  .v-application .hooper-track {
  padding-left: 0;
  }
  .hooper-content {
    width: 100%;
    height: auto;
  }
.design__img {
  margin-bottom: -6px;
  width: 33.3333%
}
</style>
