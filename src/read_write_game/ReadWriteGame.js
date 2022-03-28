import GameRow from "../components/game_row/GameRow"
import { useEffect, useState } from "react";
import SingleItem from "../components/single_item/SingleItem"
import useEventListener from "../utils/listeners/UseEventListener";
import './ReadWriteGame.css';

var characters = [
    { key: 1, src: "/img/trolls/trolls_branch.png", name: "GRANKO", selected: false },
    { key: 2, src: "/img/trolls/trolls_lala.png", name: "LALA", selected: false },
    { key: 3, src: "/img/trolls/trolls_creek.png", name: "MIRO", selected: false }
]

const ReadWriteGame = () => {

    const [choiceCharacter, setChoiceCharacter] = useState(null);
    const [selected, setSelected] = useState(false);

    const handleSelection = () => {
        console.log("Item selected")
        setSelected(true)
    }

    const handleKeyEntery = ({ key }) => {
        console.log("Key" + key)
        var character = characters.find((obj) => {
            return obj.key == key
        })

        if (character != null) {
            setChoiceCharacter(character)
            setSelected(true)
        }

        // character.selected = true
        /*
        if(character != null) {
            setChoiceCharacter(character)
        }
        */
        console.log(character)
    }

    const showLetters = () => {
        if(choiceCharacter != null) {
            return(
                <GameRow character={choiceCharacter}/>
            )
        }
    }

    useEventListener("keydown", handleKeyEntery)

    return (
        <div className="ReadWrite">
            <div className="item-row">
                {characters.map((character) => (
                    <div className={selected ? "selected" : ""} key={character.key}>
                        <SingleItem key={character.key} item={character} handler={handleSelection} />
                    </div>
                ))}
            </div>
            <div>
                {showLetters() }
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

//<GameRow character={character} selected={character == choiceCharacter}/>
