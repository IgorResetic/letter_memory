import GameRow from "../components/game_row/GameRow"
import { useEffect, useState } from "react";
import SingleItem from "../components/single_item/SingleItem"
import useEventListener from "../utils/listeners/UseEventListener";
import './ReadWriteGame.css';
import { acctionImages, levelImages, trollsCharacrersImages } from "./ReadWriteGameConstants";
import '../utils/style.css';
import Sentece from "./Sentece";

const ReadWriteGame = () => {

    const [choiceCharacter, setChoiceCharacter] = useState(null);
    const [selected, setSelected] = useState(false);
    const [choiceImages, setChoiceImages] = useState(trollsCharacrersImages)
    const [selectedPosition, setSelectedPosition] = useState(1)
    const [finalSentence, setFinalSentece] = useState("")
    const [isFinish, setIsFinish] = useState(false)
    const [gameStarted, setGameStarted] = useState(true)

    const handleSelection = () => {
        setSelected(true)
    }

    const handleKeyEntery = ({ key }) => {
        var character = choiceImages.find((obj) => {
            return obj.key == key
        })

        if (character != null && !selected) {
            setGameStarted(false)
            setChoiceCharacter(character)
            setSelectedPosition(key)
            setFinalSentece(finalSentence + " " + character.name)
            setSelected(true)
        }
    }

    const handlerStartNewChoice = () => {
        setSelected(false)
        if (choiceImages[selectedPosition - 1].next !== null) {
            setChoiceImages(choiceImages[selectedPosition - 1].next)
        } else {
            console.log("END GAME: " + finalSentence)
            setIsFinish(true)
        }
        setChoiceCharacter(null)
    }

    const handlerStartNewGame = () => {
        console.log("NEW GAME START")
        setIsFinish(false)
        setSelected(false)
        setChoiceImages(trollsCharacrersImages)
        setFinalSentece("")

    }

    const showLetters = () => {
        console.log("choiceCharacter")
        console.log(choiceCharacter)
        if (choiceCharacter != null) {
            return (
                <GameRow character={choiceCharacter} handler={handlerStartNewChoice} />
            )
        }
    }

    const showFinalSentece = () => {
        console.log("SHOW FINAL")
        if(isFinish) {
            return(
                <Sentece sentece={finalSentence} newGame={handlerStartNewGame}/>
            )
        }
    }

    useEventListener("keydown", handleKeyEntery)

    return (
        <div className="ReadWrite">
            <div className={isFinish ? "end-game" : ""}>
                <div className={selected ? "selected" : ""}>
                    <div className="flew-row">
                        {choiceImages.map((character) => (
                            <div className="item-cards" key={character.key}>
                                <SingleItem key={character.key} item={character} handler={handleSelection} flipped={false} />
                            </div>
                        ))}
                    </div>

                    <div className="letters">
                        {showLetters()}
                    </div>
                </div>
                <div className="final-txt">
                    {showFinalSentece()}
                </div>
            </div>
        </div>
    )
    /*
    return(
        <div className="ReadWrite">
            <GameRow character={character}/>
        </div>
    )
    */
}

export default ReadWriteGame;