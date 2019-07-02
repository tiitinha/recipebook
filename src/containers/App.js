import React, { Component } from 'react';
import '../styles/App.css';
import RecipeBook from './recipebook.js'
import Search from '../components/search.js'
import Tabs from './Tabs';
require('../styles/style.css');

class App extends Component {

  constructor() {
    super();
    this.state = {
      recipes: [{name:"", cookingTime:"", course:"", ingredients:[{ingtedientName:"", ingtedientUnit:"", ingredientAmount:""}], directions:"", tags:[{tag:""}]}],
      searchField: ''
    };
  }

  addToRecipeBook = (event) => {
    this.setState((prevState) => ({
      recipes:[...prevState, {name:"", cookingTime:"", course:"", ingredients:[{ingtedientName:"", ingtedientUnit:"", ingredientAmount:""}], directions:"", tags:[{tags:""}]}]
    }));
    console.log("adding to the recipe book");
  }

  addIngredientToRecipe = (event) => {
    console.log("raaka-aine lisätty");
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    console.log("submit");
    }

  handleChange = (e) => {
    let recipes = [...this.state.recipes];
    if (["name", "cookingTime", "course", "directions"].includes(e.target.className)) {
      recipes[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ recipes }, () => console.log(this.state.recipes))
    } else if (["ingredients", "tags"].includes(e.target.className)){
      recipes[e.target.dataset.id][e.target.className][e.target.id] = e.target.value;
      this.setState({ recipes }, () => console.log(this.state.recipes))
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {recipes, searchField} = this.state;

    const filteredRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchField.toLowerCase);
    })

    return (
      <div className = "App">
        <Tabs>
          <div label = "Search">
            <h1> Recipe book </h1>
            <Search searchChange = {this.onSearchChange}/>
            <RecipeBook recipes = {filteredRecipes}/>
          </div>
          <div label = "Add">
            <h1>Add your own recipe</h1>
            <form type = 'text' onSubmit = {this.handleSubmit} onChange = {this.onChange}>
              <p>Name:</p>
                <input 
                  className='name'
                  type='text' 
                  placeholder='Name'
                  id='name'
                />
                <br/>
              <p>Cooking time</p>
                <input 
                  className='cookingTime'
                  type='text' 
                  placeholder='Cooking time (minutes)'
                  id='cookingTime'
                />
                <br/>
              <p>Course</p>
                <input 
                  className='course'
                  type='text' 
                  placeholder='Course'
                  id='course'
                />
                <br/>

              <p>Ingredients</p>
                <input 
                  className='ingredients'
                  type='text' 
                  placeholder='Ingredient'
                  id='ingredientName'
                />
                <input 
                  className='ingredients'
                  type='text' 
                  placeholder='Amount'
                  id='ingredientAmount'
                />
                <input 
                  className='ingredients'
                  type='text' 
                  placeholder='Unit'
                  id='ingredientUnit'
                />
                <br/>
                <button onClick = {this.addIngredientToRecipe}>
                  Add ingredient
                </button>
                <br/>
              <p>Directions</p>
                <input 
                  className='recipeDirections'
                  type='addField' 
                  placeholder='Directions'
                  id='recipeDirections'
                />
                <br/>
              <p>Tags</p> 
                <input 
                  className='recipeTags'
                  type='addField' 
                  placeholder='Tags, separate with a comma'
                />
                <br/>
                <br/>
              <input type = 'submit' value = 'Add recipe'/>
            </form>
          </div>
          <div label = "Scroll">
            <p>Scroll through the recipes</p>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;
