<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row justify-content-center" v-if="product">
            <div class="product-details">
                <div class="product-image">
                    <img :src="product.p_image" loading="lazy" class="img-fluid" :alt="product.p_name">
                </div>
                <div class="product-info">
                    <h5 class="product-name fw-bold">{{ product.p_name }}</h5>
                    <p class="description lead">
                        {{ product.p_description }}
                    </p>
                    <p class="price lead text-center"><span class="text-success fw-bold">Amount</span>: R{{ product.p_price }}</p>
                    <button class="btn btn-success btn-sm"><router-link class="nav-link" to="/store">Back</router-link></button>
                </div>
            </div>
        </div>
        <div v-else> 
            <p>Products could not be fetched</p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
    () => store.state.product
)
onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
}) 
</script>

<style scoped>
.product-details {
    display: flex;
    border: 1px solid #ccc;
    padding: 16px;
    background-color: #f9f9f9;
}

.product-image {
    flex: 1;
    margin-right: 16px;
    border-right: 2px solid #ccc; /* Increased border thickness */
    padding-right: 16px; /* Space between the image and the border */
}

.product-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px; /* Space between the border and product details */
}

.product-name {
    margin-bottom: 8px;
}

.description {
    flex-grow: 1;
    margin-bottom: 8px;
}

.price {
    margin-top: 8px;
    align-self: center; /* Center align text */
}

.btn-sm {
    padding: 0.25rem 0.5rem; /* Adjust padding for smaller button width */
    font-size: 0.875rem; /* Adjust font size for smaller button */
}

</style>