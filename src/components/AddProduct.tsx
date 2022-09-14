import React from "react";

const AddProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const addProduct = async () => {
    console.log(name, price, category);

    let result = await fetch("http://localhost:3000/product", {
      method: "post",
      body: JSON.stringify({ name, price, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <div className="product">
      <h1>Add Producct</h1>
      <input
        type="text"
        placeholder="Product Name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Product Price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Product Category"
        className="inputbox"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button onClick={addProduct} className="inputbox">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
