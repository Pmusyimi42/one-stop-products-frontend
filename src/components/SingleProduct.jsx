import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'
import "./SingleProduct.css";
export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  const{id}= useParams()
  const [items, setItems]= useState(null)


  useEffect(()=>{
      fetch(`/product_categories/${id}`)
      .then((r)=>r.json())
      .then((post)=>{
          setItems (post)
      })


  },[id])
     

  return (
    <>
    {
      items?
      <div id="container">
      <div className="product-container">
        <img src={items.product.imageUrl} alt={items.product.title} />
        <div>
          <h2 className="title">{items.product.title}</h2>
          <h3>{items.product.price}</h3>
          <div className="quantity">
            <span>Qty:</span>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="description-container">
        <h2 className="description">Description</h2>
        <p>
        {items.product.description}
        </p>
      </div>
    </div>
    :null
  }
    </>

  );
}