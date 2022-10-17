import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const result = await fetch("http://localhost:3000/category");
    const response = await result.json();
    setCategory(response);
  };

  const deleteCategory = async (id: any) => {
    const del = await fetch(`http://localhost:3000/category/${id}`, {
      method: "Delete",
    });
    const response = await del.json();
    if (response) {
      getCategory();
    }
  };

  return (
    <div className="product-list">
      <h3>Category List</h3>
      <ul>
        <li>Name</li>
        <li>Operation</li>
      </ul>
      {category.map((item, value) => (
        <ul>
          <li>{item.name}</li>
          <li>
            <button onClick={() => deleteCategory(item.id)}>Delete</button>
            <Link to={"/update/" + item.id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CategoryList;
