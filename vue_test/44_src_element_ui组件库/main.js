import Vue from 'vue';
// 全量引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';
// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})