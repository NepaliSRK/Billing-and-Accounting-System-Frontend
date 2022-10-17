import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    const result = await fetch(`http://localhost:3000/product/${params.id}`);
    const response = await result.json();
    setName(response.name);
    setPrice(response.price);
  };

  const updateProduct = async () => {
    const result = await fetch(
      `http://localhost:3000/product/:id/${params.id}`,
      {
        method: "Patch",
        body: JSON.stringify({ name, price }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await result.json();
    console.log(response);
    navigate("/ProductList");
  };

  return (
    <div className="product">
      <h1>Update Producct</h1>
      <input
        type="text"
        placeholder="Update Name"
        className="inputbox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Update Price"
        className="inputbox"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button onClick={updateProduct} className="inputbox">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
