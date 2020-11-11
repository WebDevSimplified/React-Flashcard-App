import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import FlashcardList from './FlashcardList';


const DRINKS_QUERY = gql`
    {
      allDrinks {
        data {
          name
          ingredients {
            data {
              name
              amount
            }
          }
        }
      }
    }
  `

  function DrinkList() {
    const [drinks, setDrinks] = useState([]);
    const { data, loading } = useQuery(DRINKS_QUERY);

    useEffect( () => {
      if ( data && !loading) setDrinks(data.allDrinks.data);
    }, [data, loading])

    if (drinks) console.log(drinks);
    
    if (loading) {
      return 'loading...'
    }
    return (
      <FlashcardList flashcards={drinks} />
    )
  }

  export default DrinkList;