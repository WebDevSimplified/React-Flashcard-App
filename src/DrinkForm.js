import React, { useState, useRef } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import IngredientsInput from './IngredientsInput';

const CREATE_DRINK = gql`
  mutation CreateDrink(
    $name: DrinkInput!
    $ingredients: DrinkIngredientsRelation!
  ) {
    createDrink(data: {
      name: $name
      ingredients: {
        create: $ingredients
      }
    }) {
      name
      ingredients {
        name
        amount
      }
    }
  }
`

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

function DrinkForm() {

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm( prev => !prev );
  
  const [drinkName, setDrinkName] = useState('');

  const [ingredients, setIngredients] = useState([{name: '', amount: 1}]);

  const addIngredient = e => {
    e.preventDefault();
    setIngredients([...ingredients, {name: '', amount: 1}]);
  }

  const [createItem, { loading }] = useMutation(CREATE_DRINK, {
    refetchQueries: [{ query: DRINKS_QUERY }],
    onCompleted: () => {
      setDrinkName('');
      setShowForm(false);
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    const variables = {
      name: drinkName,
      ingredients: ingredients
    }
    console.log(variables)
  }

  const handleChange = e => {
    const inputType = e.target.name.split('-')[0];

    switch (inputType) {
      
      case 'drink':
        setDrinkName(e.target.value);
        break;

      case 'name':
      case 'amount':
        if (['name', 'age'].includes(e.target.className) ) {
          let updatedArray = [...ingredients];
          updatedArray[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase();
          setIngredients(updatedArray);
        } else {
          setIngredients({ [e.target.name]: e.target.value.toUpperCase() })
        }
        
        console.table(ingredients);
        setIngredients(ingredients);
        break;

      default:
        return
    }
    
  }

  if (showForm) {
    return (
      <form className="header" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <label htmlFor="drink">Add Drink</label>
          <input type="text" id="drink" name='drink' value={drinkName} />
        </div>
        <IngredientsInput ingredients={ingredients} handleChange={handleChange} />
        <div className="form-group">
          <button className="btn" onClick={addIngredient}>Add Ingredient</button>
        </div>
        <div className="form-group">
          <button className="btn" onClick={handleSubmit}>Add Drink</button>
        </div>
      </form>
    );
  }

  return (
    <div className='form-group top-marg'>
      <button className='btn' onClick={toggleForm}>Add Drink</button>
    </div>
  );
}

export default DrinkForm;