<template>
  <div>
    <img :src="product.image" alt="" class="w-full h-48 object-contain my-4" />
    <h2 class="text-2xl font-bold mb-2">{{ product.title }}</h2>
    <p class="text-gray-600 mb-4">{{ product.description }}</p>
    <p class="text-xl font-bold text-gray-800">${{ product.price }}</p>
    <p class="text-gray-600 mb-2">{{ product.category }}</p>
    <p class="text-gray-600 mb-2">Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
    <button @click="$router.push('/')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['products']),
    product() {
      return this.products.find(p => p.id === parseInt(this.$route.params.id));
    }
  }
};
</script>
