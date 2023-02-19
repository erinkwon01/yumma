import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientInput(props){
    const {
        id, value, handler, placeholder
      } = props;
    return (
        <div>
        <input
          key={id}
          value={value}
          onChange={handler}
          placeholder={placeholder}
        />
        </div>
    );
}

IngredientInput.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  };