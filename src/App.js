import React, { useState, useMemo, useTransition } from "react"; // Tambah useTransition di sini
import { useProducts } from "./hooks/useProducts";
import { expensiveCalculation } from "./utils/helpers";
import FilterBar from "./components/FilterBar";
import ErrorBoundary from "./components/ErrorBoundary"; // Tambahkan import ErrorBoundary

// GANTI ProductList lama dengan ProductListSuspense untuk fitur Suspense
import ProductListSuspense from "./components/ProductListSuspense"; 

function App() {
  const { products, loading, error } = useProducts();
  const [filter, setFilter] = useState("all");
  
  // Inisialisasi useTransition untuk optimasi filter update (Tugas Praktek No. 3)
  const [isPending, startTransition] = useTransition();

  const filteredProducts = useMemo(() => {
    console.log("Menjalankan expensiveCalculation");
    return expensiveCalculation(products, filter);
  }, [products, filter]);

  console.log("App render");

  // Handler transisi agar perubahan filter tidak membuat aplikasi lag/freezing
  const handleFilterChange = (newFilter) => {
    startTransition(() => {
      setFilter(newFilter);
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // Beri efek opacity ketika transisi sedang loading agar UI lebih informatif
    <div style={{ padding: "2rem", opacity: isPending ? 0.6 : 1, transition: "opacity 0.2s" }}>
      <h1>Product Dashboard</h1>
      {isPending && <span style={{ color: "blue" }}>Memperbarui list produk...</span>}
      
      {/* Ubah setFilter menjadi handleFilterChange yang memakai transisi */}
      <FilterBar filter={filter} setFilter={handleFilterChange} />
      
      {/* Bungkus list dengan ErrorBoundary untuk menangkap error saat render */}
      <ErrorBoundary>
        <ProductListSuspense products={filteredProducts} />
      </ErrorBoundary>
    </div>
  );
}

export default App;