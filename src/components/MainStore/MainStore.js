import { useState, useEffect } from "react";
import ElectronicsSection from "../ElectronicsSection/ElectronicsSection";
import ClothingSection from "../ClothingSection/ClothingSection";
import "./MainStore.css";

const MainStore = () => {
  const getStoredCount = (key) => parseInt(localStorage.getItem(key)) || 0;

  const [electronicsCount, setElectronicsCount] = useState(() => getStoredCount("electronicsCount"));
  const [clothingCount, setClothingCount] = useState(() => getStoredCount("clothingCount"));
  const [laptopCount, setLaptopCount] = useState(() => getStoredCount("laptopCount"));

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [view, setView] = useState("main");

  useEffect(() => {
    localStorage.setItem("electronicsCount", electronicsCount);
    localStorage.setItem("clothingCount", clothingCount);
    localStorage.setItem("laptopCount", laptopCount);
    localStorage.setItem("darkMode", darkMode);
  }, [electronicsCount, clothingCount, laptopCount, darkMode]);

  const incrementElectronicsCount = () => setElectronicsCount((prev) => prev + 1);
  const incrementClothingCount = () => setClothingCount((prev) => prev + 1);
  const incrementLaptopCount = () => setLaptopCount((prev) => prev + 1);

  const resetCounts = () => {
    setElectronicsCount(0);
    setClothingCount(0);
    setLaptopCount(0);
    localStorage.clear();
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <h1>🏬 Welcome to the Modern Store</h1>
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {view === "main" && (
        <div className="card-grid">
          <StoreCard
            title="🔌 Electronics Section"
            count={electronicsCount}
            onClick={() => {
              incrementElectronicsCount();
              setView("electronics");
            }}
          />
          <StoreCard
            title="👕 Clothing Section"
            count={clothingCount}
            onClick={() => {
              incrementClothingCount();
              setView("clothing");
            }}
          />
          <button onClick={resetCounts} className="reset-button">
            🔄 Reset All Counts
          </button>
        </div>
      )}

      {view === "electronics" && (
        <ElectronicsSection
          goBack={() => setView("main")}
          visitCount={electronicsCount}
          laptopCount={laptopCount}
          incrementLaptopCount={incrementLaptopCount}
        />
      )}

      {view === "clothing" && <ClothingSection goBack={() => setView("main")} visitCount={clothingCount} />}
    </div>
  );
};

const StoreCard = ({ title, count, onClick }) => (
  <div className="card" onClick={onClick}>
    <h2>{title}</h2>
    <p>Visited: {count} times</p>
  </div>
);

export default MainStore;
