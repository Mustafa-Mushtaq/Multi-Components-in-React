import LaptopShelf from "../LaptopShelf/LaptopShelf";
import "./ElectronicsSection.css";
import { useState } from "react";

const ElectronicsSection = ({ goBack, visitCount, laptopCount, incrementLaptopCount }) => {
  const [showLaptopShelf, setShowLaptopShelf] = useState(false);

  return (
    <div className="section">
      <h2>🔌 Electronics Section</h2>
      <p>Visited: {visitCount} times</p>
      <button onClick={goBack} className="backButton">⬅️ Back to Main Store</button>

      {!showLaptopShelf && (
        <button onClick={() => { incrementLaptopCount(); setShowLaptopShelf(true); }} className="button">
          💻 Go to Laptop Shelf
        </button>
      )}

      {showLaptopShelf && (
        <LaptopShelf goBack={() => setShowLaptopShelf(false)} visitCount={laptopCount} />
      )}
    </div>
  );
};

export default ElectronicsSection;
