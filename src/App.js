import React, { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'

import Cards from './components/Cards/Cards';
import Header from './components/Header/Header'
import Input from './components/Input/Input'

//import { APP_KEY, APP_ID } from './sensitive'

export default function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Add your values below and remove bottom comments

  //APP_KEY = ''
  //APP_ID = ''

  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        .then((response) => {
          console.log(response);
          setSearch('')
          setQuery('')
          setRecipes(response.data.hits);
        })
        .catch(err => console.log('ERROR', err))
    }
    console.log("render");
  }, [search]);

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearch(query);
  };

  return (
    <div className='App'>
      <Header />
      <Input 
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
        query={query}
      />
      <Cards recipes={recipes} />
    </div>
  )
}

