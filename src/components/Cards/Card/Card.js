import React from 'react';

export default function Card(props) {
  const { label, calories, image } = props.recipe.recipe
  console.log(props)
  return (
    <div className='card'>
      <div className='cardHead'>
        <h2>{label}</h2>
      </div>
      <div className='cardImage'>
        <img src={image}/>
      </div>
      <div className='cardBot'>
        <p>Calories: <span>{calories}</span></p>
      </div>
    </div>
  )
}