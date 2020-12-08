import React from 'react';

export default function Card(props) {
  const { cardData } = props
  console.log(props)
  return (
    <div className='card'>
      <h1>Hello</h1>
      <p>{cardData.email}</p>
    </div>
  )
}