import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
// @ts-ignore
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDYJegGlWMeoV3r2Psf6KfgAj6Gj5IAJ30',
        libraries: 'places'
    }
});
Vue.config.productionTip = false;
const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(componentName, componentConfig.default || componentConfig);
});
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
}).$mount('#app');
