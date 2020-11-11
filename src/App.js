import React, { useState, useEffect, useRef } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import FlashcardList from './FlashcardList';
import './App.css'
import DrinkList from './DrinkList';


function App() {
  // const [flashcards, setFlashcards] = useState([])
  // const [categories, setCategories] = useState([])
  // const { data, loading } = useQuery(DRINKS_QUERY);


  // const categoryEl = useRef()
  // const amountEl = useRef()

  function handleSubmit(e) {
    e.preventDefault()

  }

  
  return (
      <ApolloProvider client={client}>
        <div className="container">
          <h3>Drinks</h3>
          <DrinkList />
        </div>
      </ApolloProvider>
  );
}

{/* <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form> */}

export default App;
