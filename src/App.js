import React, { useEffect, useState } from 'react';
import './App.css'

import Cards from './components/Cards/Cards';
import Header from './components/Header/Header'
import Input from './components/Input/Input'

export default function App() {
  const [data, setData] = useState([])

  return (
    <div className='App'>
      <Header />
      <Input setData={() => setData()}/>
      <Cards data/>
    </div>
  )
}

