import React, { useState } from 'react';
import './App.css';

function NewShopForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(name) || !isNaN(description)) {
      alert('Please enter valid input!');
      return;
    }
    console.log(`Name: ${name}, Description: ${description}`);
    setSubmitted(true);
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading text-center">New Shop</h2>
      <hr />
      <label>
        Name:
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-center" placeholder="(e.g. Ricardo's Shop)" />
      </label>
      <br />
      <label>
        Description:
        <br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="text-center" placeholder="(e.g. Clothing store)" />
      </label>
      <br />
      {submitted ? (
        <p className="form-message">Submitted successfully. Now, fill the form below.</p>
      ) : (
        <>
          <button className="form-submit-btn" type="submit">Submit</button>
          <button className="form-cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
        </>
      )}
    </form>
  );
}

function NewProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(name) || !isNaN(description) || isNaN(quantity) || isNaN(price)) {
      alert('Please enter valid input!');
      return;
    }
    console.log(`Name: ${name}, Description: ${description}, Category: ${category}, Quantity: ${quantity}, Price: ${price}`);
    setSubmitted(true);
  };

  const handleCancel = () => {
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading text-center">New Product</h2>
      <hr />
      <label>
        Name:
        <br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-center" placeholder="(e.g. T-shirt)" />
      </label>
      <br />
      <label>
        Description:
        <br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="text-center" placeholder="(e.g. Red T-shirt)" />
      </label>
      <br />
      <label>
        Category:
        <br />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="text-center" placeholder="(e.g. Clothing)" />
      </label>
      <br />
      <label>
        Quantity:
        <br />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="text-center" placeholder="(e.g. 20)" />
      </label>
      <br />
      <label>
        Price:
        <br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="text-center" placeholder="(e.g. 3.99)" />
      </label>
      {submitted ? (
        <p className="form-message">Well done. Submitted successfully!</p>
      ) : (
        <>
          <br />
          <button className="form-submit-btn" type="submit">Submit</button>
          <button className="form-cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
        </>
      )}
    </form>
  );
}

export default function App() {
  return (
    <>
      <NewShopForm />
      <NewProductForm />
    </>
  );
}
