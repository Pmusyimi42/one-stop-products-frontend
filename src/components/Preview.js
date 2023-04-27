import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from "react-router-dom";

const Preview = ({productId}) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(()=>{
    fetch(`/products/${id}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    }
    )
    .then(res=>res.json())
    .then(response=>{
        setProduct(response)
        console.log(response)
    }
    )
}, [id]);
const product_id = product?.id;
console.log(product_id);


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <div className="mx-auto">
        <img
          className="object-contain h-40 w-40"
          src={product.imageUrl || 'https://via.placeholder.com/150'}
          alt="Product Preview"
        />
      </div>
      <div className="mx-8 mt-3 flex justify-between">
        <p className="mt-2 text-lg font-bold">{product.title || 'Product Name'}</p>
        <h1 className="text-2xl font-semibold text-red-600">{`$${product.price}` || '$0.00'}</h1>
      </div>
      <p className="mx-auto mt-2 p-6 text-sm font-light">{product.description || 'Product Description'}</p>
      <div className="p-4 flex justify-center gap-8 text-2xl text-white font-bold">
        <button className="bg-red-600 rounded-lg shadow-xl" type="button">Add Product</button>
        <button className="bg-red-600 rounded-lg shadow-xl" type="button">Edit</button>
      </div>
    </div>
  );
};

export default Preview;
