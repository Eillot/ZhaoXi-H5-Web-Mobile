import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/main.css'
import 'amfe-flexible'
import "./style/index.css"
import { NavBar } from 'vant';

const app = createApp(App)
app.use(Vant);
app.use(router)
app.use(NavBar)
app.mount('#app')





