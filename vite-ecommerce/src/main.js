
import './style.css'
import {createApp} from 'vue';
import App from './App.vue';
import router from './router/index';
import {store} from './store/index1';



createApp(App)
.use(router)
.use(store)
.mount('#app')

