import Vue from 'vue';
import Router from 'vue-router';


import App from './pages/App.vue';
import Prepare from './pages/Prepare.vue';
import Design from './pages/Design.vue';
import HtmlAndCss from './pages/HtmlAndCss.vue';
import JavaScript from './pages/JavaScript.vue';

Vue.use(Router);

const router = new Router({
	routes: [
		{path: '/', component: App},
		{path: '/Prepare', component: Prepare},
		{path: '/Design', component: Design},
		{path: '/HTML+CSS', component: HtmlAndCss},
		{path: '/JavaScript', component: JavaScript},
	]
})

new Vue({
  el: '#app',
  router: router
});
