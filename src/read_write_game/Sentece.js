import { useState } from 'react';
import useEventListener from '../utils/listeners/UseEventListener';
import './Sentence.css'

const Sentece = ({ sentece, newGame }) => {

    const [activeWord, setActiveWord] = useState(0)

    var words = sentece.trim().split(" ");

    const handleKeyEntery = ({ key }) => {
        console.log("Test_ ##########  " + words.length + " ####### " + words + " SENTECE" + sentece + "active: " + activeWord)
        if (key === " ") {
            setActiveWord(activeWord + 1)
            if(activeWord == words.length) {
                console.log("Start new game now")
                newGame()
            }
        }
    }

    useEventListener("keydown", handleKeyEntery)

    return(
        <div className="sentence">
            {words.map((word, index) => (
                <span className={activeWord == index ? "active" : ""}>{word} </span>
            ))}
        </div>
    )
}

export default Sentece;