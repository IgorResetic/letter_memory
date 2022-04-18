import { useEffect, useState } from "react";
import "./SelectionCard.css";

const SelectionCard = ({ item, flipped, handler }) => {
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
          <img
            className="front"
            src={item.src}
            alt="card item"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
