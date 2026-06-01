import React from "react";

const SkeletonLoader = () => {
  return (
    <div style={{ border: "1px solid #eee", padding: "1rem", background: "#f5f5f5" }}>
      <div style={{ width: "100%", height: 100, background: "#ddd", marginBottom: "0.5rem" }}></div>
      <div style={{ width: "80%", height: 16, background: "#ddd", marginBottom: "0.5rem" }}></div>
      <div style={{ width: "40%", height: 16, background: "#ddd" }}></div>
    </div>
  );
};

export default SkeletonLoader;
