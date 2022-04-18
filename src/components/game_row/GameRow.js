import { useEffect, useState } from "react";
import { getNames } from "../../read_write_game/ReadWriteHelper";
import { backImages } from "../../utils/constants";
import useEventListener from "../../utils/listeners/UseEventListener";
import SingleCard from "../single_card/SingleCard";
import SingleItem from "../single_item/SingleItem";
import SingleLetter from "../single_letter/SingleLetter";
import './GameRow.css'

const GameRow = ({ character, handler }) => {

    const [flippedLetter, setFlippedLetter] = useState(null)
    const [letterIndex, setLetterIndex] = useState(0)
    const [letters, setLetters] = useState([])

    console.log("STARRT GAME ROW: " + character.name)
    console.log("letterIndex: " + letterIndex)

    // handle a choice
    const clickHandler = (character) => {
        console.log("handle choice")
    };

    const letterClickHandler = () => {
        console.log("Letter clicked")
    }

    const letterKeyHandler = ({ key }) => {
        if ((letterIndex === letters.length) && key === " ") {
            console.log("Start new action")
            setLetters([])
            setLetterIndex(0)
            handler()
        }

        var card = letters[letterIndex]
        if (card.letter === key.toUpperCase()) {
            console.log("TOČNO")
            setLetters((prevLetters) => {
                return prevLetters.map((letter) => {
                    if(letter.key === card.key) {
                        return { ...letter, select: true };
                    } else {
                        return letter
                    }
                })
            })
            setFlippedLetter(getNames(character.name)[letterIndex].letter)
            console.log("END")
            setLetterIndex(letterIndex + 1)    
        }

        console.log("FINAL")
    }

    useEventListener("keydown", letterKeyHandler)

    useEffect (() => {
        console.log("USE EFFECT: " + character.name)
        setLetters(getNames(character.name))
    }, [character])

    return (
        <div className="GameRow">
            <div className="show">
                <div className="game-row">
                    <SingleItem className="char-img" key={character.key} item={character} handler={clickHandler} flipped={false} />
                    <div className="letter-cards">
                    {letters.map((letter) => (
                        <SingleLetter
                            key={letter.key}
                            card={letter}
                            handler={letterClickHandler}
                            flipped={letter.letter == flippedLetter && letter.select}
                            disabled={false}
                        />
                    ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameRow;
