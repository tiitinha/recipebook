import React, { Component } from 'react';

class Recipe extends Component{

  constructor(name, cookingTime, course, ingredients, directions, tags) {
    super();
  }

  render() {
    return(
      <div>
        <h3>{this.name}</h3>
        <p>{this.cookingTime}</p>
        <p>{this.course}</p>
        <p>{this.ingredients}</p>
        <p>{this.directions}</p>
      </div>
    )
  }
}

export default Recipe;