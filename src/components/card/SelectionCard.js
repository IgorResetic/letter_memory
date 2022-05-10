import { useEffect, useState } from "react";
import "./SelectionCard.css";

const SelectionCard = ({ item, flipped, handler, result }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (flipped && isFlipped == false) {
      setIsFlipped(true);
    }
  });

  const handleClick = () => {
    handler(item.name);
  };

  return (
    <div className="selection-item">
        <div className="selection-card">
          <div className="selection-number">{item.position}</div>
          <div className="img-front">
            <div className={flipped ? "flipped-word" : ""}>
              <img
                className="front-img"
                src={item.src}
                alt="card item"
                onClick={handleClick}
              />
              <img className="back-img" src={result.src} alt="result back" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default SelectionCard;
