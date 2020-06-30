/* eslint-disable */

import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import { createProvider } from "./vue-apollo";
import ToggleButton from "vue-js-toggle-button";
import VueMobileDetection from "vue-mobile-detection";
import VueAnalytics from "vue-analytics";
import VueHtml2Canvas from 'vue-html2canvas';
import SmoothScrollbar from 'vue-smooth-scrollbar'
Vue.use(SmoothScrollbar)
Vue.config.productionTip = false;

Vue.use(VueHtml2Canvas);
Vue.use(ToggleButton);
Vue.use(VueMobileDetection);
Vue.use(VueAnalytics, {
    id: "UA-165919387-2",
    router
});

new Vue({
    router,
    store,
    vuetify,
    apolloProvider: createProvider(),
    render: (h) => h(App),
}).$mount("#app");
