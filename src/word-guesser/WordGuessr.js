import { useEffect, useState } from "react";
import { wordGuesserImg, resultImages } from "./WordGUessrConstants";
import GameRow from "../components/game_row/GameRow";
import useEventListener from "../utils/listeners/UseEventListener";
import "./WordGuessr.css";
import SingleItem from "../components/single_item/SingleItem";
import SelectionCard from "../components/card/SelectionCard";
import SingleCard from "../components/single_card/SingleCard";

const WordGuessr = () => {
    const [choiceImage, setChoiceImage] = useState(wordGuesserImg[0]);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState(false);
    const [currentItem, setCurrentItem] = useState(null)
    const [flipped, setFlipped] = useState(false)
    const [flippedKey, setFlippedKey] = useState(null)
    const [finalImages, setFinalImages] = useState(wordGuesserImg)
    const [position, setPosition] = useState(0)
    const [result, setResult] = useState(resultImages[1])
    const [pressKey, setPressKey] = useState(null)
    const [guessed, setGuessed] = useState(false)
     // var radnomSet = randomInts(3, 2)


    const firstLetterToUpper = (word) => {
        var newWord = word
        console.log("WORD: " + newWord.charAt(0)+ newWord.slice(1).toLowerCase());

        return newWord.charAt(0).toUpperCase() + newWord.slice(1).toLowerCase()
    }

    const handlerStartNewCharacter = () => {
        if (index !== wordGuesserImg.length - 1) {
            console.log("END GAME");
            var newIndex = index + 1;
            setChoiceImage(wordGuesserImg[newIndex]);
            setIndex(newIndex);
        } else {
            console.log("GAME ENDED START WORD GUESS");
            setChoiceImage(wordGuesserImg[1])
            setIndex(0)
            setSelected(true);
        }
    };

    const guessGameHandler = () => {
        console.log("END GAME CLICK");
    };

    const keyDownHandler = ({ key }) => {
        if(key === " " && guessed) {
            setPressKey(null)
            var newIndex = getRandomInt(wordGuesserImg.length - 1)
            setCurrentItem(newIndex)

            setIndex(newIndex)
            setChoiceImage(wordGuesserImg[newIndex])
            setGuessed(false);
        }
        setPressKey(key)
        if (key === choiceImage.position && selected) {
            setFlipped(true)
            /*
            var newIndex = getRandomInt(2)
            setCurrentItem(newIndex)

            setIndex(newIndex)
            setChoiceImage(wordGuesserImg[newIndex])
            */
            setResult(resultImages[0])
            setGuessed(true)

            // setFlippedKey(key)
            // setFlipped(true)

            /*
            console.log("length: " + wordGuesserImg.length + "index: " + newIndex)
            if(newIndex === wordGuesserImg.length) {
                console.log("length: #############################################")
                setIndex(0)
                setChoiceImage(wordGuesserImg[0])
                newIndex = 0
                setFlipped(false)
                setFlippedKey(null)
                setSelected(false)
            }
            */
        } else {
            setResult(resultImages[1])
        }
        console.log("!!!!!!!!!!RESULT: " + result.name)

    }

    function getRandomInt(max) {
        var random = Math.floor(Math.random() * max)

        if(currentItem != null && random == currentItem) {
            if(random == 2) {
                random = random - 1; 
            } else {
                random = random + 1;
            }
        }

        return random;
    }

    function myRandomInts(quantity, max){
        const arr = []
        while(arr.length < quantity){
          var candidateInt = Math.floor(Math.random() * max)
          if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
      return(arr)
      }

    useEventListener("keyup", keyDownHandler)

    /*
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
        setFinalImages((prevImages) => {
            return prevImages.map((image) => {
                if(image.position === pressKey) {
                    // return {...image, match: true };
                    
                    if(pressKey == choiceImage.key) {
                        return {...image, match: true };
                    } else {
                        return {...image, match: true };
                    }
                    
                } 
            })
        })
    }, [pressKey])
        useEffect(() => {
        setFinalImages((prevImages) => {
            return prevImages.map((image) => {
                if(image.position === pressKey) {
                    return {...image, match: true };
                } 
            })
        })
    }, [pressKey])
    */


    useEffect(() => {
        setFinalImages((prevImages) => {
            return prevImages.map((image) => {
                var matchRes = {...image, match: true };
                
                if(pressKey == image.position) {
                    return {...image, match: true };
                } else {
                    return {...image, match: false };
                }
                /*
               
                if(pressKey == choiceImage.key) {
                    return {...matchRes, match: true };
                } else {
                    return {...matchRes, match: true };
                }
                */
            })
        })
    }, [pressKey])


/*
    useEffect(() => {
        if(index === wordGuesserImg.length) {
            setChoiceImage(wordGuesserImg[0]);
            setIndex(0);
            setFlipped(false);
            setFlippedKey(null);
            setSelected(true);
            setFinalImages((prevImages) => {
                return prevImages.map((image) => {
                    return  {...image, match: false}
                })
            })
        }
    }, [index])
    */

    return (
        <div className="WordGuesser">
            <div className={selected ? "end-writeing" : ""}>
                <div className="write">
                    <div>
                    <GameRow character={choiceImage} handler={handlerStartNewCharacter} />
                    </div>
                </div>
                <div className="guess-container ">
                    <div className="guess-word">{firstLetterToUpper(choiceImage.name)}</div>
                    <div className="guess">
                        {finalImages.map((character) => (
                            <div className="flew-row" key={character.key}>
                                {/* <SingleItem key={character.key} item={character} handler={guessGameHandler}  flipped={false}/> */}
                                <SelectionCard
                                    className='card-item'
                                    item={character}
                                    handler={guessGameHandler}
                                    //flipped={flippedKey == character.position || character.match}
                                    flipped={pressKey != null && (character.key == pressKey || character.match) }
                                    // flipped={character.res != null}
                                    result={result}
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
