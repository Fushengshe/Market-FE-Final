// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
// import 'muse-components/styles/base.less'
// import raisedButton from 'muse-components/raisedButton'

Vue.use(MuseUI)
Vue.config.productionTip = false
// Vue.component(raisedButton.name, appBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
