import React from "react";

export default function Card({ recipe }) {
  // the repice prop sent from App.js is recived and deconstructed for easy use in component

  // hit F12, or right click page and select "inspect" to open developer tools in the broswer. Select "console" and look at the recipe object
  console.log(recipe); // prints to the console

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <h5>{recipe.cuisineType}</h5>
      <a href={recipe.url} className="button">
        To recipe
      </a>
    </div>
  );
}
