<!-- Template to display products and use 'View Details' to show individual details -->

<template>
  <div class="grid-wrap">
    <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.imageName" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <router-link :to="'/products/' + product.id">
        <button>View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
/* takes the array of 'products' from temp-data for scoped use */
export default {
  name: "ProductsList",
  props: ["products"],
};
</script>