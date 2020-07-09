
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/HomeComponent.vue';
import Recipe from './components/RecipeComponent.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/recettes',
        component: Recipe
    },
]

const router = new VueRouter({routes});



const app = new Vue({
    el: '#app',
    router: router
});
