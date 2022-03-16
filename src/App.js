import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import * as Constants from "./utils/constants";

var counter = 0;

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [currentLetter, setCurrentLetter] = useState("");
  const [offset, setOffest] = useState(0);

  const handler = ({ key }) => {
    console.log("Pressed: " + key.toUpperCase());
    var letterCard = cards.find((obj) => {
      return obj.back.letter === key.toUpperCase();
    });
    
    if (letterCard && letterCard.back.letter !== currentLetter) {
      setCurrentLetter(letterCard.back.letter);
      handleChoice(letterCard);
    } 

    letterCard = null;
  };

  useEventListener("keydown", handler);

  // shuffle cards
  const shullfleCards = () => {
    setCurrentLetter("")
    var selectedBackImages = Constants.backImages.slice(offset, offset + Constants.trollsImages.length * 2)
    console.log(selectedBackImages)
    var shuffledBack = selectedBackImages.sort(() => Math.random() - 0.5);

    const shuffleCards = [...Constants.trollsImages, ...Constants.trollsImages]
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

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("Selected");
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
    <div className="App">
      <h1>Frozen Magic Match</h1>
      <div className="main-bar">
        <button className="button" onClick={shullfleCards}>New Game</button>
        <input className="input" type="number" min="0" max="8" value={offset} onChange={e => setOffest(e.target.value)}></input>
      </div>

      <div className="card-grid">
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

export default App;
