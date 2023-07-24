import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import vuetify from './vuetify'

Vue.use(PiniaVuePlugin)

new Vue({
  vuetify,
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
