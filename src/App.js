 import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

const backImages = [
  { src: "/img/cover/cover_a.png", letter: 'A' },
  { src: "/img/cover/cover_b.png", letter: 'B' },
  { src: "/img/cover/cover_c.png", letter: 'C' },
  { src: "/img/cover/cover_d.png", letter: 'D' },
  { src: "/img/cover/cover_e.png", letter: 'E' },
  { src: "/img/cover/cover_f.png", letter: 'F' },
  { src: "/img/cover/cover_g.png", letter: 'G' },
  { src: "/img/cover/cover_h.png", letter: 'H' },
  { src: "/img/cover/cover_i.png", letter: 'I' },
  { src: "/img/cover/cover_j.png", letter: 'J' },
  { src: "/img/cover/cover_k.png", letter: 'K' },
  { src: "/img/cover/cover_l.png", letter: 'L' },
  { src: "/img/cover/cover_m.png", letter: 'M' },
  { src: "/img/cover/cover_n.png", letter: 'N' },
  { src: "/img/cover/cover_o.png", letter: 'O' },
  { src: "/img/cover/cover_p.png", letter: 'P' },
  { src: "/img/cover/cover_r.png", letter: 'R' },
  { src: "/img/cover/cover_s.png", letter: 'S' },
  { src: "/img/cover/cover_t.png", letter: 'T' },
  { src: "/img/cover/cover_u.png", letter: 'U' },
  { src: "/img/cover/cover_v.png", letter: 'V' },
  { src: "/img/cover/cover_z.png", letter: 'Z' },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var counter = 0


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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [currentLetter, setCurrentLetter] = useState("")
  const [count, setCount] = useState(0)
 
  const handler = ({ key }) => {
    console.log("PRessed: " + key.toUpperCase())
    var letterCard = cards.find(obj => {
      return obj.back.letter === key.toUpperCase()
    })

    if(letterCard.back.letter !== currentLetter) {
      setCurrentLetter(letterCard.back.letter)
      handleChoice(letterCard)
    }

    letterCard = null
  }

  useEventListener("keydown", handler)

  // shuffle cards
  const shullfleCards = () => {
    console.log("SHUFFLE CARDS")
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), back: backImages[counter++] }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
    counter = 0;
  };
  
  const getBackImgSrc = () => {
    console.log("Get BACK IMG SRC")
    //var imgSrc = backImages[counter].src
    var imgSrc = backImages[count]
    // counter = counter + 1
    setCount(count + 1)
    return imgSrc
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  /*
  useEffect(() => {
    document.addEventListener("keypress", (key) => {
      console.log("Pristinuto: " + key.key)
      console.log(cards)
      var letterCard = cards.find(obj => {
        console.log("letter")
        console.log(obj.back.letter)
        console.log(key.key.toUpperCase())
        return obj.back.letter === key.key.toUpperCase()
      })

      console.log(letterCard)
      handleChoice(letterCard)
    })
  })
  */

  // compare two selected cards
  useEffect(() => {
    console.log("choiceOne")
    console.log(choiceOne)
    console.log("choiceTwo")
    console.log(choiceTwo)
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        console.log("Selected")
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
    setDisabled(false)
  };

  // start a new game autmagically
  useEffect(() => {
    counter = 0
    shullfleCards()
  }, [])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shullfleCards}>New Game</button>

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
