import Vue from 'vue'
import App from './App.vue'
import './styles/index.css' // 導入 css樣式

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
