import React, { useState, useEffect } from "react";

const ProductDetail = ({ productId }) => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [productId]);

  if (loading) return <div>Loading detail...</div>;
  if (error) return <div style={{ color: "orange" }}>Gagal load: {error} <button onClick={() => window.location.reload()}>Retry</button></div>;
  if (!detail) return null;
  
  return <div><strong>Detail:</strong> {detail.description?.slice(0, 100)}...</div>;
};

export default ProductDetail;
