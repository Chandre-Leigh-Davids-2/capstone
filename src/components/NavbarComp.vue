<template>
  <div>
    <div class="d-block d-md-none">
      <div :style="{ width: isOpen ? '100%' : '0%' }" id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <div class="logoMobile col-md-4"><img src="../assets/images/♡.jpeg" alt="" class="img"></div>
        <div class="overlay-content">
          <router-link to="/" class="a">Home</router-link>
          <router-link to="/about" class="a">About Us</router-link>
          <router-link to="/store" class="a">Store</router-link>
          <router-link to="/sale" class="a">Contact</router-link>
          <div class="social mt-4">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter-x"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-tiktok"></i>
          </div>
        </div>
        <div class="iconsMobile d-flex justify-content-even align-items-center px-2">
          <p><i class="bi bi-person-circle"></i></p>
          <p><i class="bi bi-cart2"></i></p>
          <p><i class="bi bi-heart"></i></p>
        </div>
      </div>
      <div class="d-flex justify-content-between mb-2" style="background-color: #FFE6E8;">
        <div class="logo col-md-4"><img src="../assets/images/♡.jpeg" alt="" class="img"></div>
        <span style="font-size:30px;cursor:pointer; margin-right: 25px;color: white;" @click="openNav">&#10174;</span>
      </div>
    </div>

    <!-- Bigger Screen Size -->

    <div class="nav d-none d-md-block">
      <div class="d-flex justify-content-start w-100">
        <div class="logo col-md-4">
          <img src="../assets/images/♡.jpeg" alt="" class="img">
        </div>
        <div class="routes d-flex justify-content-evenly align-items-center">
          <p><router-link to="/" class="a">Home</router-link></p>
          <p><router-link to="/about" class="a">About Us</router-link></p>
          <p><router-link to="/store" class="a">Store</router-link></p>
          <p><router-link to="/contact" class="a">Contact</router-link></p>
          <p><input type="text" placeholder="Search" class="searchBar"></p>
        </div>
        <div class="icons d-flex justify-content-even align-items-center px-2">
          <p><i class="bi bi-person-circle"></i></p>
          <p><i class="bi bi-cart2"></i></p>
          <p><i class="bi bi-heart"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openNav() {
      this.isOpen = true;
    },
    closeNav() {
      this.isOpen = false;
    }
  }
}
</script>
<style src="@/assets/css/styles.css"></style>