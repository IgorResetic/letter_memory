import { useEffect, useState } from "react";
import "./SingleLetter.css";

const SingleLetter = ({ card, handleChoice, flipped, disabled }) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    };

    useEffect(() => {
        console.log("SET ITEM: " + flipped)
        if (flipped && isFlipped == false) {
            setIsFlipped(true)
        }
    })

    return (
        <div className="card">
            <div className={isFlipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src={card.back.src}
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    );
}

export default SingleLetter;