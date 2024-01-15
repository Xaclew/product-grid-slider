import React from "react";

const ProductCard = ({product}) => { 
return (    
    <div className ="product-card">
        <img src={product.imgUrl} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    </div>
)
}
export default ProductCard;
