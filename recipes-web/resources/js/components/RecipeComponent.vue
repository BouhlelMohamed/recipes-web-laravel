<template>
    <div class="container">
        <div class="row justify-content-center">
            <h1>Recipes</h1>
            <a v-for="recipe in recipes" :key="recipe.id" href="">
                {{ recipe.name }}
            </a>
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
        
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
