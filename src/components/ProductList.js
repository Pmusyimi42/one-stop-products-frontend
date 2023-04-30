import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import EditProduct from './EditProduct';

function ProductList() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showActions,setShowActions] = useState(false)
  const [editProductId, setEditProductId] = useState(false);



  useEffect(() => {
    setLoading(true);
    fetch(`/products?_page=${currentPage}&perPage=5&sort=-createdAt`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setTotalPages(data.totalPages);
        setCurrentPage(1); // Reset currentPage to 1 after fetching sorted products
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, []);

  function handlePrevPage() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage(prevPage => prevPage + 1);
  }
  const handleUpdateProduct = (productId, title, description, imageUrl, price) => {
    const productToUpdate = { title, description, imageUrl, price };
    fetch(`/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productToUpdate),
    })
      .then((response) => response.json())
      .then((updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditProductId(false);
      })
      .catch((error) => console.error(error));
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
  };

  const handleMouseEnter = () => {
    setShowActions(true);
  };

  const handleMouseLeave = () => {
    setShowActions(false);
  };

  function handleDelete(product) {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(`/products/${product.id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          setProducts(prevProducts => prevProducts.filter(p => p.id !== product.id));
        } else {
          console.log('Error deleting product');
        }
      })
      .catch(error => {
        console.log(error);
        alert('Failed to delete product');
      });
    }
  }
  
  
 
  return (
    

    <div className="p-2 overflow-x-scroll  h-screen">
      <p>Products Preview</p>
    {loading && <div className="p-4">Loading products...</div>}
    {error && <div className="p-4">Error loading products: {error}</div>}
    {!loading && !products.length && <div className="p-4">No products found</div>}<div>
      {products.map(product => (
         <div key={product.id} className=" flex flex-col bg-zinc-300 hover:bg-zinc-100 hover:font-semibold  rounded-lg shadow-md p-2 mb-4" onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
          <img className="h-24 w-24" src={product.imageUrl} alt={product.name}/>
          <h1 className="text-xl font-bold mb-2">{product.title}</h1>
          <p className="font-semibold mb-2">Price: <span className='text-red-600'>${product.price}</span></p>
          <p className="text-gray-700 font-light mb-2">{product.description}</p>
              {showActions && (
                <div className=''>
                  <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>{
                      e.stopPropagation()
                      navigate(`/products/${product.id}`)
                  }}>
                      View
                  </button> 
                  <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>
                    handleDelete(product)
                  }>
                    Delete
                  </button>  
                  <button className="hoverleft hover:bg-green-600 mx-2 rounded-lg p-2 hover:text-white" onClick={()=>handleEditProduct(product.id)}>
                    Update
                  </button>
                </div>

              )}
              <div>
              {editProductId &&
                <EditProduct
                  productId={editProductId}
                  onUpdate={handleUpdateProduct}
                  onCancel={() => setEditProductId(null)}
                />
              }
            </div>
          </div>

          ))
          }

      </div>
      <div className="flex justify-between">
        <button
          className={`bg-gray-200 rounded-md px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`bg-gray-200 rounded-md px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
