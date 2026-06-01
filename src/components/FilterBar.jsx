import React from "react";

const FilterBar = React.memo(({ filter, setFilter }) => {
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
});

export default FilterBar;
