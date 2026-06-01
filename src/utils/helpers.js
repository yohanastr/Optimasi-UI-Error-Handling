javascript
// simulasi komputasi berat
export const expensiveCalculation = (products, filter) => {
  console.log("⚠️ Komputasi berat berjalan...");
  let result = [...products];
  for (let i = 0; i < 10000000; i++) {} // delay simulasi
  if (filter === "expensive") {
    result = result.filter(p => p.price > 100);
  }
  return result;
};
hooks/useProducts.js
javascript
import { useState, useEffect } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Gagal fetch data");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
