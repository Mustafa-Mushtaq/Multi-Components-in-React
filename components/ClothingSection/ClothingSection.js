import "./ClothingSection.css";


const ClothingSection = ({ goBack, visitCount }) => {
  return (
    <div className="section">
      <h2>👕 Clothing Section</h2>
      <p>Visited: {visitCount} times</p>
      <button onClick={goBack} className="button">⬅️ Back to Main Store</button>
    </div>
  );
};

export default ClothingSection;
