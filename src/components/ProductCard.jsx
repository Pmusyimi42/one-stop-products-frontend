import React, {useState} from "react";
import { useHistory} from "react-router-dom";






function ProductCard ({item,key}){
   const history = useHistory()
   const [showActions,setShowActions] = useState(false)


   

  return(
    
    <div className="col-md-3 mb-5"  onClick={()=>{
        history.push(`/product_categories/${item.id}`) 
   }} onMouseEnter ={()=> setShowActions(true)} onMouseLeave ={()=> setShowActions(false)}>
   
   <div className="card h-100 text-center p-4" key={item.id}>
        <img src={item.product.imageUrl} className="card-img-top" alt={item.product.title} height="500px"/>
         <div className="card-body">
            <h5 className="card-title mb-0">{item.product.title}</h5>
            <p className="card-text lead fw-bold">${item.product.price}</p>
         </div>
         <div className="card-body">
           {showActions? <p className="card-text" style={{marginTop:"5px"}}></p> :null}
           {showActions?
           <button className="hoverleft" onClick={(e)=>{
               e.stopPropagation()
               e.preventDefault()
               history.push(`/products/${item.id}`)
           }}>
               Add to cart
           </button>
           :null}
        </div>


       
           {/* {showActions?
           <button className="hover" onClick={(e)=> {
               e.stopPropagation()
               fetch(`http://localhost:9292/properties/${item.id}`,{
                   method:"DELETE"
               })
               .then ((res)=> res.json())
               .then(data=>{
               })
               handleDelete(item)
           }}>Delete</button>
           :null} */}

       </div>
     </div>
   
  )
}
export default ProductCard



