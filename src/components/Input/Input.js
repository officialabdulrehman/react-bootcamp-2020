import React, { useEffect, useState } from 'react'

import {data} from '../../data/dummy'

export default function Input(props) {
  const { setData } = props
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  useEffect(() => {
    setData(data)
  },[query])

  return (
    <div className='Input'>
      <form onSubmit={onSubmitHandler}>
        <input value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
