require('nanobox-core-styles/scss/_base.scss')

import triggers from '../src/main.js'
import Vue from 'vue'

Vue.config.productionTip = false;

let callbacks = {

}

new Vue({
  el       : '#app',
  template : '<triggers :model="model" :callbacks"callbacks"/>',
  data     : {
    model     : {},
    callbacks : callbacks
  },
  components:{ triggers }
})
