import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faLinkedin, faGithub, faHtml5, faCss3Alt, faJsSquare, faVuejs, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCompositionAPI from '@vue/composition-api'

import VueCarousel from 'vue-carousel'




library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faGithub)
library.add(faHtml5)
library.add(faCss3Alt)
library.add(faJsSquare)
library.add(faVuejs)
library.add(faBootstrap)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(VueCompositionAPI)
Vue.use(VueCarousel)




Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
