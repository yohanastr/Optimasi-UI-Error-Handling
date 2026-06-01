import { useState, useEffect, useCallback } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi fetch dengan opsi simulasi error koneksi (Tugas Praktek No. 4)
  const fetchProducts = useCallback((shouldSimulateError = false) => {
    setLoading(true);
    setError(null);

    // Jika true, arahkan ke URL salah untuk memicu error catch
    const url = shouldSimulateError 
      ? "https://fakestoreapi.com/invalid-endpoint-for-error-simulation"
      : "https://fakestoreapi.com/products";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Ambil data pertama kali saat aplikasi dimuat (Ubah ke true jika ingin menguji UI Error)
  useEffect(() => {
    fetchProducts(false); 
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};