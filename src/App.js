import React, { useState, useMemo } from "react";
import { useProducts } from "./hooks/useProducts";
import { expensiveCalculation } from "./utils/helpers";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";

function App() {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState("all");
  
  // ✅ useMemo: hanya hitung ulang jika products atau filter berubah
  const filteredProducts = useMemo(() => {
    console.log("Menjalankan expensiveCalculation");
    return expensiveCalculation(products, filter);
  }, [products, filter]);
  
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
