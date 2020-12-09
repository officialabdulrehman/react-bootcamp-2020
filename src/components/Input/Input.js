import React, { useEffect, useState } from 'react'

import {data} from '../../data/dummy'

export default function Input(props) {
  const { onSubmitHandler, onChangeHandler, query } = props
  return (
    <div className='Input'>
      <form onSubmit={onSubmitHandler}>
        <input  onChange={onChangeHandler}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
