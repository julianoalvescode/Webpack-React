import React from 'react';


const FruitItem = ({fruit, onDelete}) => (
  <li >
      {fruit}
      <button onClick={onDelete} type="button">Remover</button>
  </li>
);

export default FruitItem;
