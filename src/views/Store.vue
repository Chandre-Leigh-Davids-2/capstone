  <template>
    <div class="padding">
      <div v-if="getProducts.length === 0">
        <div class="row d-flex justify-content-center">
          <CardComp class="mb-5 x col-md-4">
            <template #cardHeader>
              <div class="row y d-flex justify-content-between">
                <p class="item-name">product.p_name </p>
                <div class="y d-flex justify-content-end align-content-center">
                  <router-link to="/store" class="y">
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
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
                      <button class="cart"><i class="bi bi-cart-check"></i></button>
                    </div>
                  </router-link>
                </div>
              </div>
            </template>
            <template #cardBody>
              <div class="card-details">
                <div class="image">
                  <img src="../assets/images/icon_hk.webp" alt="product" width="260px" height="auto">
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
      <div v-else class="row">
        <CardComp v-for="product in getProducts" :key="product.product_id" class="mb-5 x col-md-4">
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
  </template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
  components: {
    CardComp
  },
  computed: {
    // This is now a computed property that pulls products from Vuex store
    getProducts() {
      return this.$store.state.products; // Access products from the Vuex store
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts'); // Fetch products when the component mounts
  }
}
</script>

<style scoped>
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

img {
  width: 100%;
  height: 100%;
}

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
</style>
