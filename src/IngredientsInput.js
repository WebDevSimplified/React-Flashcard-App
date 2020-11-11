import React from 'react';

function IngredientsInput({ingredients}) {
  return ingredients.map( (ingredient, idx) => {
    const nameId = `name-${idx}`;
    const amountId = `amount-${idx}`;

    return (
      <div key={idx}>
        <div className='form-group'>
          <label htmlFor={nameId}>Ingredient {idx + 1}</label>
          <input
            type='text'
            name={nameId}
            data-id={idx}
            id={nameId}
            value={ingredient.name}
            className='ingredient-name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor={amountId}>Amount</label>
          <input
            type='number'
            name={amountId}
            data-id={idx}
            id={amountId}
            value={ingredient.amount}
            className='ingredient-amount'
            step='0.25'
            min='0.25'
          />
        </div>
      </div>
    );
  });
}

export default IngredientsInput;