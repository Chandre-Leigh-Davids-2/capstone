<template>
  <div class="padding">
    <div class="main">
      <div class="mb-5">
        <h1 class="text-center">🌸 About Us 🌸</h1>
        <p class="text-center">Welcome to Sanrio, your ultimate destination for all things Sanrio!
          We’re a passionate team of Sanrio lovers, dedicated to bringing the cutest and most lovable characters to you.
          From Hello Kitty to My Melody, Cinnamoroll, and more, we offer a wide range of plushies, bags, and
          collectibles
          that are perfect for fans of all ages.
        </p>
      </div>
      <div class="row">
        <div class="mb-5 col-lg-4">
          <div class="a">
            <h1> Our Mission </h1>
            <p>We aim to spread joy and positivity through our carefully curated selection of Sanrio merchandise.
              Whether
              you're looking to add to your collection or find the perfect gift for a fellow fan, we've got you covered!
            </p>
          </div>
        </div>
        <div class="mb-5 col-lg-4">
          <div class="a">
            <h1> Why Choose Us? </h1>
            <ol>
              <li>Authentic Merchandise: We source our products from trusted suppliers to ensure quality.</li>

              <li>New Arrivals: Stay tuned for fresh collections and limited-edition items!</li>

              <li>Friendly Service: We’re here to make your shopping experience fun and memorable.</li>

              <li>Worldwide Shipping: We make sure Sanrio magic reaches you no matter where you are!</li>
            </ol>
          </div>
        </div>
        <div class="mb-5 col-lg-4">
          <div class="a">
            <h1> Our Story </h1>
            <p>Born from a love for all things cute and whimsical, our shop was created by fans, for fans. We understand
              the joy of unboxing a new plushie or carrying a character-themed bag, and we want to share that happiness
              with you!
            </p>
          </div>
        </div>
      </div>
      <div class="mb-5 a">
        <h1 class="text-center">🌏 Join Our Community 🌏</h1>
        <p class="text-center">Follow us on social media to keep up with our latest arrivals and special offers. Be part
          of our Sanrio-loving family! Watch out for gifts and rewards too !
        </p>
        <div class="social mt-4 d-flex justify-content-evenly ">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter-x"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-tiktok"></i>
        </div>
      </div>
    </div>
    <div class="strawberry">
      <img src="../assets/images/strwaberry.png" alt="">
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
/*  font-family: "Fredoka", sans-serif; */
@import url("https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap");
/* font-family: "Cherry Bomb One", system-ui; */

.padding {
  padding: 25px 110px 25px 110px;
  position: relative;
}

@media screen and (max-width:850px) {
  .padding {
    padding: 25px 70px 25px 70px;
  }
}
.main {
  background-image: url('../assets/images/page.jpeg');
  width: 100%;
  min-height: 150vh;
}
@media screen and (max-width:730px) {
  .main {
    padding: 5%;
  }
  .a {
  padding: 5px;
}
.a>h1 {
  font-size: 8.5vw;
}
.a>p {
  font-size: 1.1vw;
}
.a>ol>li {
  font-size:2.5vw !important;
}
h1 {
  font-size: 5vw !important;
}
p {
  font-family: "Fredoka", sans-serif;
  font-size: 2.5vw !important;
  margin-top: 1vh;
}

}

.a {
  border: 3px solid black;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.589);
}

.a>h1 {
  font-size: 2.5vw;
}

.a>p {
  font-size: 1.1vw;
}

.a>ol>li {
  font-size: 1.1vw;
}

h1 {
  font-family: "Cherry Bomb One", system-ui;
  font-size: 4vw;
  margin-top: 5px;
}

p {
  font-family: "Fredoka", sans-serif;
  font-size: 1.2vw;
  margin-top: 1.8vh;
}

.strawberry {
  position: absolute;
  bottom: 0;
  right: 3vw;
  width: 15vw;
}

@media screen and (max-width:1012px) {
  .strawberry {
    position: absolute;
    bottom: 0;
    right: 8vw;
    width: 15vw;
  }
}

img {
  width: 100%;
  height: 100%;
}
i {
  font-size: 2vw;
  margin: 15px;
}
@media screen and (max-width: 576px) {
  .padding {
    padding: 10px 40px 10px 40px;
  }
  i {
  font-size: 4vw;
  margin: 15px;
}
}

</style>