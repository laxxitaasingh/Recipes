import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { name } = useParams();

  // You would typically fetch item details using the `name` here.
  // For this example, we'll just display the name.
  return (
    <div>
      <h1>Item Detail</h1>
      <p>Item Name: {name}</p>
    </div>
  );
}

export default ItemDetail;
