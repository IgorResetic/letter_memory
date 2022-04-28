import { useEffect, useState } from "react";
import { familyImages } from "./WordGUessrConstants";
import GameRow from "../components/game_row/GameRow";
import useEventListener from "../utils/listeners/UseEventListener";
import "./WordGuessr.css";
import SingleItem from "../components/single_item/SingleItem";
import SelectionCard from "../components/card/SelectionCard";
import SingleCard from "../components/single_card/SingleCard";

const WordGuessr = () => {
    const [choiceImage, setChoiceImage] = useState(familyImages[0]);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(false);
    const [currentItem, setCurrentItem] = useState(null)
    const [flipped, setFlipped] = useState(false)
    const [flippedKey, setFlippedKey] = useState(null)
    const [finalImages, setFinalImages] = useState(familyImages)
    const [position, setPosition] = useState(0)
     // var radnomSet = randomInts(3, 2)

     
 
    const handlerStartNewCharacter = () => {
        if (index !== familyImages.length - 1) {
            console.log("END GAME");
            var newIndex = index + 1;
            setChoiceImage(familyImages[newIndex]);
            setIndex(newIndex);
        } else {
            console.log("GAME ENDED START WORD GUESS");
            setChoiceImage(familyImages[0])
            setIndex(0)
            setSelected(true);
        }
    };

    const guessGameHandler = () => {
        console.log("END GAME CLICK");
    };

    const keyDownHandler = ({ key }) => {
        if (key === choiceImage.position && selected) {
            var newIndex = index
            setCurrentItem(newIndex)

            setIndex(newIndex + 1)
            setChoiceImage(familyImages[newIndex])

            setFlippedKey(key)
            setFlipped(true)

            console.log("length: " + familyImages.length + "index: " + newIndex)
            if(newIndex === familyImages.length) {
                console.log("#############################################")
                setIndex(0)
                setChoiceImage(familyImages[0])
                setSelected(true)
            }
        }
    }

    function myRandomInts(quantity, max){
        const arr = []
        while(arr.length < quantity){
          var candidateInt = Math.floor(Math.random() * max)
          if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
      return(arr)
      }

    useEventListener("keydown", keyDownHandler)

    useEffect(() => {
        setFinalImages((prevImages) => {
            return prevImages.map((image) => {
                if(image.position === flippedKey) {
                    return {...image, match: true };
                } else {
                    return image;
                }
            })
        })
    }, [flipped])

    useEffect(() => {
        if(index === familyImages.length) {
            console.log(" $$$$$$$$$$$$$$$$$$$$$$$ ")
            setChoiceImage(familyImages[0])
            setIndex(0)
            setSelected(true);
        }
    }, [index])

    return (
        <div className="WordGuesser">
            <div className={selected ? "end-writeing" : ""}>
                <div className="write">
                    <div>
                    <GameRow character={choiceImage} handler={handlerStartNewCharacter} />
                    </div>
                </div>
                <div className="guess-container ">
                    <div className="guess-word">{choiceImage.name}</div>
                    <div className="guess">
                        {finalImages.map((character) => (
                            <div className="flew-row" key={character.key}>
                                {/* <SingleItem key={character.key} item={character} handler={guessGameHandler}  flipped={false}/> */}
                                <SelectionCard
                                    className='card-item'
                                    item={character}
                                    handler={guessGameHandler}
                                    flipped={flippedKey == character.position || character.match}
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
