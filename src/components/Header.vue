<template>
  <header class="header">
    <router-link to="/">
      <h1 class="header__companyName">Union</h1>
    </router-link>
    <button type="button" class="menubtn" @click="show=!show">
      <span class="menubtn__line"></span>
      <span class="menubtn__line"></span>
      <span class="menubtn__line"></span>
    </button>
    <transition>
      <nav v-show="show" class="nav">
        <ul class="nav__list">
          <li @click="show=!show" class="nav__item"><router-link to="/" class="nav__link">Top</router-link></li>
          <li @click="show=!show" class="nav__item"><router-link to="/design" class="nav__link">Design</router-link></li>
          <li @click="show=!show" class="nav__item"><router-link to="/contact" class="nav__link">Plan</router-link></li>
          <li @click="show=!show" class="nav__item"><router-link to="/work" class="nav__link">Work</router-link></li>
          <li @click="show=!show" class="nav__item"><router-link to="/company" class="nav__link">Company Info</router-link></li>
          <li @click="show=!show" class="nav__item"><router-link to="/contact" class="nav__link">Contact</router-link></li>
        </ul>
      </nav>
    </transition>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      windowW: window.innerWidth,
      windowH: window.innerHeight,
      show: false
    };
  },
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 0 18px;
  width: 100%;
  height: 52px;
  background-color: #0B0B0B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
  .header__companyName {
    color: #fff;
    font-family: 'Libre Baskerville', serif;
    font-size: 1.6rem;
  }

.menubtn {
  position: relative;
  width: 40px;
  height: 16px;
}
  .menubtn__line {
    display: block;
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #fff;
  }
  .menubtn__line:first-of-type {
    top: 0;
  }
  .menubtn__line:nth-child(2) {
    top: 8px;
  }
  .menubtn__line:last-child {
    top: 16px;
  }

.nav {
  position: absolute;
  top: 52px;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
  .nav__list {

  }
  .nav__item {
    height: 52px;
  }
  .nav__link {
    color: #fff;
    line-height: 52px;
  }


/* アニメーション中のスタイル */
.v-leave-active,
.v-enter-active {
    transition: opacity 1s;
}

/* 表示アニメーション */
.v-enter {
    opacity: 0;
}
.v-enter-to {
    opacity: 1;
}

/* 非表示アニメーション */
.v-leave {
    opacity: 1;
}
.v-leave-to {
    opacity: 0;
}
</style>
