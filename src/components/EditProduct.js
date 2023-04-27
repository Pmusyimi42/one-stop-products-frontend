import React, { useState, useEffect } from 'react';

function EditProduct(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch(`/products/${props.productId}`)
      .then(response => response.json())
      .then(product => {
        setTitle(product.title);
        setDescription(product.description);
        setImageUrl(product.imageUrl);
        setPrice(product.price);
      })
      .catch(error => console.error(error));
  }, [props.productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdate(props.productId, title, description, imageUrl, price);
  };

  return (
    <div className='container'>
      <h2 className='p-2 text-lg font-semibold'>Edit Product Details</h2>
      <form onSubmit={handleSubmit} className='form-container items-center  flex flex-col mx-auto p-2 text-lg font-semibold'>
        <label className='flex gap-2'>
          Title:
          <input type="text" className='rounded-lg text-base font-normal' value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label className='flex gap-2'>
          Description:
          <input type="text" className='rounded-lg text-base font-normal' value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <label className='flex gap-2 '>
          Pictures:
          <input type="text" className='rounded-lg text-base font-normal' value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} />
        </label>
        <br />
        <label className='flex gap-2'>
          Price:
          <input type="number" className='rounded-lg text-base font-normal' value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <br />
        <div className='flex gap-4 mx-auto p-2'>
            <button type="submit" className='rounded-lg hover:bg-red-600 hover:text-white hover:font-semibold'>Save</button>
            <button type="button" className='rounded-lg hover:bg-red-600 hover:text-white hover:font-semibold' onClick={props.onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
