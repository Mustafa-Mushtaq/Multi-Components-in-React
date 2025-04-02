import React from "react";
import "./LaptopShelf.css";


const LaptopShelf = ({ goBack, visitCount }) => {
  return (
    <div className="section">
      <h2>💻 Laptop Shelf</h2>
      <p>Visited: {visitCount} times</p>
      <button onClick={goBack} className="button">⬅️ Back to Electronics</button>
    </div>
  );
};

export default LaptopShelf;
