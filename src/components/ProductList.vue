<template>
<div>
  <ul>
     <li v-for="p in products">{{p.title}}-{{p.price | currency}}-{{p.inventory}}
     <br>
     <button :disabled="!p.inventory" @click="addToCart(p)">Add to Cart</button>
     </li>
  </ul>
  </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'

    export default {
        computed:{
            ...mapGetters({
                products:'allProducts'
            })
        },
        methods:{
            ...mapActions(['addToCart'])
        },
        created(){
            this.$store.dispatch('getAllProducts')
        }
    }

</script>