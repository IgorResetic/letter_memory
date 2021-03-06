import { computeHeadingLevel } from "@testing-library/react";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import "./MemoryGame.css";
import SingleCard from "../components/single_card/SingleCard";
import * as Constants from "../utils/constants";
import useEventListener from "../utils/listeners/UseEventListener"
import { getImages, getTitle } from "./MemoryGameHelpers";

var counter = 0;

const MemoryGame = () => {
  const { name } = useParams()

  const navigate = useNavigate()

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [currentLetter, setCurrentLetter] = useState("");
  const [offset, setOffest] = useState(5);

  const handler = ({ key }) => {
    if (key === " ") {
      shullfleCards();
    }

    if (key === "Backspace") {
      navigate('/')
    }

    console.log()

    var letterCard = cards.find((obj) => {
      return obj.back.letter === key.toUpperCase();
    });
    
    if (letterCard && letterCard.back.letter !== currentLetter && !letterCard.matched) {
      setCurrentLetter(letterCard.back.letter);
      handleChoice(letterCard);
    }

    letterCard = null;
  };

  useEventListener("keyup", handler);

  // shuffle cards
  const shullfleCards = () => {
    setCurrentLetter("")

    var images = getImages(name)

    var selectedBackImages = Constants.backImages.slice(offset, offset + images.length * 2)
    var shuffledBack = selectedBackImages.sort(() => Math.random() - 0.5);

    const shuffleCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        back: shuffledBack[counter++],
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
    counter = 0;
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const setLetterOffset = (event) => {
    setOffest(event.target.value)
  }

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setCurrentLetter("");
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start a new game autmagically
  useEffect(() => {
    counter = 0;
    shullfleCards();
  }, []);

  return (
    <div className="MemoryGame">
      <h1>{getTitle(name)} Magic Match</h1>
      <div className="main-bar">
        <button className="button" onClick={shullfleCards}>New Game</button>
        <input className="input" type="number" min="0" max="8" value={offset} onChange={setLetterOffset}></input>
      </div>

      <div className="card-grid-mem">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default MemoryGame;
