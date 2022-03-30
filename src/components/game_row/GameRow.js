import { useEffect, useState } from "react";
import { getNames } from "../../read_write_game/ReadWriteHelper";
import { backImages } from "../../utils/constants";
import useEventListener from "../../utils/listeners/UseEventListener";
import SingleCard from "../single_card/SingleCard";
import SingleItem from "../single_item/SingleItem";
import './GameRow.css'

const GameRow = ({ character }) => {

    const [flippedLetter, setFlippedLetter] = useState(null)
    const [letterIndex, setLetterIndex] = useState(0)

    // handle a choice
    const clickHandler = (character) => {
        console.log("handle choice")
    };

    const letterClickHandler = () => {
        console.log("Letter clicked")
    }

    const letterKeyHandler = ({ key }) => {
        console.log("key: " + key + ":" + getNames(character.name)[letterIndex].letter)
        if (getNames(character.name)[letterIndex].letter === key.toUpperCase()) {
            console.log("TOČNO")
            setFlippedLetter(getNames(character.name)[letterIndex].letter)
            console.log("END")
            setLetterIndex(letterIndex + 1)
        }

    
        console.log("FINAL")
    }

    useEventListener("keydown", letterKeyHandler)

    return (
        <div className="GameRow">
            <div className="show">
                <div className="letter-cards">
                    <SingleItem key={character.key} item={character} handler={clickHandler} flipped={false} />
                    {getNames(character.name).map((letter) => (
                        <SingleItem
                            flipped={letter.letter == flippedLetter }
                            key={letter.key}
                            item={letter}
                            handler={letterClickHandler}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameRow;

/*
{cards.map((letter) => (
    <SingleItem
        key={letter.key}
        item={letter}
        handler={letterClickHandler}
    />
))}
*/

/*

            <div className={selected ? "visibily" : "invisible"}>
                <div className="letter-cards">
                {cards.map((letter) => (
                    <SingleItem
                        key={letter.key}
                        item={letter}
                        handler={letterClickHandler}
                    />
                ))}
                </div>
            </div>
            
*/