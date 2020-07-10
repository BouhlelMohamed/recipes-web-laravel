<template>
    <div class="container">
        <div class="row justify-content-center">
            <h1>Add Recipe</h1>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control"  v-model="recipe.name" placeholder="Nom">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="recipe.description" placeholder="description">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="recipe.number_of_person" placeholder="Combien de personne">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="recipe.cooking_time" placeholder="Temps de cuisson">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="recipe.preparation_time" placeholder="Temps de preparation">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="addRecipe">Ajouter</button>
                </form>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                recipe: {
                    name : '',
                    description: '',
                    number_of_person: '',
                    cooking_time: '',
                    preparation_time: ''
                }
            }
        },
        
	    methods: {
            addRecipe() {
                    axios.post('http://127.0.0.1:8000/addRecipe',{
                        name: this.recipe.name,
                        description: this.recipe.description,
                        number_of_person: this.recipe.number_of_person,
                        cooking_time: this.recipe.cooking_time,
                        preparation_time: this.recipe.preparation_time,
                    })
                    .then(response => {
                        console.log(response)
                    }).catch(error => {
                        console.log(error.response)
                    });
            }
        },
    }
    
</script>
