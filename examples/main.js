import Vue from 'vue'
import App from './App.vue'
import HeimaUi from '../packages'
Vue.config.productionTip = false
Vue.use(HeimaUi)
new Vue({
  render: (h) => h(App),
}).$mount('#app')
