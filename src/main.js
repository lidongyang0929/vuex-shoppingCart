
import Vue from 'vue'
import store from './store'
import App from './components/App'
import {currency} from './currency'

Vue.filter('currency',currency)


new Vue({
  el: '#app',
  store,
  render:h=>h(App)
})
