import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import products from './modules/product'
import cart from './modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
     actions,
     modules:{
         products,
         cart
     }
})
export default store