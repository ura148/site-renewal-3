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
    <nav v-bind:class="[ show === true ? 'nav__active' : '' ]" class="nav">
      <ul class="nav__list">
        <li @click="show=!show" class="nav__item"><a href="####" class="nav__link">Design</a></li>
        <li @click="show=!show" class="nav__item"><a href="#" class="nav__link">Plan</a></li>
        <li @click="show=!show" class="nav__item"><a href="#" class="nav__link">Work</a></li>
        <li @click="show=!show" class="nav__item"><a href="#" class="nav__link">Company Info</a></li>
        <li @click="show=!show" class="nav__item"><a href="#" class="nav__link">Contact</a></li>
      </ul>
    </nav>

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
  opacity: 0;
  position: absolute;
  top: 52px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  animation: fadeout 0.5s forwards ease-in-out;
}
  .nav__active {
    animation: fadein 0.5s forwards ease-in-out;
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

@keyframes fadein {
  0% {
    opacity: 0;
     }
  100% {
    opacity: 1;
     }
}

@keyframes fadeout {
  0% {
    opacity: 1;
     }
  100% {
    opacity: 0;
     }
}
</style>
