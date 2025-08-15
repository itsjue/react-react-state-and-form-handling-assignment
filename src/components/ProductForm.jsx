import { useState } from "react";

function ProductForm() {

  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [price,setPrice] = useState({})
  const [description,setDescription] = useState("")
  const [email,setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false);

function submitHandle(e){
    e.preventDefault()
    setSubmitted(true);

    let hasError = false;

    if (!name.trim()){
      hasError = true;
    }
    if(!image.trim()){
      hasError = true;
    }
    if(!price.trim()){
      hasError = true;
    }
    if(!description.trim()){
      hasError = true;
    }
    if(!image.trim()){
      hasError = true;
    }
    
    !hasError && alert(
      `Name: ${name}
      Price: ${price}
      Image: ${image}
      Description: ${description}
      Email: ${email}`
      ); 

 
}

  return (
    <form className="post-form" onSubmit={submitHandle}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Enter name here"
            onChange={(e) => setName(e.target.value)}
          />
          {submitted && !name && <p className="text-red-500 text-sm">Name is required</p> }
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={image}
            placeholder="Enter image url here"
            onChange={(e) => setImage(e.target.value)}
          />
          {submitted && !image && <p className="text-red-500 text-sm">Image is required</p>}
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
          />
          {submitted && price && price < 0 && <p className="text-red-500 text-sm">Price cannot be less than 0.</p>}
          {submitted && !price && <p>Price is required</p>}
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
          />
          {submitted && !description && <p>Description is required</p>}
        </label>
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(e) => setEmail(e.target.value)}
          />
          {submitted && !email && <p>Email is required</p>}
          {submitted && email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
          <p className="text-red-500 text-sm">Invalid email format.</p>}
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;