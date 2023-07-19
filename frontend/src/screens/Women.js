import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import "./Men-Women.css";
const Women = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      // Ensure data is an array
      const productsArray = Array.isArray(data) ? data : [];
      // Filter the products to get only men's clothes
      const filteredProducts = productsArray.filter(
        (product) => product.category.toLowerCase() === "women"
      );
      setMenProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="men-women">
      
      <div className="product-list">
        {menProducts.map((product) => (
          <Product
          key={product._id}
          imageUrl={product.imageUrl}
          description={product.description}
          price={product.price}
          name={product.name}
          id={product._id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Women;
