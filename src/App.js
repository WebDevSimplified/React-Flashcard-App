import React, { useState, useEffect, useRef } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import './App.css'
import DrinkList from './DrinkList';
import DrinkForm from './DrinkForm';


function App() {
  // const [flashcards, setFlashcards] = useState([])
  // const [categories, setCategories] = useState([])
  // const { data, loading } = useQuery(DRINKS_QUERY);


  const categoryEl = useRef()

  function handleSubmit(e) {
    e.preventDefault()

  }

  
  return (
      <ApolloProvider client={client}>
        <DrinkForm />
          {/* <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" ref={categoryEl}>
              {categories.map(category => {
                return <option value={category.id} key={category.id}>{category.name}</option>
              })}
            </select>
          </div> */}
        <div className="container">
          <h3>Drinks</h3>
          <DrinkList />
        </div>
      </ApolloProvider>
  );
}

export default App;
