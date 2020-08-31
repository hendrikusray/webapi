import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes' //File routes.js
import App  from './components/App' //File App.vue
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';
import VueGoogleCharts from 'vue-google-charts'
 




axios.defaults.baseURL = 'http://127.0.0.1:8080/api'

Vue.use(Vuetify)
Vue.use(VueGoogleCharts)
Vue.use(VueRouter)
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes,

});

Vue.router = router
Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});
  
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
.$mount('#app');

