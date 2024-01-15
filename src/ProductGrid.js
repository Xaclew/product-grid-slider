// ProductGrid.js
import React, { useState } from 'react';
//import PriceFilter from './PriceFilter';
import products from './products';
import ProductCard from './productCard';
import Slider from './sliderFilter';

const ProductGrid = () => {
  const highPrice = Math.max(...products.map(p => p.price)); 
  //const lowPrice = Math.min(...products.map(p => p.price));
  const [maxPrice, setMaxPrice] = useState(highPrice);
  const [sortType, setSortType] = useState('nameAscending');

  
  
  
  const handlePriceSort = (e) =>  {setSortType(e.target.value)};
  
  



 // const filteredProducts = products.filter(product => product.price <= maxPrice);

  

  const sortedProducts = [...products].sort((a,b) => {
    switch(sortType) {
      case "priceAscending" : return a.price - b.price;
      case "priceDescending" : return b.price - a.price;
      case "nameAscending" : return a.name.localeCompare(b.name);
      case "nameDescending" : return b.name.localeCompare(a.name);
      default: return 0;
    }
}).filter(product => product.price <= maxPrice);

  /*const handlePriceChange = (price) => {
    setMaxPrice(price)
  };*/

  return (
    <div>
      {/* <PriceFilter onPriceChange={handlePriceChange} /> */}
      <Slider onChange={(e)=>setMaxPrice(e.target.value)} value={maxPrice} min={0} max={highPrice}/>
      <div className='sort=container'> 
      <label htmlFor='sort'>Sort By</label>
      <select id='sort' value={sortType} onChange={
        handlePriceSort
      }>
        <option value="priceAscending">Price: Low - High</option>
        <option value="priceDescending">Price: High - Low</option>
        <option value="nameAscending">Name A - Z</option>
        <option value="nameDescending">Name Z - A</option>
      </select>
      </div>
      <div className="products">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
