
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.component('pagination', require('laravel-vue-pagination'));
//Vue.component('add-recipe', require('./components/Recipe/AddRecipeComponent.vue').default);

import Home from './components/HomeComponent.vue';
import Recipe from './components/Recipe/RecipeComponent.vue';
import AddRecipe from './components/Recipe/AddRecipeComponent.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/recettes',
        component: Recipe
    },    
    {
        path: '/ajouter-une-recette',
        component: AddRecipe
    },
]

const router = new VueRouter({routes});



const app = new Vue({
    el: '#app',
    router: router
});
