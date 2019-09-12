import 'babel-polyfill'

import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import vconsole from 'vconsole'
import './index.scss'


if(process.env.NODE_ENV == 'development'){
  new vconsole()
}


new Vue({
    el: '#app',
    router,
    template: '<Index/>',
    components: { Index }
})

