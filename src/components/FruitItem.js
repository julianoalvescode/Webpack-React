import React from 'react';


const FruitItem = ({fruit, onDelete}) => (
  <li >
      {fruit}
      <i onClick={onDelete} class="fas fa-minus-circle"></i>
  </li>
);

export default FruitItem;

