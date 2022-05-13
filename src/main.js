import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/tailwind.css';
import './assets/styles/global.css';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './Stores/store';
import { registerGlobalComponent} from './Utils/import';
import i18n from './I18n/index';


const app = createApp(App);
registerGlobalComponent(app);
app.use(store);
app.use(router);
app.use(i18n);
app.use(Antd);
app.mount('#app');

