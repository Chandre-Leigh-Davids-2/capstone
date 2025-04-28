<template>
  <div class="padding mt-3">
    <div class="row mt-2">
      <div class="advert1">
        <img src="../assets/images/advert1.jpg" alt="">
      </div>
    </div>
    <div class="row d-none d-md-block">
      <h3 class="mt-5">Who's you're favorite character ?</h3>
      <div class="icons row">
        <div class="col i"><img src="../assets/images/icon_hk.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_km.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_mm.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_po.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_cm.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_pom.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_kp.webp" alt=""></div>
        <div class="col i"><img src="../assets/images/icon_bm.webp" alt=""></div>
      </div>
    </div>
    <div class="row d-block d-md-none">
      <h3 class="mt-5">Who's you're favorite character ?</h3>
      <div class="icons row">
        <div class="col-3 i mt-4"><img src="../assets/images/icon_hk.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_km.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_mm.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_po.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_cm.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_pom.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_kp.webp" alt=""></div>
        <div class="col-3 i mt-4"><img src="../assets/images/icon_bm.webp" alt=""></div>
      </div>
    </div>
    <div class="row">
      <div class="information">
      </div>
      <div class="row advert2 ">
        <div class="col-lg-6">
          <div class="white" style="background-color: white;border-radius: 25px; margin: 1%;">
            <h2>Fresh from Sanrio Wonderland! 🌼</h2>
            <p>New arrivals just dropped! From Hello Kitty to Cinnamoroll, find your favorite characters in plushies,
              bags, and more—only at our Sanrio store!""</p>
            <h2>Thinking of buying a gift ??</h2>
            <p>The Perfect Gift for Every Sanrio Lover! 🎀
              Whether you’re treating yourself or surprising someone special, our new arrivals are guaranteed to spread
              joy!</p>
            <div class="boxImg">
              <img src="../assets/images/_3-removebg-preview.png" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-6 img">
          <img src="../assets/images/gif.webp" alt="" class="img">
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <h3 class="mb-5">Check Out our new arrivals</h3>
      <div class="col-sm-4">
        <div class="advertRow"><img
            src="../assets/images/020425_PC_WALLPAPER_FOTM_1500x2000_f9aec3eb-eb89-482a-bb11-8d88b7de2b22.webp" alt="">
          <p></p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="advertRow"><img
            src="../assets/images/022725_CN_WALLPAPER_FOTM_1500x2000_c9682922-422c-4a29-9eb9-706f359eb9c8.webp" alt="">
          <p></p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="advertRow"><img
            src="../assets/images/010625_MM_WALLPAPER_FOTM_1500x2000_622241a2-d1f4-406d-911b-95955f073f6b.webp" alt="">
          <p></p>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <h3 class="text-center">FLASH ⚡ SALE</h3>

      <!--  -->

      <div v-if="getSales.length === 0">
        <div class="row">
          <CardComp class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">product.p_name </p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="cart" @click="error"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/plush_mm.png" alt="product" width="260px" height="auto">
                </div>
              </div>
            </template>
            <template #cardFooter>
              <div class="row d-flex justify-content-between">
                <p class="p d-flex align-content-center ">product.p_price</p>
                <div class="y d-flex justify-content-end">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="view">View More</button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </CardComp>
          <CardComp class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">product.p_name </p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="cart"  @click="error"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/hoodie_km.png" alt="product" width="260px" height="auto">
                </div>
              </div>
            </template>
            <template #cardFooter>
              <div class="row d-flex justify-content-between">
                <p class="p d-flex align-content-center ">product.p_price</p>
                <div class="y d-flex justify-content-end">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="view">View More</button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </CardComp>
          <CardComp class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">product.p_name </p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="cart"  @click="error"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/top_po.webp" alt="product" width="260px" height="auto">
                </div>
              </div>
            </template>
            <template #cardFooter>
              <div class="row d-flex justify-content-between">
                <p class="p d-flex align-content-center ">product.p_price</p>
                <div class="y d-flex justify-content-end">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="view">View More</button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </CardComp>
          <CardComp class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">product.p_name </p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="cart"  @click="error"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/hoodie_km.png" alt="product" width="260px" height="auto">
                </div>
              </div>
            </template>
            <template #cardFooter>
              <div class="row d-flex justify-content-between">
                <p class="p d-flex align-content-center ">product.p_price</p>
                <div class="y d-flex justify-content-end">
                  <router-link to="/store" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="view">View More</button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </CardComp>
        </div>
      </div>

      <!-- If there are sales, display the product slider -->
      <div v-else>
        <div class="row slider-container">
          <!-- Loop through products (card component) -->
          <CardComp v-for="product in getSales" :key="product.product_id" class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">{{ product.p_name }}</p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link class="y">
                    <div class="d-flex justify-content-end">
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img :src="product.p_image" :alt="product.p_name" width="260px" height="auto">
                </div>
              </div>
            </template>
            <template #cardFooter>
              <div class="row d-flex justify-content-between">
                <p class="p d-flex align-content-center ">$ {{ product.p_price }}</p>
                <div class="y d-flex justify-content-end">
                  <router-link :to="{ name: 'product', params: { id: product.product_id } }" class="y">
                    <div class="d-flex justify-content-end">
                      <button class="view">View More</button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
          </CardComp>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
import Swal from "sweetalert2";

export default {
  components: {
    CardComp
  },
  computed: {
    // This is now a computed property that pulls sales from Vuex store
    getSales() {
      return this.$store.state.sales; // Access sales from the Vuex store
    }
  },
  methods: {
    error() {
      Swal.fire({
        title: "ERROR",
        text: "It seems like there might be a connection issue",
        imageUrl: hehe,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    }
  },
  mounted() {
    this.$store.dispatch('fetchSales'); // Fetch sales when the component mounts
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap");
/*  font-family: "Fredoka", sans-serif; */
@import url("https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap");
/* font-family: "Cherry Bomb One", system-ui; */

.padding {
  padding: 25px 110px 25px 110px;
}

@media screen and (max-width:850px) {
  .padding {
    padding: 25px 70px 25px 70px;
  }
}

@media screen and (max-width: 576px) {
  .padding {
    padding: 10px 40px 10px 40px;
  }
}

.advert1 {
  width: 100%;
}

.icons {
  margin-top: 4%;
}

.advert2 {
  background-color: rgb(251, 212, 219);
  border-radius: 20px;
  padding: 0;
  margin: 0;
  margin-top: 8%;
}

.advert2>.col-lg-6 {
  padding: 0;
  margin: 0;
}

.white {
  min-height: 98%;
  border: 1px solid pink;
  position: relative;
  margin: 0;
  padding: 0;
}

.boxImg {
  width: 30vw;
  position: absolute;
  bottom: 0;
  right: 18px;
}

.advert2>.col-lg-6>.white>p {
  font-size: 2.5vh;
  padding: 3%;
  font-family: "Fredoka", sans-serif;
}

.advert2>.col-lg-6>.white>h2 {
  font-size: 3vh;
  padding: 2%;
  font-family: "Cherry Bomb One", system-ui;
}

img {
  width: 100%;
}

.img {
  border-radius: 20px;
}

h3 {
  text-align: center;
  font-family: "Cherry Bomb One", system-ui;
  font-size: 4.7vw;
  padding: 0;
}

/* advert row  --> Something new */

/* [1] The container */
.advertRow {
  /* [1.1] Set it as per your need */
  overflow: hidden;
  /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.advertRow img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.advertRow:hover img {
  transform: scale(1.25);
  cursor: pointer;
}

@media screen and (max-width:576px) {
  .advertRow {
    height: 45vh;
    margin-top: 10px;
  }
}

.i:hover {
  scale: 1.2;
  transition: 0.5s ease-in-out;
}

/*  */

.image {
  width: 80%;
}

/* CardComp styles */
.x {
  background-color: rgb(247, 247, 247);
}

button {
  width: fit-content !important;
  margin: 0;
  padding: 2px 10px 2px 10px;
  border-radius: 8px;
  border: 2px solid rgb(255, 255, 255);
  background-color: transparent;
}

.view {
  width: fit-content !important;
  margin: 0;
  padding: 2px 10px 2px 10px;
  background-color: rgb(251, 251, 116);
  border-radius: 12px;
  border: 2px solid rgb(255, 255, 255);
}

.purchase {
  width: fit-content;
  padding: 2px 10px 2px 10px;
}

p {
  width: 70%;
}

.p {
  width: 50%;
}

.y {
  width: fit-content !important;
  align-content: center;
  text-decoration: none;
}

i {
  padding: 5px;
  margin: 0;
  background-color: transparent;
  font-size: 3.8w;
  border: 1px solid black;
  border-radius: 45%;
}

.slider-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding-bottom: 10px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

/* Optional: smooth snap-to-scroll */
.slider-container>* {
  scroll-snap-align: center;
  flex: 0 0 auto;
  width: 300px;
  /* Set width to  avoid card shrinking */
}

.slider-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}
</style>