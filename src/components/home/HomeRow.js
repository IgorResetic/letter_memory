import React from "react";
import { memoryGames, frozenImages, trollsImages } from "../../utils/constants";
import SingleCard from "./SingleItem";
import SingleItem from "./SingleItem";
import './HomeRow.css';

const HomeRow = ({ title, items, handler }) => {

    const handleChoice = (cards) => {
        handler(cards)
    }  

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