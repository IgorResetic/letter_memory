import GameRow from "../components/game_row/GameRow"
import { useEffect, useState } from "react";
import SingleItem from "../components/single_item/SingleItem"
import useEventListener from "../utils/listeners/UseEventListener";
import './ReadWriteGame.css';
import { acctionImages, levelImages, trollsCharacrersImages } from "./ReadWriteGameConstants";
import '../utils/style.css';

var characters = [
    { key: 1, src: "/img/trolls/trolls_branch.png", name: "GRANKO", selected: false },
    { key: 2, src: "/img/trolls/trolls_lala.png", name: "LALA", selected: false },
    { key: 3, src: "/img/trolls/trolls_creek.png", name: "MIRO", selected: false }
]

const ReadWriteGame = () => {

    const [choiceCharacter, setChoiceCharacter] = useState(null);
    const [selected, setSelected] = useState(false);
    const [choiceImages, setChoiceImages] = useState(trollsCharacrersImages)
    const [imagesIndex, setImagesIndex] = useState(0)

    const handleSelection = () => {
        setSelected(true)
    }

    const handleKeyEntery = ({ key }) => {
        var character = choiceImages.find((obj) => {
            return obj.key == key
        })

        if (character != null) {
            setChoiceCharacter(character)
            setSelected(true)
        }
    }

    const handlerStartNewChoice = () => {
        console.log("Start new choice")
        setImagesIndex(1)
        setSelected(false)
        console.log("Image index: " + imagesIndex )
        setChoiceImages(levelImages[imagesIndex + 1])
        setChoiceCharacter(null)
    }

    const showLetters = () => {
        console.log("choiceCharacter")
        console.log(choiceCharacter)
        if (choiceCharacter != null) {
            return (
                <GameRow character={choiceCharacter} handler={handlerStartNewChoice}/>
            )
        } 
    }

    useEventListener("keydown", handleKeyEntery)

    return (
        <div className="ReadWrite">
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