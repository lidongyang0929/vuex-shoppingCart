<template>
    <div class="cart">
      <ul>
        <li v-for="p in products">
          {{p.title}}-{{p.price | currency}} X {{p.quantity}}
          </li>
        </ul>
        <p>total:{{total|currency}}</p>
        <p><button :disabled="!products.length" @click="checkeout(products)">checkout</button></p>        
        <p v-show="checkoutStatus">checkout {{checkoutStatus}}</p>
    </div>
</template>
<script>
   import {mapGetters,mapActions} from 'vuex'
   export default{
       computed:{
           ...mapGetters({
               products:'lists',
               checkoutStatus:'checkoutStatus'
           }),
           total(){
              return this.products.reduce((total,p)=>{
                  return total + p.price* p.quantity
              },0)
           }
       },
       methods:{
           checkout(products){
               this.$store.dispatch('checkout',products)
           }
       },
       created(){
           this.$store.dispatch('getCartLists')
       }
   }

</script>