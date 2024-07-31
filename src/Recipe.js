import React from 'react'

const Recipe = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <ol>
            {props.ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient.text}
                </li>
            ))}
        </ol>
        <p>{props.calories} cal</p>
        <img src={props.image} alt="" />
    </div>
  )
}

export default Recipe