import React, { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { expensiveCalculation } from "./utils/helpers";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";

function App() {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState("all");
  
  // 🔴 MASALAH: expensiveCalculation dijalankan tiap render
  const filteredProducts = expensiveCalculation(products, filter);
  
  console.log("App render");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product Dashboard</h1>
      <FilterBar filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
components/FilterBar.jsx
jsx
import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  console.log("FilterBar render");
  return (
    <div>
      <button onClick={() => setFilter("all")} style={{background: filter === "all" ? "blue" : "gray"}}>
        All
      </button>
      <button onClick={() => setFilter("expensive")} style={{background: filter === "expensive" ? "blue" : "gray"}}>
        Expensive (&gt;$100)
      </button>
    </div>
  );
};

export default FilterBar;
components/ProductList.jsx
jsx
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  console.log("ProductList render");
  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(4,1fr)" }}>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
components/ProductItem.jsx
jsx
import React from "react";

const ProductItem = ({ product }) => {
  console.log(`ProductItem ${product.id} render`);
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <img src={product.image} alt={product.title} width={100} height={100} />
      <h4>{product.title.slice(0, 20)}...</h4>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
