import React, { Component } from 'react';
import Recipe from '../components/recipe.js'

class RecipeBook extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    const recipes = this.props.recipes;
    const field = "";

    if (recipes.length > 0) {
      field = <div>Recipes found {recipes.length}</div>
    }
    return(
      <p>
        {field}
        {
          recipes.map((recipe, i) => {
            return(
              <Recipe
                name = {recipes[i].name}
                cookingTime = {recipes[i].cookingTime}
                coures = {recipes[i].course}
                ingredients = {recipes[i].ingredients}
                directions = {recipes[i].directions}
                tags = {recipes[i].tags}
              />
            );
          })
        }
        <Recipe></Recipe>
      </p>
    )
  }
}

export default RecipeBook;