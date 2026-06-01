import React, { Suspense } from "react";
import SkeletonLoader from "./SkeletonLoader";

// Lazy load komponen berat
const LazyProductItem = React.lazy(() => import("./ProductItem"));

const ProductListSuspense = ({ products }) => {
  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(4,1fr)" }}>
      {products.map(product => (
        <Suspense key={product.id} fallback={<SkeletonLoader />}>
          <LazyProductItem product={product} />
        </Suspense>
      ))}
    </div>
  );
};

export default ProductListSuspense;
