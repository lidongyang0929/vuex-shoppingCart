import shop from'../api/shop.js'
import types from './mutation-types'
 const actions ={
    addToCart({commit},product){
    if(product.inventory>0){
        shop.addToCart(product.id).then(res=>{
            commit(types.ADD_TO_CART,{product})
          })
       }
    }
      
}
export default actions