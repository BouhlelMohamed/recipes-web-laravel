<template>
    <div class="container">
        <div class="row justify-content-center">
            <h1>Recipes</h1>
            <a v-for="recipe in recipes.data" :key="recipe.id" href="">
                {{ recipe.name }}
            </a>
            <pagination :data="recipes" @pagination-change-page="getResults"></pagination>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                recipes: {}
            }
        },

        created() {
            axios.get('http://127.0.0.1:8000/recipesList')
            .then(response => this.recipes = response.data )
            .catch(error => console.log(error.response) )
        },
        
	    methods: {
            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                axios.get('http://127.0.0.1:8000/recipesList?page=' + page)
                    .then(response => {
                        this.recipes = response.data;
                    });
                }
	    },
    }
</script>
