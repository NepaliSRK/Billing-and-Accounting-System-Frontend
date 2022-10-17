import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await fetch("http://localhost:3000/product");
    const response = await result.json();
    setProducts(response);
  };

  const deleteProduct = async (id: any) => {
    const del = await fetch(`http://localhost:3000/product/${id}`, {
      method: "Delete",
    });
    const response = await del.json();
    if (response) {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <ul>
        <li>Name</li>
        <li>Price</li>
        <li>Operation</li>
      </ul>
      {products.map((item, value) => (
        <ul>
          <li>{item.name}</li>
          <li>Nrs. {item.price}</li>
          <li>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
            <Link to={"/update/" + item.id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
