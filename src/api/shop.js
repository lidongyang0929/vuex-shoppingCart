import axios from 'axios'

let host = 'http://rapapi.org/mockjsdata/26063'
let url ={
     products:  '/products',
     add:  '/add',
     cartLists:  '/cartLists',
     buy: '/buy'
}
for(let key in url){
    url[key]= host + url[key]
}


export default {
    getproducts(){
        return axios.post(url.products)
    },
    addToCart(id){
        return axios.post(url.add,id)
    },
    getCartLists(){
        return axios.post(url.cartLists)
    },
    buyProducts(products){
      return axios.post(url.buy,products)
    }
}