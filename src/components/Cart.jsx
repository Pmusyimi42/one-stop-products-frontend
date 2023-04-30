import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {BiMessageAdd} from 'react-icons/bi'
import {BiCommentMinus} from 'react-icons/bi'

function Cart({cart,changeQuantity,removeFromCart}) {
    
  

  return (

    <div>
        <h1>
            CART
        </h1>
        <div>
            {cart.map((cart_item,index) =>{
                return <CartItem product= {cart_item} key ={index} removeFromCart={removeFromCart} changeQuantity={changeQuantity}/>
            })}
        </div>
    </div>
  )
}


function CartItem({product, changeQuantity, removeFromCart}) {

    return (
        <div className="cart-products">
            <Product id={product.product_id} quantity={product.quantity} item_id={product.id} removeFromCart={removeFromCart} changeQuantity={changeQuantity}/>
            
        </div>
    )
}

function Product({id,quantity, item_id,removeFromCart, changeQuantity}){
    const [product, setProduct] = useState(null)
    useEffect(() =>{
        fetch(`/products/${id}`)
         .then((response) => response.json())
         .then((data) => {
            setProduct(data)
         })
    },[]);

    return(
        
        <>
        { product && 
        <div className='max-w-lg'>
        <h1 className=''>{product.title}</h1>
        <img src={product.imageUrl}  className='h-24' alt="" />
        <div className='grid grid-cols-2'>
            <h2>Quantity</h2>
            <h2>Total Price</h2>
            <h2>
            <span>{quantity}</span>
            <button className='p' onClick={() =>{
                changeQuantity(quantity+1,item_id)
            }}><BiMessageAdd /></button>
            <button className='p' onClick={() =>{
                if (quantity>1) {
                    changeQuantity(quantity-1, item_id)
                }
            }}><BiCommentMinus /></button>


            </h2>
            <h2>{quantity * parseFloat(product.price)}</h2>
        </div>
        <div>
            <button className='py-1 px-4 rounded'  style={{background:"orange"}}onClick={() =>{
                fetch(`/cart_items/${item_id}`,{
                    method: "DELETE",
                   })
                   .then((res) => res.json())
                   .then((data) => {
                    removeFromCart(item_id)
                   })
            }}>Remove from cart</button>
        </div>
    </div>

        }
        </>
        
    )
}

export default Cart