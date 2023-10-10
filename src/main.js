import { createApp } from 'vue'
import App from './App.vue'
import css1 from '@/css/app.css'
import css2 from '@/css/bootstrap.css'
import router from './router'
import store from './store'

createApp(App).use(css1).use(css2).use(store).use(router).mount('#app');
