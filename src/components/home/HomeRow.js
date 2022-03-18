import React from "react";
import SingleItem from "./SingleItem";
import useEventListener from "../listeners/UseEventListener"
import './HomeRow.css';


const HomeRow = ({ title, items, handler }) => {

    const handleChoice = (cards) => {
        handler(cards)
    }  

    const handleKeyEntery = ({key}) => {
        console.log("key" + key)
        var card = items.find((obj) => {
            console.log(obj)
            return obj.position === key
          });
          
        handler(card.cards)
    }

    useEventListener("keydown", handleKeyEntery);

    return ( 
        <div className="HomeRow">
            <h3 className="row-title">{title}</h3>
            <div className="row">
                {items.map((item) => (
                    <SingleItem key={item.key} item={item} handler={handleChoice}/>
                ))}
            </div>
        </div>
    )
}

export default HomeRow;