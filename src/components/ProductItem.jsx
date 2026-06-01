import React, { useState } from "react"; // 1. Tetap import useState di sini
import ProductDetail from "./ProductDetail"; // 2. Pastikan ProductDetail di-import

const ProductItem = React.memo(({ product }) => {
  console.log(`ProductItem ${product.id} render`);

  // 3. State showDetail diletakkan di sini (sebelum return)
  const [showDetail, setShowDetail] = useState(false);

  // Tambahan simulasi error dari Step 3.5 (jika Anda masih memakainya)
  // if (product.price > 200) {
  // throw new Error("Simulasi error untuk produk mahal!");
  //}

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <img src={product.image} alt={product.title} width={100} height={100} />
      <h4>{product.title.slice(0, 20)}...</h4>
      <p>${product.price}</p>
      
      {/* 4. POTONGAN KODE TOMBOL DI MASUKKAN DI SINI (Di dalam return, di bawah paragraf harga) */}
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Sembunyikan Detail" : "Toggle Detail"}
      </button>
      
      {/* Kondisional rendering untuk menampilkan komponen ProductDetail */}
      {showDetail && <ProductDetail productId={product.id} />}
    </div>
  );
});

export default ProductItem;