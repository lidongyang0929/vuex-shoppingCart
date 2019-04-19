import types from '../mutation-types'
import shop from '../../api/shop.js'

const state = {
    all:[]
}
const getters = {
    allProducts: state=> state.all
}
const mutations = {
    [types.RECEIVE_PRODUCTS](state,{products}){
        state.all = products
    },
    [types.ADD_TO_CART](state,{product}){
         state.all.find(p=>{
             p.id === product.id
         }).inventory--
    }
}
const actions ={
    getAllProducts({commit}){
       shop.getproducts().then(res=>{
        commit('types.RECEIVE_PRODUCTS',{products:res.data.data})
       })
    }
}
export default{
    state,
    getters,
    mutations,
    actions
}