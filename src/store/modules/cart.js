import types from '../mutation-types'
import shop from '../../api/shop.js'
const state ={
    lists:[],
    checkoutStatus:null
}
const getters = {
    cartLists: state => state.lists,
    checkoutStatus: state => state.checkoutStatus
}
const mutations ={
    [types.RECEIVE_CARTLISTS](state,{lists}){
        state.lists = lists
    },
    [types.ADD_TO_CART](state,{product}){
        const record = state.lists.find(p=>{
            p.id === product.id
        })
        if(!record){
            state.lists.push({
                id:product.id,
                title:product.title,
                price: product.price,
                quantity:1
            })
        }else{
            record.quantity ++
        }
    },
    [types.CHECKOUT](state,{status}){
        if(status){
            state.lists = []
        }
        state.checkoutStatus = status? 'success': 'fail'
    },

}
const actions = {
      getCartLists({commit}){
         shop.getCartLists().then(res=>{
             commit(types.RECEIVE_CARTLISTS,{lists:res.data.lists})
         })
      },
      checkout({commit}){
         shop.buyProducts(products).then(res=>{
             commit(type.CHECKOUT,{status:res.data.status})
         })
      }
}
export default{
    state,
    mutations,
    actions,
    getters
}