import React from 'react';
import '../styles/ProductCard.scss';

function ProductCard({ items }) { 
  return (
    <div className='card'>
      {items.map(item => (
        <div key={item.id} className="product-item">
          <img src={item.image} />
          <p>
            {item.name}
          </p>
          <p>
            {item.price}
          </p>
          
        </div>
      ))}
      <div>
        {}
      </div>
    </div>
  );
}

export default ProductCard;
