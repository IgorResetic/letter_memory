import { useEffect, useState } from "react";
import { vlakUSnjeguImages } from "./WordGUessrConstants";
import GameRow from "../components/game_row/GameRow";
import useEventListener from "../utils/listeners/UseEventListener";
import "./WordGuessr.css";
import SingleItem from "../components/single_item/SingleItem";
import SelectionCard from "../components/card/SelectionCard";

const WordGuessr = () => {
    const [choiceImage, setChoiceImage] = useState(vlakUSnjeguImages[0]);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(false);
    const [currentItem, setCurrentItem] = useState(null)


    const handlerStartNewCharacter = () => {
        if (index !== vlakUSnjeguImages.length - 1) {
            console.log("END GAME");
            var newIndex = index + 1;
            setChoiceImage(vlakUSnjeguImages[newIndex]);
            setIndex(newIndex);
        } else {
            console.log("GAME ENDED START WORD GUESS");
            setChoiceImage(vlakUSnjeguImages[0])
            setIndex(0)
            setSelected(true);
        }
    };

    const guessGameHandler = () => {
        console.log("END GAME CLICK");
    };

    const keyDownHandler = ({ key }) => {
        if (key === choiceImage.position && selected) {
            console.log("END GUESS GAME" + getRandomInt(3))
            var newIndex = getRandomInt(2)
            setCurrentItem(newIndex)
        
            setIndex(newIndex)
            setChoiceImage(vlakUSnjeguImages[newIndex])

            if(newIndex === vlakUSnjeguImages.length) {
                setIndex(0)
                setChoiceImage(vlakUSnjeguImages[0])
                setSelected(true)
            }
        }
    }

    function getRandomInt(max) {
        var random = Math.floor(Math.random() * max);
        
        console.log("GET RANDOM !!!! " + random)

        if(currentItem != null && random == currentItem) {
            if(random == 2) {
                random = random - 1 
            } else {
                random = random + 1
            }
        }
        return random;
      }

      
    useEventListener("keydown", keyDownHandler)

    return (
        <div className="WordGuesser">
            <div className={selected ? "end-writeing" : ""}>
                <div className="write">
                    <GameRow character={choiceImage} handler={handlerStartNewCharacter} />
                </div>
                <div className="guess-container ">
                    <div className="guess-word">{choiceImage.name}</div>
                    <div className="guess">
                        {vlakUSnjeguImages.map((character) => (
                            <div className="flew-row" key={character.key}>
                                {/* <SingleItem key={character.key} item={character} handler={guessGameHandler}  flipped={false}/> */}
                                <SelectionCard
                                    className='card-item'
                                    item={character}
                                    handler={guessGameHandler}
                                    flipped={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WordGuessr;
