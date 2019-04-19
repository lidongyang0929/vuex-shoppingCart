<template>
 <div id="app">
   <h1>shopping-cart</h1>
   <hr>
   <h2>products</h2>
   <product-list></product-list>
   <hr>
   <cart></cart>
</div>
</template>
<script>
   import productList from './ProductList.vue'
   import cart from './Cart.vue'
   export default {
      components:{
       productList,
       cart
   }}
</script>